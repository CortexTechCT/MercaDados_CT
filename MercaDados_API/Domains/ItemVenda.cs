
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Mercadados_API.Domains
{
    [Table("ItemVenda")]
    public class ItemVenda
    {
        [Key]
        public Guid ItemVendaID { get; set; }

        [Column(TypeName = "FLOAT")]
        [Required(ErrorMessage = "Valor é obrigatorio!")]
        public float Preco { get; set; }

        [Column(TypeName = "DATE")]
        [Required(ErrorMessage = "Data é obrigatorio!")]
        public DateTime Data { get; set; }

        public Guid ProdutosID { get; set; }

        [ForeignKey("ProdutosID")]
        public Produtos? Produtos { get; set; }

        [ForeignKey("VendaID")]
        public Guid VendaID { get; set; }
        public Venda? Venda { get; set; }
     }
}