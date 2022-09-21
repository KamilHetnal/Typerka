using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Teams
{
    public class List
    {
        public class Query : IRequest<List<Team>> {}

        public class Handler : IRequestHandler<Query, List<Team>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Team>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Teams.ToListAsync();
            }
        }
    }
}