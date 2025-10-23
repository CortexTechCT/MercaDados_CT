using Mercadados_API.Contexts;
using Mercadados_API.Domains;
using Mercadados_API.Interfaces;
using Microsoft.EntityFrameworkCore;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Mercadados_API.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly Context _context;
        public UsuarioRepository(Context context)
        {
            _context = context;
        }
        public Usuario BuscaPorEmailSenha(string email, string senha)
        {
            try
            {
                Usuario usuarioBuscado = _context.Usuario
                    .Include(u => u.TipoUsuario)
                    .FirstOrDefault(u =>
                        u.Email == email &&
                        u.Senha == senha)!;

                return usuarioBuscado;
            }
            catch (Exception ex)
            {
                throw new Exception("Erro ao buscar usuário: " + ex.Message);
            }
        }

        public Usuario BuscarPorId(Guid id)
        {
            try
            {
                Usuario usuarioBuscado = _context.Usuario.FirstOrDefault(u => u.UsuarioID == id)!;
                return usuarioBuscado;

            }
            catch (Exception ex)
            {
                throw new Exception("Erro ao buscar usuário por ID: " + ex.Message);
            }
        }

        public void Cadastrar(Usuario usuario)
        {
            try
            {
                _context.Usuario.Add(usuario);
                _context.SaveChanges();

            }
            catch (Exception ex)
            {
                throw new Exception("Erro ao cadastrar usuário: " + ex.Message);
            }
        }
    }
}
