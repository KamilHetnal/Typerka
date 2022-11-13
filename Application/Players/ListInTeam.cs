using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Players
{
    public class ListInTeam
    {
        public class Query : IRequest<Result<List<Player>>> 
        {
            public Guid TeamId { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<List<Player>>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<List<Player>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<Player>>.Success(await _context.Players.Where(x=>x.TeamId == request.TeamId).ToListAsync());
            }
        }
    }
}