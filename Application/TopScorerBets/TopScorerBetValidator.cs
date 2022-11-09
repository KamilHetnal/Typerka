using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Domain;

namespace Application.TopScorerBets
{
    public class TopScorerBetValidator : AbstractValidator<TopScorerBet>
    {
        public TopScorerBetValidator()
        {
            RuleFor(x => x.TopScorerId).NotNull();
        }    
    }
}