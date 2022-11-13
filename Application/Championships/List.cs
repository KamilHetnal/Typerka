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
using Domain;

namespace Application.Championships
{
    public class List
    {
        public class Query : IRequest<Result<List<Championship>>> {}

        public class Handler : IRequestHandler<Query, Result<List<Championship>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<List<Championship>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<Championship>>.Success(await _context.Championships
                    .ProjectTo<Championship>(_mapper.ConfigurationProvider)
                    .ToListAsync(cancellationToken));
            }
        }
    }
}