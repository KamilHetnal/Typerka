using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Application.Matches;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [AllowAnonymous]
    public class MatchesController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetMatches()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetMatch(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateMatch(Match match)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Match = match }));
        }
        [HttpPut]
        public async Task<IActionResult> EditMatch(Guid id, Match match)
        {
            match.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Match = match }));
        }
        [HttpDelete]
        public async Task<IActionResult> DeleteMatch(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}