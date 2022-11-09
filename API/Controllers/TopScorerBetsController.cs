using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Application.TopScorerBets;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [Authorize]
    [Route("api/top-scorer-bets")]
    public class TopScorerBetsController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetBets()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetBet(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }
        [HttpPost]
        public async Task<IActionResult> CreateBet([FromBody]TopScorerBet bet)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Bet = bet }));
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> EditBet(Guid id,[FromBody]TopScorerBet bet)
        {
            bet.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Bet = bet }));
        }
        [Authorize(Policy = "ReqAdminRole")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBet(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}