using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.Interfaces;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Bets
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Bet Bet { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;

            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _context = context;
                _userAccessor = userAccessor;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var bets = await _context.Bets.Include(u => u.AppUser).Include(m => m.Match).ToArrayAsync();

                var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == _userAccessor.GetUserId());

                var match = await _context.Matches.FirstOrDefaultAsync(x => x.Id == request.Bet.Match.Id);

                var bet = new Bet
                {
                    AppUser = user,
                    Match = request.Bet.Match,
                    HomeScore = request.Bet.HomeScore,
                    AwayScore = request.Bet.AwayScore,
                    BetDate = DateTime.Now
                };

                foreach (var item in bets)
                {
                    if (item.AppUser.Id == user.Id && item.Match.Id == match.Id)
                    {
                        return Result<Unit>.Failure("Mecz jest już obstawiony. Odśwież stronę, aby edytować swoje obstawienie");
                    }
                }

                request.Bet = bet;

                if (DateTime.Now >= match.MatchDate)
                    return Result<Unit>.Failure("Mecz już się zaczął, nie można dodać obstawienia");

                match.MatchBets.Add(bet);
                user.Bets.Append(bet);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Zgłoszenie wyniku nie powiodło się");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}