using Mercadados_API.Domains;


namespace Mercadados_API.Interfaces
{
    public interface IItemVendaRepository
    {
        void Cadastrar(ItemVenda item);
        ItemVenda BuscarPorId(Guid id);
        List<ItemVenda> Listar();
        void Atualizar(Guid id, ItemVenda item);
        void Deletar(Guid id);
    }
}
