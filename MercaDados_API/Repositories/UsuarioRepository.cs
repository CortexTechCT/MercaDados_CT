using Mercadados_API.Contexts;
using Mercadados_API.Domains;
using Mercadados_API.Interfaces;
<<<<<<< HEAD
using Microsoft.EntityFrameworkCore;
using static System.Runtime.InteropServices.JavaScript.JSType;
=======
>>>>>>> 5c80c6e61db46478ba58ceeca58aaba4d5471094

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
<<<<<<< HEAD
                Usuario usuarioBuscado = _context.Usuario
                    .Include(u => u.TipoUsuario)
                    .FirstOrDefault(u =>
                        u.Email == email &&
                        u.Senha == senha)!;

                return usuarioBuscado;
=======
                usuario.UsuarioID = Guid.NewGuid();
                _context.Usuario.Add(usuario);
                _context.SaveChanges();
>>>>>>> 5c80c6e61db46478ba58ceeca58aaba4d5471094
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

    }
}
