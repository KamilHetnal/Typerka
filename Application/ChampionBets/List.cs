using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.ChampionBets
{
    public class List
    {
        public class Query : IRequest<Result<List<ChampionBetDto>>> {}

        public class Handler : IRequestHandler<Query, Result<List<ChampionBetDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<List<ChampionBetDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<ChampionBetDto>>.Success(await _context.ChampionBets
                    .ProjectTo<ChampionBetDto>(_mapper.ConfigurationProvider)
                    .ToListAsync(cancellationToken));
            }
        }
    }
}