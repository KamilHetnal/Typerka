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

namespace Application.Profiles
{
    public class List
    {
        public class Query : IRequest<Result<List<Profile>>> { }
        public class Handler : IRequestHandler<Query, Result<List<Profile>>>
        {
            private readonly IMapper _mapper;

            private readonly DataContext _context;
            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                
                _mapper = mapper;
            }

            public async Task<Result<List<Profile>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var profiles = await _context.Users
                    .ProjectTo<Profile>(_mapper.ConfigurationProvider)
                    .ToListAsync(cancellationToken);

                return Result<List<Profile>>.Success(profiles);
            }
        }
    }
}