using Mercadados_API.Domains;
using Mercadados_API.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Mercadados_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class ItemVendaController : ControllerBase
    {
        private readonly IItemVendaRepository _itemVendaRepository;
        public ItemVendaController(IItemVendaRepository itemVendaRepository)
        {
            _itemVendaRepository = itemVendaRepository;
        }
    [HttpPost]
    public IActionResult Post(ItemVenda itemVenda)
        {
            try
            {
                _itemVendaRepository.Cadastrar(itemVenda);
                return StatusCode(201, itemVenda);
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
                _itemVendaRepository.Deletar(id);
                return NoContent();
            }
            catch (Exception error)
            {
                return BadRequest(error.Message);
            }
        }

        [HttpPut("{id}")]
        public IActionResult Put(Guid id, ItemVenda itemVenda)
        {
            try
            {
                _itemVendaRepository.Atualizar(id, itemVenda);
                return StatusCode(201, itemVenda);
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
                return Ok(_itemVendaRepository.BuscarPorId(id));
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
                return Ok(_itemVendaRepository.Listar());
            }
            catch (Exception error)
            {
                return BadRequest(error.Message);
            }
        }
    
    
    
    }  
}
