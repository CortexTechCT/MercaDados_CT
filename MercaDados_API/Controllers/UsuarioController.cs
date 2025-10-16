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
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioRepository _usuarioRepository;
        private const string JwtKey = "eventos-chave-autenticacao-Mercadados-dev";
        private const int JwtExpireMinutes = 5;

        public UsuarioController(IUsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }

        [HttpPost]
        public IActionResult Post(Usuario usuario)
        {
            try
            {
                _usuarioRepository.Cadastrar(usuario);
                return StatusCode(201, usuario);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("BuscarPorId/{id}")]
        public IActionResult Get(Guid id)
        {
            try
            {
                var usuario = _usuarioRepository.BuscarPorId(id);
                if (usuario == null)
                    return NotFound("Usuário não encontrado.");

                return Ok(usuario);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // 🚀 Upload de imagem do usuário
        [HttpPost("upload-foto/{id}")]
        public async Task<IActionResult> UploadFoto(Guid id, IFormFile arquivo)
        {
            if (arquivo == null || arquivo.Length == 0)
                return BadRequest("Nenhum arquivo enviado.");

            try
            {
                // 📁 Cria a pasta de destino, se não existir
                var pastaDestino = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "imagens");
                if (!Directory.Exists(pastaDestino))
                    Directory.CreateDirectory(pastaDestino);

                // 📸 Gera um nome único para o arquivo
                var nomeArquivo = $"{Guid.NewGuid()}{Path.GetExtension(arquivo.FileName)}";
                var caminhoCompleto = Path.Combine(pastaDestino, nomeArquivo);

                // 💾 Salva o arquivo fisicamente
                using (var stream = new FileStream(caminhoCompleto, FileMode.Create))
                {
                    await arquivo.CopyToAsync(stream);
                }

                // 🖼️ Define o caminho relativo (para o frontend)
                var caminhoRelativo = $"/imagens/{nomeArquivo}";

                // 🧩 Atualiza apenas o campo de foto no banco
                _usuarioRepository.AtualizarFoto(id, caminhoRelativo);

                return Ok(new
                {
                    message = "Upload realizado com sucesso!",
                    caminho = caminhoRelativo
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao fazer upload: {ex.Message}");
            }
        }
    
    }
}
