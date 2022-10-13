using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;
using Microsoft.AspNetCore.Identity;

namespace Application.Roles
{
    public class RoleValidator : AbstractValidator<IdentityRole>
    {
        public RoleValidator()
        {
            RuleFor(x => x.Name).NotEmpty();
        }
    }
}