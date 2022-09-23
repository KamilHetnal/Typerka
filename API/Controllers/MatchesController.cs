using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Application.Matches;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    public class MatchesController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Match>>> GetMatches()
        {
            return await Mediator.Send(new List.Query());
        }
    }
}