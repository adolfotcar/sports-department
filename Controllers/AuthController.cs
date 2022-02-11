using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using SportsDepartment.Data;
using SportsDepartment.Models;

namespace SportsDepartment.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AuthController(AppDbContext context)
        {
            _context = context;
        }

        
        [HttpPost, Route("login")]
        public async Task<ActionResult<AppUser>> PostAppUser(AppUser reqUser)
        {
            if (reqUser == null)
                return BadRequest();

            //hashing the provided password before saving into the DB
            var hashedPass = PasswordHandler.Hash(reqUser.Password);
            //looks for the user on the DB by the provided e-mail
            var user = await _context.AppUser.Where(u => u.Email == reqUser.Email).FirstOrDefaultAsync();
            //compares the password from the database with the hashed provided password
            if (user == null || !PasswordHandler.Verify(reqUser.Password, user.Password))
                return Unauthorized();
            //saving the userid on the token
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.ID.ToString())
            };

            //token key, also set on the Startup.cs
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("5L#v@z-Xg&Mvu25L"));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
            var tokeOptions = new JwtSecurityToken(
                issuer: "http://localhost:5000",
                audience: "http://localhost:5000",
                claims: claims,
                expires: DateTime.Now.AddMinutes(60),
                signingCredentials: signinCredentials
            );
            //converrts the token to a string which will be returned to te front end
            var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
            return Ok(new { Token = tokenString, UserName = user.Name });
        }

        

        private bool AppUserExists(int id)
        {
            return _context.AppUser.Any(e => e.ID == id);
        }
    }
}
