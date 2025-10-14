using Mercadados_API.Domains;
using Mercadados_API.Contexts;
using Mercadados_API.Interfaces;

namespace Mercadados_API.Repositories
{
    public class ItemVendaRepository : IItemVendaRepository
    {

        private readonly Context _context;

        public ItemVendaRepository(Context context)
        {
            _context = context;
        }

        public void Atualizar(Guid id, ItemVenda item)
        {
            try
            {
                ItemVenda itemVendaBuscado = _context.ItemVenda.Find(id)!;

                if(itemVendaBuscado != null)
                {
                    itemVendaBuscado.Preco = itemVendaBuscado.Preco;
                    itemVendaBuscado.Data = itemVendaBuscado.Data;
                }

                _context.ItemVenda.Update(itemVendaBuscado!);
                _context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public ItemVenda BuscarPorId(Guid id)
        {
            try
            {
                return _context.ItemVenda.Find(id)!;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void Cadastrar(ItemVenda item)
        {
            try
            {
                item.ItemVendaID = Guid.NewGuid();

                _context.ItemVenda.Add(item);
                _context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Deletar(Guid id)
        {
            try
            {
                ItemVenda itemVendaBuscado = _context.ItemVenda.Find(id)!;

                if(itemVendaBuscado != null)
                {
                    _context.ItemVenda.Remove(itemVendaBuscado);
                }

                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public List<ItemVenda> Listar()
        {
            try
            {
                return _context.ItemVenda.ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
