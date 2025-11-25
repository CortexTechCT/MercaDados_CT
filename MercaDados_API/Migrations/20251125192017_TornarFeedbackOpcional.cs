using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Mercadados_API.Migrations
{
    /// <inheritdoc />
    public partial class TornarFeedbackOpcional : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Venda_Feedback_FeedbackID",
                table: "Venda");

            migrationBuilder.AlterColumn<Guid>(
                name: "FeedbackID",
                table: "Venda",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.AddForeignKey(
                name: "FK_Venda_Feedback_FeedbackID",
                table: "Venda",
                column: "FeedbackID",
                principalTable: "Feedback",
                principalColumn: "FeedbackID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Venda_Feedback_FeedbackID",
                table: "Venda");

            migrationBuilder.AlterColumn<Guid>(
                name: "FeedbackID",
                table: "Venda",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Venda_Feedback_FeedbackID",
                table: "Venda",
                column: "FeedbackID",
                principalTable: "Feedback",
                principalColumn: "FeedbackID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
