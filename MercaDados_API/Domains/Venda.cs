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

        [ForeignKey("ItemVendaID")]
        public ItemVenda? ItemVenda { get; set; }

        public Guid FeedbackID { get; set; }
        [ForeignKey("FeedbackID")]
        public Feedback? Feedback { get; set; }
    }
}