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

namespace Application.TopScorerBets
{
    public class Details
    {
        public class Query : IRequest<Result<TopScorerBetDto>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<TopScorerBetDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<TopScorerBetDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<TopScorerBetDto>.Success(await _context.TopScorerBets
                .ProjectTo<TopScorerBetDto>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync(x => x.Id == request.Id));
            }
        }
    }
}