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
    public class UserRolesList
    {
        public class Query : IRequest<Result<List<IdentityUserRole<string>>>> { }
        public class Handler : IRequestHandler<Query, Result<List<IdentityUserRole<string>>>>
        {

            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<List<IdentityUserRole<string>>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var roles = await _context.UserRoles
                    .ToListAsync(cancellationToken);

                return Result<List<IdentityUserRole<string>>>.Success(roles);
            }
        }
    }
}