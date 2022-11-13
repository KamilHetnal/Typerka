using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.Championships
{
    public class Details
    {
        public class Query : IRequest<Result<Championship>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<Championship>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Championship>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<Championship>.Success(await _context.Championships
                    .FindAsync(request.Id));
            }
        }
    }
}