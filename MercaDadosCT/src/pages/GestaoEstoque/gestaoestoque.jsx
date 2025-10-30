import "./gestaoestoque.css";
import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { MenuLateral } from "../../components/menulateral/MenuLateral";
import { MenuNormal } from "../../components/menunormal/menunormal.jsx";
import friosIcon from "../../assets/Frios.png";
import bebidasIcon from "../../assets/bebidas.png";
import hortifruitIcon from "../../assets/Hortifruit.png";
import merceariaIcon from "../../assets/Mercearia.png";
import padariaIcon from "../../assets/Padaria.png";
import prolimIcon from "../../assets/limpeza.png";
import api from "../../services/Services.js";

export const GestaoEstoque = () => {
  // 🔧 Correção de digitação: "cosnt" → "const"
  const [listaProduto, setListaProduto] = useState([]);
  const [listaCategoria, setListaCategoria] = useState([]);
   const [listaVenda, setListaVenda] = useState([]);

  const [state, setState] = useState({
    series: [
      {
        name: "Movimentação de Estoque",
        data: [], // será preenchido pela API
      },
    ],
    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: "zoom",
        },
      },
      dataLabels: { enabled: false },
      markers: { size: 0 },
      title: { text: "Movimentação de Estoque", align: "left" },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        labels: {
          formatter: (val) => val.toFixed(0),
        },
        title: { text: "Quantidade Vendida" },
      },
      xaxis: {
        type: "datetime",
      },
      tooltip: {
        shared: false,
        y: {
          formatter: (val) => val.toFixed(2),
        },
      },
    },
  });

  // 🔹 Função para buscar vendas da API
  const listarVenda = async () => {
    try {
      const res = await api.get("Venda/Listar");
      setListaVenda(res.data);
      console.log("✅ Vendas:", res.data);

      // supondo que cada venda tem campos `dataVenda` e `valorTotal` ou `quantidade`
      const dadosConvertidos = res.data.map((venda) => [
        new Date(venda.dataVenda).getTime(),
        venda.quantidade || venda.valorTotal || 0,
      ]);

      // atualiza o gráfico
      setState((prev) => ({
        ...prev,
        series: [{ ...prev.series[0], data: dadosConvertidos }],
      }));
    } catch (err) {
      console.error("❌ Erro ao buscar vendas:", err);
    }
  };

  // ✅ Função que consome a API
  const listarProdutos = async () => {
    try {
      const res = await api.get("Produtos");
      setListaProduto(res.data);
      console.log("✅ Produtos:", res.data);
    } catch (err) {
      console.error("❌ Erro ao buscar Produtos:", err);
    }
  };
  const listarCategoria = async () => {
    try {
      const res = await api.get("EstoqueProdutos");
      setListaCategoria(res.data);

      console.log("✅ Categorias:", res.data);
    } catch (err) {
      console.error("❌ Erro ao buscar Categorias:", err);
    }
  };

  // ✅ useEffect para carregar produtos e ativar carrossel
  useEffect(() => {
    listarVenda();
    listarProdutos();
    listarCategoria();

    const carrossel = document.getElementById("carrossel");
    const btnPrev = document.querySelector(".carrossel-btn.prev");
    const btnNext = document.querySelector(".carrossel-btn.next");

    if (!carrossel || !btnPrev || !btnNext) return;

    const scrollRight = () => carrossel.scrollBy({ left: 200, behavior: "smooth" });
    const scrollLeft = () => carrossel.scrollBy({ left: -200, behavior: "smooth" });

    btnNext.addEventListener("click", scrollRight);
    btnPrev.addEventListener("click", scrollLeft);

    return () => {
      btnNext.removeEventListener("click", scrollRight);
      btnPrev.removeEventListener("click", scrollLeft);
    };
  }, []);

  return (
    <div className="container-geral-gestaoestoque">
      <MenuLateral />

      <div className="conteudo-principal">
        <MenuNormal />

        <main className="gestaoestoque-box">
          <h2>Gestão de Estoque</h2>

          {/* 📊 Gráfico */}
          <div className="grafico-container">
            <div className="grafico-box">
              <ReactApexChart
                options={state.options}
                series={state.series}
                type="area"
                height={350}
              />
            </div>
          </div>

          {/* 🌀 Carrossel */}
          <div className="carrossel-container">
            <button className="carrossel-btn prev">&#10094;</button>

            <div className="categorias-box" id="carrossel">
              <div className="categoria-item">
                <img src={friosIcon} alt="Frios" />
                <p>Frios</p>
              </div>
              <div className="categoria-item">
                <img src={bebidasIcon} alt="Bebidas" />
                <p>Bebidas</p>
              </div>
              <div className="categoria-item">
                <img src={hortifruitIcon} alt="Hortifruit" />
                <p>Hortifruit</p>
              </div>
              <div className="categoria-item">
                <img src={merceariaIcon} alt="Mercearia" />
                <p>Mercearia</p>
              </div>
              <div className="categoria-item">
                <img src={padariaIcon} alt="Padaria" />
                <p>Padaria</p>
              </div>
              <div className="categoria-item">
                <img src={prolimIcon} alt="Pro Limpeza" />
                <p>Pro Limpeza</p>
              </div>
            </div>

            <button className="carrossel-btn next">&#10095;</button>
          </div>

          {/* 🧾 Produtos */}
          <div className="listagem-produtos">
            <h4 className="produtos-h4">Produtos</h4>


            {listaProduto.length > 0 ? (
              listaProduto.map((produto, index) => {
                // 🔍 Verifica se há um campo com o caminho da imagem
                const caminhoImagem =
                  produto.caminhoImagem || // usado se sua API retornar "caminhoImagem"
                  produto.imagem ||        // usado se for apenas "imagem"
                  produto.urlImagem ||     // usado se vier como "urlImagem"
                  "";

                // ✅ Monta o caminho completo (ajuste o domínio conforme seu back)
                const imagemFinal = caminhoImagem
                  ? `https://localhost:7067/${caminhoImagem.replace("wwwroot/", "")}`
                  : ""; // sem placeholder

                return (
                  <div className="produto-card" key={index}>
                    <img
                      className="produto-img"
                      src={imagemFinal}
                      alt={produto.nome || "Produto"}
                    />
                    <div className="produto-info">
                      <p><strong>Descrição:</strong></p>
                      <p>Produto: {produto.nome}</p>
                      <p>Peso: {produto.peso}</p>
                      <p>Valor: R$ {produto.preco}</p>
                      <p>Validade: {new Date(produto.validade).toLocaleDateString("pt-BR")}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>Carregando produtos...</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};