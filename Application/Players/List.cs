using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;
using Application.Core;

namespace Application.Players
{
    public class List
    {
        public class Query : IRequest<Result<List<Player>>> {}

        public class Handler : IRequestHandler<Query, Result<List<Player>>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<List<Player>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<Player>>.Success(await _context.Players.ToListAsync());
            }
        }
    }
}