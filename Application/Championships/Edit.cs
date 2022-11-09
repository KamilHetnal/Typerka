using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Championships
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Championship Championship { get; set; }
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
                var championship = await _context.Champions.FindAsync(request.Championship.Id);

                var championBets = await _context.ChampionBets.ToListAsync();

                var topScorerBets = await _context.TopScorerBets.ToListAsync();

                if (championship == null)
                    return null;

                _mapper.Map(request.Championship, championship);

                foreach(var champ in championBets)
                {
                    if (champ.ChampionId == championship.WinnerId)
                        champ.Points = 10;
                }

                foreach (var king in topScorerBets)
                    if (king.TopScorerId == championship.TopScorerId)
                        king.Points = 10;
                {
                    
                }

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Nie udało się edytować mistrzostw");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}