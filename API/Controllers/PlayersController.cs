using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Players;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [Authorize]
    public class PlayersController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Player>>> GetPlayers()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }
        [HttpGet("team/{teamId}")]
        public async Task<ActionResult<List<Player>>> GetPlayersInTeam(Guid teamId)
        {
            return HandleResult(await Mediator.Send(new ListInTeam.Query{ TeamId = teamId }));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Player>> GetPlayer(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }
        [Authorize(Policy = "ReqAdminRole")]
        [HttpPut("{id}")]
        public async Task<IActionResult> EditPlayer(Guid id, Player player)
        {
            player.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Player = player }));
        }
    }
}