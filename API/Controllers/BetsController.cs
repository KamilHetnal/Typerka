using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Application.Bets;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [AllowAnonymous]
    public class BetsController : BaseApiController
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
        public async Task<IActionResult> CreateBet(Bet bet)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Bet = bet }));
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> EditBet(Guid id, Bet bet)
        {
            bet.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Bet = bet }));
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBet(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}