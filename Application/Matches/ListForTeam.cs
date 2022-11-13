using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Matches
{
    public class ListForTeam
    {
        public class Query : IRequest<Result<List<MatchDto>>> 
        { 
            public Guid TeamId { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<List<MatchDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<List<MatchDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<MatchDto>>.Success(await _context.Matches
                    .Where(x => x.HomeTeam.Id== request.TeamId | x.AwayTeam.Id == request.TeamId)
                    .ProjectTo<MatchDto>(_mapper.ConfigurationProvider)
                    .OrderBy(m => m.MatchDate)
                    .ToListAsync(cancellationToken));
            }
        }
    }
}
