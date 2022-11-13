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
    [Authorize]
    public class MatchesController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetMatches()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }
        [HttpGet("team/{teamId}")]
        public async Task<IActionResult> GetMatchesForTeam(Guid teamId)
        {
            return HandleResult(await Mediator.Send(new ListForTeam.Query { TeamId = teamId }));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetMatch(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }
        [Authorize(Policy = "ReqAdminRole")]
        [HttpPost]
        public async Task<IActionResult> CreateMatch(Match match)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Match = match }));
        }
        [Authorize(Policy = "ReqAdminRole")]
        [HttpPut("{id}")]
        public async Task<IActionResult> EditMatch(Guid id, Match match)
        {
            match.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Match = match }));
        }
        [Authorize(Policy = "ReqAdminRole")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMatch(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}