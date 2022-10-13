using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Roles
{
    public class Details
    {
        public class Query : IRequest<Result<IdentityRole>>
        {
            public string Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<IdentityRole>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<IdentityRole>> Handle(Query request, CancellationToken cancellationToken)
            {
                var role = await _context.Roles
                    .FirstOrDefaultAsync(x => x.Id == request.Id);

                return Result<IdentityRole>.Success(role);
            }
        }
    }
}