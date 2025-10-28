import "./AdmFuncionario.css";
import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { MenuLateral } from "../../components/menulateral/MenuLateral.jsx";
import { MenuNormal } from "../../components/menunormal/menunormal.jsx";
import perfilazul from "../../assets/perfilazul.svg";
import api from "../../services/Services.js";

export const AdmFuncionario = () => {
  const [listaFuncionario, setListaFuncionario] = useState([]);
  const [funcAberto, setFuncAberto] = useState(null);
  const [listaVenda, setListaVenda] = useState([]);
  const [listaFeed, setListaFeed] = useState([]);

  // Alterna funcionário aberto/fechado
  const toggleFuncionario = (index) => {
    setFuncAberto(funcAberto === index ? null : index);
  };

  // 📡 Buscar dados da API
  const listarFuncionario = async () => {
    try {
      const res = await api.get("Funcionario");
      setListaFuncionario(res.data);
      console.log("✅ Funcionários:", res.data);
    } catch (err) {
      console.error("❌ Erro ao buscar funcionários:", err);
    }
  };

  const listarVenda = async () => {
    try {
      const res = await api.get("Venda/Listar");
      setListaVenda(res.data);
      console.log("✅ Vendas:", res.data);
    } catch (err) {
      console.error("❌ Erro ao buscar vendas:", err);
    }
  };

  const listarFeedback = async () => {
    try {
      const res = await api.get("Feedback");
      setListaFeed(res.data);
      console.log("✅ Feedbacks:", res.data);
    } catch (err) {
      console.error("❌ Erro ao buscar feedbacks:", err);
    }
  };

  // Executa ao montar
  useEffect(() => {
    listarFuncionario();
    listarVenda();
    listarFeedback();
  }, []);

  // Gráficos gerais
  const graficoPizzaGeral = {
    options: {
      chart: { type: "pie", width: 380 },
      labels: ["Satisfeito", "Neutro", "Insatisfeito"],
      colors: ["#337DFF", "#FFC043", "#FF5A5F"],
      responsive: [{ breakpoint: 480, options: { chart: { width: 250 }, legend: { position: "bottom" } } }],
    },
    series: [44, 30, 26], // Pode calcular dinamicamente com listaFeed
  };

  const graficoBarrasGeral = {
    series: [
      {
        name: "Desempenho",
        data: listaVenda.map((v) => v.percentualDesempenho || 0),
      },
    ],
    options: {
      chart: { type: "bar", height: 250 },
      plotOptions: { bar: { borderRadius: 10, dataLabels: { position: "top" } } },
      dataLabels: { enabled: true, formatter: (val) => val + "%", offsetY: -20, style: { fontSize: "12px", colors: ["#304758"] } },
      xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] },
    },
  };

  return (
    <div className="container-geral-admfuncionario">
      <MenuLateral />
      <div className="conteudo-principal">
        <MenuNormal />

        <main className="funcionario-box">
          <h2>Gestão de funcionários:</h2>

          <div className="lista-funcionarios">
            {listaFuncionario.length === 0 && <p className="nenhum-funcionario">Nenhum funcionário encontrado.</p>}

            {listaFuncionario.map((f, index) => {
              const idFunc = f.funcionarioID || f.idFuncionario || f.id;

              const feedbacksFuncionario = listaFeed.filter((fb) => fb.funcionarioID === idFunc);
              const feedbacksIDs = feedbacksFuncionario.map((fb) => fb.feedbackID);
              const vendasFuncionario = listaVenda.filter((v) => feedbacksIDs.includes(v.feedbackID));

              // Gráfico de pizza do funcionário
              const graficoPizzaFuncionario = {
                options: {
                  chart: { type: "pie", width: 380 },
                  labels: ["Satisfeito", "Neutro", "Insatisfeito"],
                  colors: ["#337DFF", "#FFC043", "#FF5A5F"],
                  legend: { position: "bottom" },
                },
                series: [
                  feedbacksFuncionario.filter((fb) => fb.nota?.toLowerCase() === "satisfeito").length,
                  feedbacksFuncionario.filter((fb) => fb.nota?.toLowerCase() === "neutro").length,
                  feedbacksFuncionario.filter((fb) => fb.nota?.toLowerCase() === "insatisfeito").length,
                ],
              };

              // Gráfico de barras do funcionário (vendas por mês)
              const vendasPorMes = Array.from({ length: 12 }, (_, i) => {
                const mes = i + 1;
                return vendasFuncionario.filter((v) => {
                  const fb = listaFeed.find((fb) => fb.feedbackID === v.feedbackID);
                  return fb ? new Date(fb.dataFeedback).getMonth() + 1 === mes : false;
                }).length;
              });

              const graficoBarrasFuncionario = {
                series: [{ name: "Vendas", data: vendasPorMes }],
                options: {
                  chart: { type: "bar", height: 250 },
                  plotOptions: { bar: { borderRadius: 10, dataLabels: { position: "top" } } },
                  dataLabels: { enabled: true, formatter: (val) => val, offsetY: -20, style: { fontSize: "12px", colors: ["#304758"] } },
                  xaxis: { categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"] },
                },
              };

              return (
                <div key={index} className="item-funcionario-wrapper">
                  <div className="item-funcionario" onClick={() => toggleFuncionario(index)}>
                    <div className="info-funcionario">
                      <img
                        src={f.fotoPerfil ? `https://localhost:7115${f.fotoPerfil.startsWith("/") ? f.fotoPerfil : `/${f.fotoPerfil}`}` : perfilazul}
                        alt={f.nomeFuncionario}
                        className="foto-funcionario"
                        onError={(e) => (e.target.src = perfilazul)}
                      />
                      <p>{f.nomeFuncionario}</p>
                    </div>
                    <span className={`seta ${funcAberto === index ? "aberto" : ""}`}>{funcAberto === index ? "˄" : "˅"}</span>
                  </div>

                  {funcAberto === index && (
                    <div className="detalhes-funcionario-transicao aberto">
                      <div className="detalhes-funcionario">
                        <div className="header-funcionario-expandido">
                          <div>
                            <strong>{f.nomeFuncionario}</strong>
                            <span className="funcao">Função: {f.funcao || "Caixa de Vendas"}</span>
                          </div>
                        </div>

                        <div className="graficos-funcionario">
                          <div className="grafico-barra-placeholder">
                            {graficoBarrasFuncionario.series[0].data.length > 0 ? (
                              <ReactApexChart options={graficoBarrasFuncionario.options} series={graficoBarrasFuncionario.series} type="bar" height={230} width={370} />
                            ) : (
                              <p>Carregando dados de vendas...</p>
                            )}
                          </div>

                          <div className="grafico-pizza-placeholder">
                            {graficoPizzaFuncionario.series.some((n) => n > 0) ? (
                              <ReactApexChart options={graficoPizzaFuncionario.options} series={graficoPizzaFuncionario.series} type="pie" width={350} />
                            ) : (
                              <p>Carregando feedbacks...</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
};
