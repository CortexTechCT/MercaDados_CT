using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Mercadados_API.Migrations
{
    /// <inheritdoc />
    public partial class MercaCT : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<double>(
                name: "Preco",
                table: "Produtos",
                type: "Float",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "FLoat");

            migrationBuilder.AddColumn<string>(
                name: "Imagem",
                table: "Produtos",
                type: "Varchar(255)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Imagem",
                table: "Produtos");

            migrationBuilder.AlterColumn<double>(
                name: "Preco",
                table: "Produtos",
                type: "FLoat",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "Float");
        }
    }
}
