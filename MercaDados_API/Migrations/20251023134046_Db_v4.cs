using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Mercadados_API.Migrations
{
    /// <inheritdoc />
    public partial class Db_v4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Feedback_Usuario_UsuarioID",
                table: "Feedback");

            migrationBuilder.RenameColumn(
                name: "UsuarioID",
                table: "Feedback",
                newName: "FuncionarioID");

            migrationBuilder.RenameIndex(
                name: "IX_Feedback_UsuarioID",
                table: "Feedback",
                newName: "IX_Feedback_FuncionarioID");

            migrationBuilder.AddForeignKey(
                name: "FK_Feedback_Funcionario_FuncionarioID",
                table: "Feedback",
                column: "FuncionarioID",
                principalTable: "Funcionario",
                principalColumn: "FuncionarioID",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Feedback_Funcionario_FuncionarioID",
                table: "Feedback");

            migrationBuilder.RenameColumn(
                name: "FuncionarioID",
                table: "Feedback",
                newName: "UsuarioID");

            migrationBuilder.RenameIndex(
                name: "IX_Feedback_FuncionarioID",
                table: "Feedback",
                newName: "IX_Feedback_UsuarioID");

            migrationBuilder.AddForeignKey(
                name: "FK_Feedback_Usuario_UsuarioID",
                table: "Feedback",
                column: "UsuarioID",
                principalTable: "Usuario",
                principalColumn: "UsuarioID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
