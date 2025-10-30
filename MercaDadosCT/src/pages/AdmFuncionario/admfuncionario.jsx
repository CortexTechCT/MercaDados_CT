import "./admfuncionario.css";
import { MenuLateral } from "../../components/menulateral/MenuLateral";
import { MenuNormal } from "../../components/menunormal/menunormal";
import { useEffect, useState } from "react";
import api from "../../services/Services";
import ReactApexChart from "react-apexcharts"; // necessário para gráficos
import perfilazul from "../../assets/perfilazul.png"; // imagem padrão

export const AdmFuncionario = () => {
  // --- ESTADOS ---
  const [listaFuncionario, setListaFuncionario] = useState([]);
  const [listaVenda, setListaVenda] = useState([]);
  const [listaFeed, setListaFeed] = useState([]);
  const [funcAberto, setFuncAberto] = useState(null);

  // --- FUNÇÕES DE API ---
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

  // --- ABRIR/COLAR FUNCIONÁRIO ---
  const toggleFuncionario = (index) => {
    setFuncAberto(funcAberto === index ? null : index);
  };

  // --- CARREGAR DADOS AO MONTAR ---
  useEffect(() => {
    listarFuncionario();
    listarVenda();
    listarFeedback();
  }, []);

  // --- CONFIG GERAL DE GRÁFICO ---
  const graficoBarrasGeral = {
    series: [
      {
        name: "Desempenho",
        data: listaVenda.map((v) => v.percentualDesempenho || 0),
      },
    ],
    options: {
      chart: { type: "bar", height: 250 },
      plotOptions: {
        bar: { borderRadius: 10, dataLabels: { position: "top" } },
      },
      dataLabels: {
        enabled: true,
        formatter: (val) => val + "%",
        offsetY: -20,
        style: { fontSize: "12px", colors: ["#304758"] },
      },
      xaxis: {
        categories: [
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Out",
          "Nov",
          "Dez",
        ],
      },
    },
  };

  // --- JSX ---
  return (
    <div className="container-geral-admfuncionario">
      <MenuLateral />
      <MenuNormal />

      <div className="conteudo-admfuncionario">
        <h1>Administração de Funcionários</h1>

        {/* ---------------- FUNCIONÁRIOS ---------------- */}
        <section>
          <h2>Lista de Funcionários</h2>
          {listaFuncionario.length > 0 ? (
            <table className="tabela">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Cargo</th>
                </tr>
              </thead>
              <tbody>
                {listaFuncionario.map((f, index) => (
                  <tr key={f.id || index}>
                    <td>{index + 1}</td>
                    <td>{f.nome}</td>
                    <td>{f.email}</td>
                    <td>{f.cargo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Nenhum funcionário encontrado.</p>
          )}
        </section>

        {/* ---------------- VENDAS ---------------- */}
        <section>
          <h2>Vendas Registradas</h2>
          {listaVenda.length > 0 ? (
            <table className="tabela">
              <thead>
                <tr>
                  <th>#</th>
                  <th>ID Venda</th>
                  <th>Cliente</th>
                  <th>Valor Total</th>
                </tr>
              </thead>
              <tbody>
                {listaVenda.map((venda, index) => (
                  <tr key={venda.id || index}>
                    <td>{index + 1}</td>
                    <td>{venda.id}</td>
                    <td>{venda.nomeCliente}</td>
                    <td>R$ {venda.valorTotal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Nenhuma venda encontrada.</p>
          )}
        </section>

        {/* ---------------- FEEDBACKS ---------------- */}
        <section>
          <h2>Feedbacks dos Clientes</h2>
          {listaFeed.length > 0 ? (
            <ul className="lista-feedback">
              {listaFeed.map((feed, index) => (
                <li key={feed.id || index}>
                  <strong>{feed.nomeCliente}:</strong> {feed.mensagem}
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum feedback disponível.</p>
          )}
        </section>

        {/* ---------------- DETALHES DE FUNCIONÁRIOS ---------------- */}
        <div className="lista-funcionarios">
          {listaFuncionario.length === 0 && (
            <p className="nenhum-funcionario">
              Nenhum funcionário encontrado.
            </p>
          )}

          {listaFuncionario.map((f, index) => {
            const idFunc = f.funcionarioID || f.idFuncionario || f.id;
            const feedbacksFuncionario = listaFeed.filter(
              (fb) => fb.funcionarioID === idFunc
            );
            const feedbacksIDs = feedbacksFuncionario.map((fb) => fb.feedbackID);
            const vendasFuncionario = listaVenda.filter((v) =>
              feedbacksIDs.includes(v.feedbackID)
            );

            const graficoPizzaFuncionario = {
              options: {
                chart: { type: "pie", width: 380 },
                labels: ["Satisfeito", "Neutro", "Insatisfeito"],
                colors: ["#337DFF", "#FFC043", "#FF5A5F"],
                legend: { position: "bottom" },
              },
              series: [
                feedbacksFuncionario.filter(
                  (fb) => fb.nota?.toLowerCase() === "satisfeito"
                ).length,
                feedbacksFuncionario.filter(
                  (fb) => fb.nota?.toLowerCase() === "neutro"
                ).length,
                feedbacksFuncionario.filter(
                  (fb) => fb.nota?.toLowerCase() === "insatisfeito"
                ).length,
              ],
            };

            const vendasPorMes = Array.from({ length: 12 }, (_, i) => {
              const mes = i + 1;
              return vendasFuncionario.filter((v) => {
                const fb = listaFeed.find(
                  (fb) => fb.feedbackID === v.feedbackID
                );
                return fb
                  ? new Date(fb.dataFeedback).getMonth() + 1 === mes
                  : false;
              }).length;
            });

            const graficoBarrasFuncionario = {
              series: [{ name: "Vendas", data: vendasPorMes }],
              options: {
                chart: { type: "bar", height: 250 },
                plotOptions: {
                  bar: { borderRadius: 10, dataLabels: { position: "top" } },
                },
                dataLabels: {
                  enabled: true,
                  formatter: (val) => val,
                  offsetY: -20,
                  style: { fontSize: "12px", colors: ["#304758"] },
                },
                xaxis: {
                  categories: [
                    "Jan",
                    "Fev",
                    "Mar",
                    "Abr",
                    "Mai",
                    "Jun",
                    "Jul",
                    "Ago",
                    "Set",
                    "Out",
                    "Nov",
                    "Dez",
                  ],
                },
              },
            };

            return (
              <div key={index} className="item-funcionario-wrapper">
                <div
                  className="item-funcionario"
                  onClick={() => toggleFuncionario(index)}
                >
                  <div className="info-funcionario">
                    <img
                      src={
                        f.fotoPerfil
                          ? `https://localhost:7115${
                              f.fotoPerfil.startsWith("/")
                                ? f.fotoPerfil
                                : `/${f.fotoPerfil}`
                            }`
                          : perfilazul
                      }
                      alt={f.nomeFuncionario}
                      className="foto-funcionario"
                      onError={(e) => (e.target.src = perfilazul)}
                    />
                    <p>{f.nomeFuncionario}</p>
                  </div>
                  <span
                    className={`seta ${funcAberto === index ? "aberto" : ""}`}
                  >
                    {funcAberto === index ? "˄" : "˅"}
                  </span>
                </div>

                {funcAberto === index && (
                  <div className="detalhes-funcionario-transicao aberto">
                    <div className="detalhes-funcionario">
                      <div className="header-funcionario-expandido">
                        <div>
                          <strong>{f.nomeFuncionario}</strong>
                          <span className="funcao">
                            Função: {f.funcao || "Caixa de Vendas"}
                          </span>
                        </div>
                      </div>

                      <div className="graficos-funcionario">
                        <div className="grafico-barra-placeholder">
                          {graficoBarrasFuncionario.series[0].data.length > 0 ? (
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

                        <div className="grafico-pizza-placeholder">
                          {graficoPizzaFuncionario.series.some((n) => n > 0) ? (
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
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
