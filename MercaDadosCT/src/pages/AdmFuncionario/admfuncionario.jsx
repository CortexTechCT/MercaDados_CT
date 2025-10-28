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

  // 🔄 Alternar funcionário aberto/fechado
  const toggleFuncionario = (index) => {
    setFuncAberto(funcAberto === index ? null : index);
  };

  // 📡 Buscar dados da API
  async function ListarFuncionario() {
    try {
      const resposta = await api.get("Funcionario");
      setListaFuncionario(resposta.data);
      console.log("✅ Funcionários:", resposta.data);
    } catch (error) {
      console.log("❌ Erro ao buscar funcionários:", error);
    }
  }

  async function ListarVenda() {
    try {
      const resposta = await api.get("Venda/Listar");
      setListaVenda(resposta.data);
      console.log("✅ Vendas:", resposta.data);
    } catch (error) {
      console.log("❌ Erro ao buscar vendas:", error);
    }
  }

  async function ListarFeedback() {
    try {
      const resposta = await api.get("Feedback");
      setListaFeed(resposta.data);
      console.log("✅ Feedbacks:", resposta.data);
    } catch (error) {
      console.log("❌ Erro ao buscar feedbacks:", error);
    }
  }

  // 🔁 Executa ao montar
  useEffect(() => {
    ListarFuncionario();
    ListarVenda();
    ListarFeedback();
  }, []);

  return (
    <div className="container-geral-admfuncionario">
      <MenuLateral />
      <div className="conteudo-principal">
        <MenuNormal />

        <main className="funcionario-box">
          <h2>Gestão de funcionários:</h2>

          <div className="lista-funcionarios">
            {listaFuncionario.map((f, index) => {
              const idFunc = f.funcionarioID || f.idFuncionario || f.id;

              // 🔸 IDs dos feedbacks do funcionário
              const feedbacksFuncionarioIDs = listaFeed
                .filter(fb => fb.funcionarioID === idFunc)
                .map(fb => fb.feedbackID);

              // 🔸 Filtra vendas do funcionário
              const vendasFuncionario = listaVenda.filter(v =>
                feedbacksFuncionarioIDs.includes(v.feedbackID)
              );

              // 🔸 Filtra feedbacks do funcionário
              const feedbacksFuncionario = listaFeed.filter(
                fb => fb.funcionarioID === idFunc
              );

              // 🔸 Calcula vendas por mês (usando data do feedback)
              const vendasPorMes = Array.from({ length: 12 }, (_, i) => {
                const mes = i + 1;
                return vendasFuncionario.filter(v => {
                  const feedback = listaFeed.find(fb => fb.feedbackID === v.feedbackID);
                  if (!feedback) return false;
                  return new Date(feedback.dataFeedback).getMonth() + 1 === mes;
                }).length;
              });

              // 🔸 Contagem de feedbacks por tipo
              const pizzaSeriesFuncionario = [
                feedbacksFuncionario.filter(fb => fb.nota?.toLowerCase() === "satisfeito").length,
                feedbacksFuncionario.filter(fb => fb.nota?.toLowerCase() === "neutro").length,
                feedbacksFuncionario.filter(fb => fb.nota?.toLowerCase() === "insatisfeito").length,
              ];

              // 🔸 Configuração do gráfico de barras
              const graficoBarrasFuncionario = {
                series: [{ name: "Vendas", data: vendasPorMes }],
                options: {
                  chart: { type: "bar", height: 250 },
                  plotOptions: { bar: { borderRadius: 10, dataLabels: { position: "top" } } },
                  dataLabels: {
                    enabled: true,
                    formatter: val => val,
                    offsetY: -20,
                    style: { fontSize: "12px", colors: ["#304758"] },
                  },
                  xaxis: {
                    categories: [
                      "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"
                    ],
                  },
                },
              };

              // 🔸 Configuração do gráfico de pizza
              const graficoPizzaFuncionario = {
                options: {
                  chart: { type: "pie", width: 380 },
                  labels: ["Satisfeito", "Neutro", "Insatisfeito"],
                  colors: ["#337DFF", "#FFC043", "#FF5A5F"],
                  legend: { position: "bottom" },
                },
                series: pizzaSeriesFuncionario,
              };

              return (
                <div key={index} className="item-funcionario-wrapper">
                  <div className="item-funcionario" onClick={() => toggleFuncionario(index)}>
                    <div className="info-funcionario">
                      <img
                        src={
                          f.fotoPerfil
                            ? `https://localhost:7115${f.fotoPerfil.startsWith("/") ? f.fotoPerfil : `/${f.fotoPerfil}`}`
                            : perfilazul
                        }
                        alt={f.nomeFuncionario}
                        className="foto-funcionario"
                        onError={(e) => (e.target.src = perfilazul)}
                      />
                      <p>{f.nomeFuncionario}</p>
                    </div>
                    <span className={`seta ${funcAberto === index ? "aberto" : ""}`}>
                      {funcAberto === index ? "˄" : "˅"}
                    </span>
                  </div>

                  {/* 🔽 Detalhes abertos */}
                  <div className={`detalhes-funcionario-transicao ${funcAberto === index ? "aberto" : ""}`}>
                    {funcAberto === index && (
                      <div className="detalhes-funcionario">
                        <div className="header-funcionario-expandido">
                          <div>
                            <strong>{f.nomeFuncionario}</strong>
                            <span className="funcao">
                              Função: {f.funcao || "Caixa de Vendas"}
                            </span>
                          </div>
                        </div>

                        {/* 📊 GRÁFICOS */}
                        <div className="graficos-funcionario">
                          {/* Gráfico de vendas */}
                          <div className="grafico-barra-placeholder">
                            {graficoBarrasFuncionario.series?.[0]?.data?.length > 0 ? (
                              <ReactApexChart
                                options={graficoBarrasFuncionario.options}
                                series={graficoBarrasFuncionario.series}
                                type="bar"
                                height={230}
                                width={370}
                              />
                            ) : (
                              <p>Carregando dados de vendas...</p>
                            )}
                          </div>

                          {/* Gráfico de feedback */}
                          <div className="grafico-pizza-placeholder">
                            {graficoPizzaFuncionario.series?.some(n => n > 0) ? (
                              <ReactApexChart
                                options={graficoPizzaFuncionario.options}
                                series={graficoPizzaFuncionario.series}
                                type="pie"
                                width={350}
                              />
                            ) : (
                              <p>Carregando feedbacks...</p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

          </div>
        </main>
      </div>
    </div>
  );
};