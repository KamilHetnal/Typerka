using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Application.Profiles;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [Authorize]
    public class ProfilesController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetProfiles()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }
        [HttpGet("{username}")]
        public async Task<IActionResult> GetProfile(string username)
        {
            return HandleResult(await Mediator.Send(new Details.Querry { UserName = username }));
        }
        [Authorize(Policy = "ReqAdminRole")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProfile(string id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}