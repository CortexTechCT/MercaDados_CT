import { MenuLateral } from "../../components/menulateral/MenuLateral";
import "./fornecedores.css";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import chocolandiaLogo from "../../assets/chocolandia.png";
import nescauLogo from "../../assets/nescau.png";
import duracellLogo from "../../assets/duracell.png";
import { MenuNormal } from "../../components/menunormal/menunormal";
import api from "../../services/Services.js";

export const Fornecedores = () => {
  const fornecedores = [
    { nome: "Chocolândia", logo: chocolandiaLogo },
    { nome: "Nescau", logo: nescauLogo },
    { nome: "Duracell", logo: duracellLogo },
  ];

  const [mapasPorFornecedor, setMapasPorFornecedor] = useState({});

  const baseOpcoesGrafico = {
    chart: { type: "bar", height: 250 },
    plotOptions: { bar: { borderRadius: 8, columnWidth: "60%" } },
    dataLabels: {
      enabled: true,
      formatter: (val) => val,
      offsetY: -10,
      style: { fontSize: "12px", colors: ["#333"] },
    },
    yaxis: { title: { text: "Quantidade Vendida" } },
    tooltip: { y: { formatter: (val) => `${val} unidades` } },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: { height: 200 },
          plotOptions: { bar: { columnWidth: "80%" } },
          dataLabels: { style: { fontSize: "10px" } },
        },
      },
    ],
  };

  const criarMapaPorFornecedor = async (fornecedorNome) => {
    try {
      const [resVendas, resProdutos, resItemVendas, resFeedbacks] =
        await Promise.all([
          api.get("Venda/Listar"),
          api.get("Produtos"),
          api.get("ItemVenda"),
          api.get("Feedback"),
        ]);

      const vendas = resVendas.data || [];
      const produtos = resProdutos.data || [];
      const itemVendas = resItemVendas.data || [];
      const feedbacks = resFeedbacks.data || [];

      // 🔹 Map feedbackID → dataFeedback
      const mapaFeedbackData = {};
      feedbacks.forEach((fb) => {
        const fid = fb.feedbackID || fb.FeedbackID;
        const data = fb.dataFeedback || fb.DataFeedback;
        if (fid && data) mapaFeedbackData[fid] = data;
      });

      // 🔹 Filtra produtos do fornecedor
      const produtosDoFornecedor = produtos.filter(
        (p) =>
          (p.Fornecedor || p.fornecedor).toLowerCase() ===
          fornecedorNome.toLowerCase()
      );

      if (produtosDoFornecedor.length === 0) return {};

      // 🔹 Map produtoID → nomeProduto
      const mapaProdutoNome = {};
      produtosDoFornecedor.forEach((p) => {
        mapaProdutoNome[p.produtoID || p.ProdutoID] = p.nome || p.Nome;
      });

      // 🔹 Map vendaID → Venda
      const mapaVenda = {};
      vendas.forEach((v) => {
        mapaVenda[v.vendaID || v.VendaID] = v;
      });

      // 🔹 Contabiliza vendas por produto e mês
      const mapaVendasPorProduto = {};

      itemVendas.forEach((iv) => {
        const produtoID = iv.produtosID || iv.ProdutosID;
        const vendaID = iv.vendaID || iv.VendaID;

        const nomeProduto = mapaProdutoNome[produtoID];
        if (!nomeProduto) return; // Produto de outro fornecedor

        const venda = mapaVenda[vendaID];
        if (!venda) return;

        const feedbackID = venda.feedbackID || venda.FeedbackID;
        const data = mapaFeedbackData[feedbackID];
        if (!data) return;

        const d = new Date(data);
        const chaveMes = `${String(d.getMonth() + 1).padStart(2, "0")}/${
          d.getFullYear()
        }`;

        if (!mapaVendasPorProduto[nomeProduto])
          mapaVendasPorProduto[nomeProduto] = {};

        mapaVendasPorProduto[nomeProduto][chaveMes] =
          (mapaVendasPorProduto[nomeProduto][chaveMes] || 0) +
          (venda.quantidade || venda.Quantidade || 0);
      });

      return mapaVendasPorProduto;
    } catch (err) {
      console.error("❌ Erro ao buscar dados:", err);
      return {};
    }
  };

  useEffect(() => {
    const carregarTodos = async () => {
      const novoMapas = {};
      for (const f of fornecedores) {
        const vendasPorProduto = await criarMapaPorFornecedor(f.nome);
        novoMapas[f.nome] = vendasPorProduto;
      }
      setMapasPorFornecedor(novoMapas);
    };
    carregarTodos();
  }, []);

  const gerarGraficoFornecedor = (titulo, logo, vendasPorProduto) => {
    if (!vendasPorProduto || Object.keys(vendasPorProduto).length === 0) {
      return (
        <div className="fornecedor-card" key={titulo}>
          <img src={logo} alt={titulo} className="logo-fornecedor" />
          <p>Nenhum produto ou venda para este fornecedor</p>
        </div>
      );
    }

    const todosMeses = Array.from(
      new Set(
        Object.values(vendasPorProduto).flatMap((vendasMes) =>
          Object.keys(vendasMes)
        )
      )
    ).sort((a, b) => {
      const [mesA, anoA] = a.split("/").map(Number);
      const [mesB, anoB] = b.split("/").map(Number);
      return anoA === anoB ? mesA - mesB : anoA - anoB;
    });

    const series = Object.entries(vendasPorProduto).map(
      ([produto, vendasMes]) => {
        const data = todosMeses.map((mes) => vendasMes[mes] || 0);
        return { name: produto, data };
      }
    );

    return (
      <div className="fornecedor-card" key={titulo}>
        <img src={logo} alt={titulo} className="logo-fornecedor" />
        <div className="grafico-placeholder">
          <ReactApexChart
            options={{
              ...baseOpcoesGrafico,
              title: {
                text: `Vendas Mensais - ${titulo}`,
                align: "center",
                style: { fontSize: "16px" },
              },
              xaxis: { categories: todosMeses, title: { text: "Mês/Ano" } },
            }}
            series={series}
            type="bar"
            height={250}
          />
        </div>
      </div>
    );
  };

  const carregando = Object.keys(mapasPorFornecedor).length === 0;

  return (
    <div className="container-geral">
      <MenuLateral />
      <div className="conteudo-principal">
        <MenuNormal />

        <main className="fornecedores-box">
          <h2 className="titulo-fornecedores">Fornecedores</h2>

          <div className="fornecedores-lista">
            {carregando ? (
              <p>Carregando dados dos fornecedores...</p>
            ) : (
              fornecedores.map((f) =>
                gerarGraficoFornecedor(
                  f.nome,
                  f.logo,
                  mapasPorFornecedor[f.nome] || {}
                )
              )
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
