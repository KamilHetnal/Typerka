using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.Players
{
    public class Details
    {
        public class Query : IRequest<Result<Player>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<Player>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Player>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<Player>.Success(await _context.Players
                    .FindAsync(request.Id));
            }
        }
    }
}