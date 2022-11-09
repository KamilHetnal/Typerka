using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Players
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Player Player { get; set; }
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
                var player = await _context.Players.FindAsync(request.Player.Id);

                if (player == null)
                    return null;

                _mapper.Map(request.Player, player);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Nie udało się edytować zawodnika");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}