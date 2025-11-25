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
  const [listaProduto, setListaProduto] = useState([]);
  const [listaCategoria, setListaCategoria] = useState([]);
  const [listaVenda, setListaVenda] = useState([]);
  const [setorSelecionado, setSetorSelecionado] = useState("");

  const [state, setState] = useState({
    series: [{ name: "Quantidade Vendida", data: [] }],
    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: { type: "x", enabled: true, autoScaleYaxis: true },
        toolbar: { autoSelected: "zoom" },
      },
      dataLabels: { enabled: false },
      markers: { size: 0 },
      title: { text: "Quantidade Vendida por Data (via Feedback)", align: "left" },
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
        labels: { formatter: (val) => val.toFixed(0) },
        title: { text: "Quantidade Vendida" },
      },
      xaxis: {
        type: "datetime",
        title: { text: "Data do Feedback / Venda" },
        labels: {
          datetimeFormatter: {
            year: "yyyy",
            month: "MM/yyyy",
            day: "dd/MM",
          },
        },
      },
      tooltip: {
        shared: false,
        x: { format: "dd/MM/yyyy" },
        y: { formatter: (val) => `${val.toFixed(0)} unidades` },
      },
    },
  });

  // 🔹 Função para buscar vendas e montar gráfico
 const listarVenda = async () => {
  try {
    const resVendas = await api.get("Venda/Listar");
    const vendas = resVendas.data || [];

    const resFeedbacks = await api.get("Feedback");
    const feedbacks = resFeedbacks.data || [];

    const mapaFeedback = {};
    feedbacks.forEach(fb => {
      if (fb.feedbackID && fb.dataFeedback)
        mapaFeedback[fb.feedbackID] = fb.dataFeedback;
    });

    // 🔹 Consolida vendas por data
    const somaPorData = {};
    vendas.forEach(v => {
      const data = mapaFeedback[v.feedbackID];
      if (data) {
        const dia = new Date(data).toISOString().split("T")[0]; 
        somaPorData[dia] = (somaPorData[dia] || 0) + (v.quantidade || 0);
      }
    });

    const dadosGrafico = Object.entries(somaPorData)
      .map(([data, quantidade]) => ({
        x: new Date(data).getTime(),
        y: quantidade,
      }))
      .sort((a, b) => a.x - b.x);

    setState(prev => ({
      ...prev,
      options: {
        ...prev.options,
        chart: { type: "area", zoom: { enabled: true } },
        xaxis: {
          type: "datetime",
          title: { text: "Data da Venda (via Feedback)" },
        },
        yaxis: { title: { text: "Total Vendido no Dia" } },
        title: { text: "Vendas Totais por Dia", align: "left" },
        tooltip: {
          x: { format: "dd/MM/yyyy" },
          y: { formatter: val => `${val} unidades` },
        },
      },
      series: [
        {
          name: "Total Vendido",
          data: dadosGrafico,
        },
      ],
    }));
  } catch (err) {
    console.error("❌ Erro ao buscar vendas/feedbacks:", err);
  }
};

  const listarProdutos = async () => {
    try {
      const res = await api.get("Produtos");
      setListaProduto(res.data);
    } catch (err) {
      console.error("❌ Erro ao buscar Produtos:", err);
    }
  };

  const listarCategoria = async () => {
    try {
      const res = await api.get("EstoqueProdutos");
      setListaCategoria(res.data);
    } catch (err) {
      console.error("❌ Erro ao buscar Categorias:", err);
    }
  };

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

  // 🧠 Filtro de produtos
  const produtosFiltrados =
    setorSelecionado && setorSelecionado !== "Mostrar Todos"
      ? listaProduto.filter(
          (produto) =>
            produto.setor &&
            produto.setor.toLowerCase() === setorSelecionado.toLowerCase()
        )
      : listaProduto;

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
              <div
                className={`categoria-item ${
                  setorSelecionado === "Frios" ? "ativo" : ""
                }`}
                onClick={() => setSetorSelecionado("Frios")}
              >
                <img src={friosIcon} alt="Frios" />
                <p>Frios</p>
              </div>
              <div
                className={`categoria-item ${
                  setorSelecionado === "Bebidas" ? "ativo" : ""
                }`}
                onClick={() => setSetorSelecionado("Bebidas")}
              >
                <img src={bebidasIcon} alt="Bebidas" />
                <p>Bebidas</p>
              </div>
              <div
                className={`categoria-item ${
                  setorSelecionado === "Hortifruit" ? "ativo" : ""
                }`}
                onClick={() => setSetorSelecionado("Hortifruit")}
              >
                <img src={hortifruitIcon} alt="Hortifruit" />
                <p>Hortifruit</p>
              </div>
              <div
                className={`categoria-item ${
                  setorSelecionado === "Mercearia" ? "ativo" : ""
                }`}
                onClick={() => setSetorSelecionado("Mercearia")}
              >
                <img src={merceariaIcon} alt="Mercearia" />
                <p>Mercearia</p>
              </div>
              <div
                className={`categoria-item ${
                  setorSelecionado === "Padaria" ? "ativo" : ""
                }`}
                onClick={() => setSetorSelecionado("Padaria")}
              >
                <img src={padariaIcon} alt="Padaria" />
                <p>Padaria</p>
              </div>
              <div
                className={`categoria-item ${
                  setorSelecionado === "Limpeza" ? "ativo" : ""
                }`}
                onClick={() => setSetorSelecionado("Limpeza")}
              >
                <img src={prolimIcon} alt="Limpeza" />
                <p>Limpeza</p>
              </div>

              {/* 🚀 Nova categoria: Mostrar Todos */}
              <div
                className={`categoria-item ${
                  setorSelecionado === "Mostrar Todos" ? "ativo" : ""
                }`}
                onClick={() => setSetorSelecionado("Mostrar Todos")}
              >

                <div className="mostrar-todos-icone">🛒</div>
                <p>  </p>
                <p>Mostrar Todos</p>
              </div>
            </div>

            <button className="carrossel-btn next">&#10095;</button>
          </div>

          {/* 🧾 Produtos */}
          <div className="listagem-produtos">
            <h4 className="produtos-h4">
              Produtos{" "}
              {setorSelecionado && setorSelecionado !== "Mostrar Todos"
                ? `- ${setorSelecionado}`
                : ""}
            </h4>

            {produtosFiltrados.length > 0 ? (
              produtosFiltrados.map((produto, index) => {
                const caminhoImagem =
                  produto.caminhoImagem ||
                  produto.imagem ||
                  produto.urlImagem ||
                  "";
                const imagemFinal = caminhoImagem
                  ? `https://localhost:7067/${caminhoImagem.replace("wwwroot/", "")}`
                  : "";

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
                      <p>Valor: R$ {produto.valor}</p>
                      <p>
                        Validade:{" "}
                        {new Date(produto.validade).toLocaleDateString("pt-BR")}
                      </p>
                      <p>Setor: {produto.setor}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>Nenhum produto encontrado...</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
