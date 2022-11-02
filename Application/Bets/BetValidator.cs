using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using FluentValidation;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Bets
{
    public class BetValidator : AbstractValidator<Bet>
    {
        public BetValidator()
        {
            RuleFor(x => x.AwayScore).NotNull().GreaterThan(-1);
            RuleFor(x => x.HomeScore).NotNull().GreaterThan(-1);
        }    
    }
}