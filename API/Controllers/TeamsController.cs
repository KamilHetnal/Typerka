using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Teams;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [Authorize]
    public class TeamsController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Team>>> GetTeams()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Team>> GetTeam(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }
        [Authorize(Policy = "ReqAdminRole")]
        [HttpPut("{id}")]
        public async Task<IActionResult> EditTeam(Guid id, Team team)
        {
            team.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Team = team }));
        }
    }
}