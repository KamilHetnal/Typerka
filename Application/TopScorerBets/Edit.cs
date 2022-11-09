using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.TopScorerBets
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public TopScorerBet Bet { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Bet).SetValidator(new TopScorerBetValidator());
            }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var bet = await _context.TopScorerBets.FindAsync(request.Bet.Id);

                var finalDate = new DateTime(2022,11,20,17,00,00);

                if (bet == null)
                    return null;

                _mapper.Map(request.Bet, bet);
                

                bet.BetDate = DateTime.Now;

                if (DateTime.Now >= finalDate)
                    return Result<Unit>.Failure("Turniej już się zaczął, nie można zmienić obstawienia");

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Nie udało się edytować obstawienia");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}