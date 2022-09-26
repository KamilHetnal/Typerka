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

namespace Application.Matches
{
    public class List
    {
        public class Query : IRequest<Result<List<Match>>> {}

        public class Handler : IRequestHandler<Query, Result<List<Match>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<List<Match>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<Match>>.Success(await _context.Matches
                    .ProjectTo<Match>(_mapper.ConfigurationProvider)
                    .ToListAsync(cancellationToken));
            }
        }
    }
}