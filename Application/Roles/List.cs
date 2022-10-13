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
    public class List
    {
        public class Query : IRequest<Result<List<IdentityRole>>> { }
        public class Handler : IRequestHandler<Query, Result<List<IdentityRole>>>
        {

            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<List<IdentityRole>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var roles = await _context.Roles
                    .ToListAsync(cancellationToken);

                return Result<List<IdentityRole>>.Success(roles);
            }
        }
    }
}