using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Application.Championships;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [Authorize]
    public class ChampionshipsController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetChampionships()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetChampionship(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }

        [Authorize(Policy = "ReqAdminRole")]
        [HttpPut("{id}")]
        public async Task<IActionResult> EditChampionship(Guid id, Championship championship)
        {
            championship.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Championship = championship }));
        }

    }
}