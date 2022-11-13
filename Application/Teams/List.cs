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

namespace Application.Teams
{
    public class List
    {
        public class Query : IRequest<Result<List<Team>>> {}

        public class Handler : IRequestHandler<Query, Result<List<Team>>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<List<Team>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<Team>>.Success(await _context.Teams.ToListAsync());
            }
        }
    }
}