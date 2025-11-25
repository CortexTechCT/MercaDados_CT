using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Mercadados_API.Domains
{
    [Table("Venda")]
    public class Venda
    {
        [Key]
        public Guid VendaID { get; set; }

        [Column(TypeName = "FLOAT")]
        [Required(ErrorMessage = "Valor é obrigatorio!")]
        public float Valor { get; set; }

        [Column(TypeName = "INT")]
        [Required(ErrorMessage = "Quantidade é obrigatorio!")]
        public int Quantidade { get; set; }

        [ForeignKey("ProdutosID")]
        public Guid ProdutoID { get; set; }

        public Produtos? Produtos { get; set; }

        [ForeignKey("FeedbackID")]
        public Guid? FeedbackID { get; set; }
        public Feedback? Feedback { get; set; }
    }
}   