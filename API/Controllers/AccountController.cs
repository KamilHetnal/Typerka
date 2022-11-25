using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using API.DTOs;
using API.Services;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [AllowAnonymous]
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {

        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly TokenService _tokenService;

        public AccountController(UserManager<AppUser> userManager,
            SignInManager<AppUser> signInManager,
            TokenService tokenService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _tokenService = tokenService;
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            if (await _userManager.Users.AnyAsync(x => x.Email == registerDto.Email))
            {
                ModelState.AddModelError("email", "Ten email jest już zajęty");
                return ValidationProblem();
            }

            if (await _userManager.Users.AnyAsync(x => x.UserName == registerDto.UserName))
            {
                ModelState.AddModelError("username", "Ta nazwa użytkownika jest już zajęta");
                return ValidationProblem();
            }

            if (registerDto.RegisterPassword != _tokenService.RegisterPassword)
            {
                return BadRequest("Hasło rejestracyjne jest nie poprawne");
            }
            var user = new AppUser
            {
                DisplayName = registerDto.DisplayName,
                Email = registerDto.Email,
                UserName = registerDto.UserName,
                PhoneNumber = registerDto.PhoneNumber
            };

            var userRoles = await _userManager.GetRolesAsync(user);

            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if (result.Succeeded)
            {

                return CreateUserObject(user, userRoles);
            }

            return BadRequest("Problem registering User");
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);

            if (user == null) return Unauthorized();

            var userRoles = await _userManager.GetRolesAsync(user);

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if (result.Succeeded)
            {
                return CreateUserObject(user, userRoles);
            }

            return Unauthorized();
        }

        [Authorize(Policy = "ReqAdminRole")]
        [HttpPut("edit-password/{id}")]
        public async Task<ActionResult<UserDto>> ChangePassword(string id, [FromBody] NewPasswordDto password)
        {
            var user = await _userManager.FindByIdAsync(id);

            if (user == null)
            {
                return BadRequest("Nie znaleziono użytkownika");
            }
            await _userManager.RemovePasswordAsync(user);

            var userRoles = await _userManager.GetRolesAsync(user);
            var result = await _userManager.AddPasswordAsync(user, password.NewPassword);

            if (result.Succeeded)
            {
                return CreateUserObject(user, userRoles);
            }

            return BadRequest("Nie udalo się zmienic hasla");
        }

        [Authorize]
        [HttpGet]
        public async Task<ActionResult<UserDto>> GetCurrentUser()
        {
            var user = await _userManager.Users
                //.Include(p => p.Photos)
                .FirstOrDefaultAsync(x => x.Email == User.FindFirstValue(ClaimTypes.Email));

            var userRoles = await _userManager.GetRolesAsync(user);

            return CreateUserObject(user, userRoles);
        }

        private UserDto CreateUserObject(AppUser user, IList<string> userRoles)
        {
            return new UserDto
            {
                DisplayName = user.DisplayName,
                //Image = user?.Photos?.FirstOrDefault(x => x.IsMain)?.Url,
                Token = _tokenService.CreateToken(user, userRoles),
                Username = user.UserName
            };
        }
    }
}