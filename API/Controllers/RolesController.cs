using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Application.Roles;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [Authorize(Policy = "ReqAdminRole")]
    public class RolesController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetRoles()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }
        [HttpGet("userroles")]
        public async Task<IActionResult> GetUserRoles()
        {
            return HandleResult(await Mediator.Send(new UserRolesList.Query()));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetRole(string id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }
        [HttpPost]
        public async Task<IActionResult> CreateRole(IdentityRole role)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Role = role }));
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> EditRole(IdentityRole role, string Id)
        {
            role.Id = Id;
            return HandleResult(await Mediator.Send(new Edit.Command { Role = role }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRole(string id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }
        [HttpPost("{roleName}/{userName}/addtorole")]
        public async Task<IActionResult> AddToRole(string roleName, string userName)
        {
            return HandleResult(await Mediator.Send(new AddUserToRole.Command { RoleName = roleName, UserName = userName }));
        }
        [HttpPost("{roleName}/{userName}/removefromrole")]
        public async Task<IActionResult> RemoveFromRole(string roleName, string userName)
        {
            return HandleResult(await Mediator.Send(new RemoveFromRole.Command { RoleName = roleName, UserName = userName }));
        }
    }
}