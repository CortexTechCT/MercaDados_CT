using Mercadados_API.Domains;
using Mercadados_API.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Mercadados_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class ProdutosController : ControllerBase
    {
        private readonly IProdutosRepository _produtosRepository;
        public ProdutosController(IProdutosRepository produtosRepository)
        {
            _produtosRepository = produtosRepository;
        }

        [HttpPost]
        public IActionResult Post(Produtos produtos)
        {
            try
            {
                _produtosRepository.Cadastrar(produtos);
                return StatusCode(201, produtos);
            }
            catch (Exception error)
            {
                return BadRequest(error.Message);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                _produtosRepository.Deletar(id);
                return NoContent();
            }
            catch (Exception error)
            {
                return BadRequest(error.Message);
            }
        }

        [HttpPut("{id}")]
        public IActionResult Put(Guid id, Produtos produtos)
        {
            try
            {
                _produtosRepository.Atualizar(id, produtos);
                return StatusCode(204, produtos);

            }
            catch (Exception error)
            {
                return BadRequest(error.Message);
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            try
            {
                return Ok(_produtosRepository.BuscarPorId(id));
            }
            catch (Exception error)
            {
                return BadRequest(error.Message);
            }
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_produtosRepository.Listar());
            }
            catch (Exception error)
            {
                return BadRequest(error.Message);
            }
        }
    }
}
