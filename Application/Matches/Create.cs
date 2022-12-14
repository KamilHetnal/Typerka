using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Matches
{
    public class Create
    {
        public class Command: IRequest<Result<Unit>>
        {
            public Match Match {get;set;}
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Match).SetValidator(new MatchValidator());
            }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var homeTeam = await _context.Teams.FirstOrDefaultAsync(x => x.Id == request.Match.HomeTeamId);
                var awayTeam = await _context.Teams.FirstOrDefaultAsync(x => x.Id == request.Match.AwayTeamId);

                var match = new Match
                {
                    HomeTeam = homeTeam,
                    HomeTeamId = homeTeam.Id,
                    AwayTeam = awayTeam,
                    AwayTeamId = awayTeam.Id,
                    MatchDate = request.Match.MatchDate
                };
 
                _context.Matches.Add(match);

                var result = await _context.SaveChangesAsync() > 0;

                if(!result) return Result<Unit>.Failure("Nie udało się stworzyć meczu");
                
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}