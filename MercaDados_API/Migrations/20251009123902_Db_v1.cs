using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Mercadados_API.Migrations
{
    /// <inheritdoc />
    public partial class Db_v1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Estoque",
                columns: table => new
                {
                    EstoqueID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Setor = table.Column<string>(type: "Varchar(200)", nullable: false),
                    Quantidade = table.Column<int>(type: "INT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Estoque", x => x.EstoqueID);
                });

            migrationBuilder.CreateTable(
                name: "Imagens",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Caminho = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Imagens", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TipoUsuario",
                columns: table => new
                {
                    TipoUsuarioID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TituloTipoUsuario = table.Column<string>(type: "VARCHAR(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TipoUsuario", x => x.TipoUsuarioID);
                });

            migrationBuilder.CreateTable(
                name: "EstoqueProdutos",
                columns: table => new
                {
                    EstoqueProdutosID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    QuantidadeEstoque = table.Column<int>(type: "Int", nullable: false),
                    DataAtualizacao = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ProdutosID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    EstoqueID = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EstoqueProdutos", x => x.EstoqueProdutosID);
                    table.ForeignKey(
                        name: "FK_EstoqueProdutos_Estoque_EstoqueID",
                        column: x => x.EstoqueID,
                        principalTable: "Estoque",
                        principalColumn: "EstoqueID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Usuario",
                columns: table => new
                {
                    UsuarioID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    NomeUsuario = table.Column<string>(type: "VARCHAR(100)", nullable: false),
                    Email = table.Column<string>(type: "VARCHAR(100)", nullable: false),
                    Senha = table.Column<string>(type: "VARCHAR(100)", nullable: false),
                    TipoUsuarioID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Numero = table.Column<string>(type: "VARCHAR(13)", nullable: false),
                    Cpf = table.Column<string>(type: "VARCHAR(14)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuario", x => x.UsuarioID);
                    table.ForeignKey(
                        name: "FK_Usuario_TipoUsuario_TipoUsuarioID",
                        column: x => x.TipoUsuarioID,
                        principalTable: "TipoUsuario",
                        principalColumn: "TipoUsuarioID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Produtos",
                columns: table => new
                {
                    ProdutoID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Nome = table.Column<string>(type: "Varchar(200)", nullable: false),
                    Preco = table.Column<double>(type: "FLoat", nullable: false),
                    Quantidade = table.Column<int>(type: "INT", nullable: false),
                    EstoqueProdutosID = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Produtos", x => x.ProdutoID);
                    table.ForeignKey(
                        name: "FK_Produtos_EstoqueProdutos_EstoqueProdutosID",
                        column: x => x.EstoqueProdutosID,
                        principalTable: "EstoqueProdutos",
                        principalColumn: "EstoqueProdutosID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Feedback",
                columns: table => new
                {
                    FeedbackID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Nota = table.Column<string>(type: "Varchar(200)", nullable: false),
                    UsuarioID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    DataFeedback = table.Column<DateTime>(type: "DATETIME", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Feedback", x => x.FeedbackID);
                    table.ForeignKey(
                        name: "FK_Feedback_Usuario_UsuarioID",
                        column: x => x.UsuarioID,
                        principalTable: "Usuario",
                        principalColumn: "UsuarioID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Venda",
                columns: table => new
                {
                    VendaID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Valor = table.Column<double>(type: "FLOAT", nullable: false),
                    Quantidade = table.Column<int>(type: "INT", nullable: false),
                    ProdutosID = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    FeedbackID = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Venda", x => x.VendaID);
                    table.ForeignKey(
                        name: "FK_Venda_Feedback_FeedbackID",
                        column: x => x.FeedbackID,
                        principalTable: "Feedback",
                        principalColumn: "FeedbackID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Venda_Produtos_ProdutosID",
                        column: x => x.ProdutosID,
                        principalTable: "Produtos",
                        principalColumn: "ProdutoID");
                });

            migrationBuilder.CreateTable(
                name: "ItemVenda",
                columns: table => new
                {
                    ItemVendaID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Preco = table.Column<double>(type: "FLOAT", nullable: false),
                    Data = table.Column<DateTime>(type: "DATE", nullable: false),
                    ProdutosID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    VendaID = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ItemVenda", x => x.ItemVendaID);
                    table.ForeignKey(
                        name: "FK_ItemVenda_Produtos_ProdutosID",
                        column: x => x.ProdutosID,
                        principalTable: "Produtos",
                        principalColumn: "ProdutoID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ItemVenda_Venda_VendaID",
                        column: x => x.VendaID,
                        principalTable: "Venda",
                        principalColumn: "VendaID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_EstoqueProdutos_EstoqueID",
                table: "EstoqueProdutos",
                column: "EstoqueID");

            migrationBuilder.CreateIndex(
                name: "IX_Feedback_UsuarioID",
                table: "Feedback",
                column: "UsuarioID");

            migrationBuilder.CreateIndex(
                name: "IX_ItemVenda_ProdutosID",
                table: "ItemVenda",
                column: "ProdutosID");

            migrationBuilder.CreateIndex(
                name: "IX_ItemVenda_VendaID",
                table: "ItemVenda",
                column: "VendaID");

            migrationBuilder.CreateIndex(
                name: "IX_Produtos_EstoqueProdutosID",
                table: "Produtos",
                column: "EstoqueProdutosID",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Usuario_TipoUsuarioID",
                table: "Usuario",
                column: "TipoUsuarioID");

            migrationBuilder.CreateIndex(
                name: "IX_Venda_FeedbackID",
                table: "Venda",
                column: "FeedbackID");

            migrationBuilder.CreateIndex(
                name: "IX_Venda_ProdutosID",
                table: "Venda",
                column: "ProdutosID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Imagens");

            migrationBuilder.DropTable(
                name: "ItemVenda");

            migrationBuilder.DropTable(
                name: "Venda");

            migrationBuilder.DropTable(
                name: "Feedback");

            migrationBuilder.DropTable(
                name: "Produtos");

            migrationBuilder.DropTable(
                name: "Usuario");

            migrationBuilder.DropTable(
                name: "EstoqueProdutos");

            migrationBuilder.DropTable(
                name: "TipoUsuario");

            migrationBuilder.DropTable(
                name: "Estoque");
        }
    }
}
