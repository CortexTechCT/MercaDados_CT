using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Mercadados_API.Domains;
using Mercadados_API.DTO;
using Mercadados_API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace Mercadados_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class LoginController : ControllerBase
    {
        private readonly IUsuarioRepository _usuarioRepository;

        private const string JwtKey = "eventos-chave-autenticacao-Mercadados-dev";
        private const int JwtExpireMinutes = 5;

        public LoginController(IUsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }

        [HttpPost]
        public IActionResult Login([FromBody] LoginDTO loginDto)
        {
            try
            {
                if (loginDto == null || string.IsNullOrEmpty(loginDto.Email) || string.IsNullOrEmpty(loginDto.Senha))
                {
                    return BadRequest("Email e senha são obrigatórios.");
                }

                // Busca o usuário pelo repositório  
                Usuario usuarioBuscado = _usuarioRepository.BuscaPorEmailSenha(loginDto.Email, loginDto.Senha);

                if (usuarioBuscado == null)
                {
                    return NotFound("Email ou senha inválidos!");
                }

                // Define os claims do token  
                var claims = new[]
                {
                  new Claim(JwtRegisteredClaimNames.Jti, usuarioBuscado.UsuarioID.ToString()),
                  new Claim(JwtRegisteredClaimNames.Email, usuarioBuscado.Email!),
                  new Claim("TituloTipoUsuario", usuarioBuscado.TipoUsuario?.TituloTipoUsuario ?? "Desconhecido")
              };

                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(JwtKey));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    issuer: "Mercadados_API",
                    audience: "Mercadados_API",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(JwtExpireMinutes),
                    signingCredentials: creds
                );

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao processar o login: {ex.Message}");
            }
        }
    }
}