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

namespace Application.TopScorerBets
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public TopScorerBet Bet { get; set; }
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
                var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == _userAccessor.GetUserId());

                if(user.TopScorerBetId != null)
                    return Result<Unit>.Failure("Użytkownik ma stworzone obstawienie mistrza świata, zmień go zamiast dodawać nowy");
                
                var player = await _context.Players.FirstOrDefaultAsync(x => x.Id == request.Bet.TopScorerId);

                var finalDate = new DateTime(2022,11,20,17,00,00);

                var bet= new TopScorerBet
                {
                    AppUser = user,
                    TopScorerId = request.Bet.TopScorerId,
                    TopScorer = player,
                    BetDate = DateTime.Now
                };

                request.Bet = bet;

                if(DateTime.Now >= finalDate)
                    return Result<Unit>.Failure("Turniej już się zaczął, nie można dodać obstawienia");

                _context.TopScorerBets.Add(bet);
                user.TopScorerBetId = bet.Id;

                var result = await _context.SaveChangesAsync() > 0;

                if(!result) return Result<Unit>.Failure("Zgłoszenie wyniku nie powiodło się");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}