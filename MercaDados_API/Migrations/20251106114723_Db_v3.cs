using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Mercadados_API.Migrations
{
    /// <inheritdoc />
    public partial class Db_v3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Fornecedor",
                table: "Produtos",
                type: "VARCHAR(250)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Fornecedor",
                table: "Produtos");
        }
    }
}
