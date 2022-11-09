using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using FluentValidation;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.ChampionBets
{
    public class ChampionBetValidator : AbstractValidator<ChampionBet>
    {
        public ChampionBetValidator()
        {
            RuleFor(x => x.ChampionId).NotNull();
        }    
    }
}