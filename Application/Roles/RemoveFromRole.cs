using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Persistence;

namespace Application.Roles
{
    public class RemoveFromRole
    {
        public class Command : IRequest<Result<Unit>>
        {
            public string UserName { get; set; }
            public string RoleName { get; set; }
        }
        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly UserManager<AppUser> _userManager;
            private readonly DataContext _context;
            private readonly RoleManager<IdentityRole> _roleManager;

            public Handler(UserManager<AppUser> userManager, DataContext context, RoleManager<IdentityRole> roleManager)
            {
                _userManager = userManager;
                _context = context;
                _roleManager =roleManager;
                
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                try
                {
                    var user = await _userManager.FindByNameAsync(request.UserName);

                    if (user == null) return null;

                    var role = await _roleManager.FindByNameAsync(request.RoleName);

                    if (role == null) return null;

                    await _userManager.RemoveFromRoleAsync(user, request.RoleName);

                }

                catch
                {
                    throw;
                }

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}