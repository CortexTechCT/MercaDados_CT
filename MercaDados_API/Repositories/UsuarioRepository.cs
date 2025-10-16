using Mercadados_API.Contexts;
using Mercadados_API.Domains;
using Mercadados_API.Interfaces;

namespace Mercadados_API.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly Context _context;

        public UsuarioRepository(Context context)
        {
            _context = context;
        }

        public void Cadastrar(Usuario usuario)
        {
            try
            {
                usuario.UsuarioID = Guid.NewGuid();
                _context.Usuario.Add(usuario);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public Usuario BuscarPorId(Guid id)
        {
            try
            {
                return _context.Usuario.Find(id)!;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public Usuario BuscaPorEmailSenha(string email, string senha)
        {
            try
            {
                return _context.Usuario.FirstOrDefault(u => u.Email == email && u.Senha == senha)!;
            }
            catch (Exception)
            {
                throw;
            }
        }

        // ✅ Novo método para atualizar a foto do usuário
        public void AtualizarFoto(Guid id, string caminhoFoto)
        {
            try
            {
                var usuarioBuscado = _context.Usuario.Find(id);
                if (usuarioBuscado == null)
                    throw new Exception("Usuário não encontrado.");

                usuarioBuscado.FotoPerfil = caminhoFoto;

                _context.Usuario.Update(usuarioBuscado);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
