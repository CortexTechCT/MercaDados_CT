using Mercadados_API.Domains;

namespace Mercadados_API.Interfaces
{
    public interface IUsuarioRepository
    {
        void Cadastrar(Usuario usuario);
        Usuario BuscarPorId(Guid id);
        Usuario BuscaPorEmailSenha(string email, string senha);
        void AtualizarFoto(Guid id, string caminhoFoto);
    }
}
