using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Mercadados_API.Migrations
{
    /// <inheritdoc />
    public partial class DbV2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Funcionario",
                columns: table => new
                {
                    FuncionarioID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    NomeFuncionario = table.Column<string>(type: "VARCHAR(100)", nullable: false),
                    Email = table.Column<string>(type: "VARCHAR(100)", nullable: false),
                    Senha = table.Column<string>(type: "VARCHAR(100)", nullable: false),
                    Genero = table.Column<string>(type: "VARCHAR(100)", nullable: false),
                    RuaENumero = table.Column<string>(type: "VARCHAR(100)", nullable: false),
                    CidadeEstadoCEP = table.Column<string>(type: "VARCHAR(200)", maxLength: 100, nullable: false),
                    Complemento = table.Column<string>(type: "VARCHAR(100)", nullable: true),
                    Numero = table.Column<string>(type: "VARCHAR(13)", nullable: false),
                    Cpf = table.Column<string>(type: "VARCHAR(14)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Funcionario", x => x.FuncionarioID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Funcionario");
        }
    }
}
