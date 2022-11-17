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

namespace Application.ChampionBets
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public ChampionBet ChampionBet { get; set; }
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

                if(user.ChampionBetId != null)
                    return Result<Unit>.Failure("Użytkownik ma stworzone obstawienie mistrza świata, zmień go zamiast dodawać nowy");

                var team = await _context.Teams.FirstOrDefaultAsync(x => x.Id == request.ChampionBet.ChampionId);

                var finalDate = new DateTime(2022,11,20,17,00,00);

                var bet= new ChampionBet
                {
                    AppUser = user,
                    ChampionId = request.ChampionBet.ChampionId,
                    Champion = team,
                    BetDate = DateTime.Now
                };

                request.ChampionBet = bet;

                if(DateTime.Now >= finalDate)
                    return Result<Unit>.Failure("Turniej już się zaczął, nie można dodać obstawienia");

                _context.ChampionBets.Add(bet);
                user.ChampionBetId = bet.Id;

                var result = await _context.SaveChangesAsync() > 0;

                if(!result) return Result<Unit>.Failure("Zgłoszenie nie powiodło się");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}