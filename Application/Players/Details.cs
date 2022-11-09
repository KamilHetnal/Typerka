using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.Teams
{
    public class Details
    {
        public class Query : IRequest<Result<Team>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<Team>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Team>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<Team>.Success(await _context.Teams
                    .FindAsync(request.Id));
            }
        }
    }
}