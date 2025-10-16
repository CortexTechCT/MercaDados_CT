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
            migrationBuilder.AlterColumn<string>(
                name: "RuaENumero",
                table: "Funcionario",
                type: "VARCHAR(200)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "VARCHAR(100)");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "RuaENumero",
                table: "Funcionario",
                type: "VARCHAR(100)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "VARCHAR(200)");
        }
    }
}
