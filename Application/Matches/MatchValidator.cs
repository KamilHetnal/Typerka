using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using FluentValidation;

namespace Application.Matches
{
    public class MatchValidator : AbstractValidator<Match>
    {
        public MatchValidator()
        {   
            RuleFor(x => x.MatchDate).NotEmpty();
        }
    }
}