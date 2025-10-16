using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Mercadados_API.Domains
{
    [Table("Produtos")]
    public class Produtos
    {
        [Key]
        public Guid ProdutoID { get; set; }

        [Column(TypeName = "Varchar(200)")]
        [Required(ErrorMessage = "Nome é obrigatorio!")]
        public string? Nome { get; set; }

        [Column(TypeName = "FLoat")]
        [Required(ErrorMessage = "Preço é obrigatorio!")]
        public float Preco { get; set; }

        [Column(TypeName = "INT")]
        [Required(ErrorMessage = "Quantidade é obrigatorio!")]
        public int Quantidade { get; set; }

    }
}
