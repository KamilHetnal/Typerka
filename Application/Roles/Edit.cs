using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Persistence;

namespace Application.Roles
{
     public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public IdentityRole Role { get; set; }
        }

        public class CommandValidaor : AbstractValidator<Command>

        {
            public CommandValidaor()
            {
                RuleFor(x => x.Role).SetValidator(new RoleValidator());
            }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var role = await _context.Roles.FindAsync(request.Role.Id);

                if(role == null) return null;

                request.Role.NormalizedName = request.Role.Name.ToUpper();

                _mapper.Map(request.Role, role);

                var result = await _context.SaveChangesAsync() > 0;

                if(!result) return Result<Unit>.Failure("Aktualizacja roli nie powiodła się");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}