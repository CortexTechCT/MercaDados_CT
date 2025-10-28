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

  const toggleFuncionario = (index) => {
    setFuncAberto(funcAberto === index ? null : index);
  };

  // --- FUNÇÕES DE API ---
  const ListarFuncionario = async () => {
    try {
      const resposta = await api.get("Funcionario");
      setListaFuncionario(resposta.data);
    } catch (error) {
      console.error("❌ Erro ao buscar funcionários:", error);
    }
  };

  const ListarVenda = async () => {
    try {
      const resposta = await api.get("Venda");
      setListaVenda(resposta.data); // salva dados da venda
    } catch (error) {
      console.error("❌ Erro ao buscar vendas:", error);
    }
  };

  const ListarFeedback = async () => {
    try {
      const resposta = await api.get("Feedback");
      setListaFeed(resposta.data); // salva dados do feedback
    } catch (error) {
      console.error("❌ Erro ao buscar feedback:", error);
    }
  };

  // --- USEEFFECT ---
  useEffect(() => {
    ListarFuncionario();
    ListarVenda();
    ListarFeedback();
  }, []);

  // --- GRÁFICOS ---
  const pizzaChartOptions = {
    chart: { width: 380, type: "pie" },
    labels: ["Satisfeito", "Neutro", "Insatisfeito"],
    colors: ["#337DFF", "#FFC043", "#FF5A5F"],
    responsive: [
      {
        breakpoint: 480,
        options: { chart: { width: 250 }, legend: { position: "bottom" } },
      },
    ],
  };

  const pizzaChartSeries = [44, 30, 26]; // Você pode calcular usando listaFeed se quiser

  const graficoBarras = {
    series: [
      {
        name: "Desempenho",
        data: listaVenda.map((v) => v.percentualDesempenho || 0), // Ajuste conforme o seu dado real
      },
    ],
    options: {
      chart: { type: "bar", height: 250 },
      plotOptions: { bar: { borderRadius: 10, dataLabels: { position: "top" } } },
      dataLabels: {
        enabled: true,
        formatter: (val) => val + "%",
        offsetY: -20,
        style: { fontSize: "12px", colors: ["#304758"] },
      },
      xaxis: {
        categories: [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        ],
      },
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
            {listaFuncionario.length === 0 ? (
              <p className="nenhum-funcionario">Nenhum funcionário encontrado.</p>
            ) : (
              listaFuncionario.map((f, index) => (
                <div key={f.idFuncionario || index} className="item-funcionario-wrapper">
                  <div
                    className="item-funcionario"
                    onClick={() => toggleFuncionario(index)}
                  >
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

                  <div className={`detalhes-funcionario-transicao ${funcAberto === index ? "aberto" : ""}`}>
                    {funcAberto === index && (
                      <div className="detalhes-funcionario">
                        <div className="header-funcionario-expandido">
                          <div>
                            <strong>{f.nomeFuncionario}</strong>
                            <span className="funcao">
                              Função: {"Caixa de Vendas"} {/* Você pode substituir pelo f.funcao se tiver */}
                            </span>
                          </div>
                        </div>

                        <div className="graficos-funcionario">
                          <div className="grafico-barra-placeholder">
                            <ReactApexChart
                              options={graficoBarras.options}
                              series={graficoBarras.series}
                              type="bar"
                              height={230}
                              width={370}
                            />
                          </div>

                          <div className="grafico-pizza-placeholder">
                            <ReactApexChart
                              options={pizzaChartOptions}
                              series={pizzaChartSeries}
                              type="pie"
                              width={350}
                            />
                          </div>
                        </div>

                        <div className="legenda-satisfacao">
                          <div className="item-legenda">
                            <div className="cor azul"></div>
                            <span>🙂</span>
                          </div>
                          <div className="item-legenda">
                            <div className="cor amarelo"></div>
                            <span>😐</span>
                          </div>
                          <div className="item-legenda">
                            <div className="cor vermelho"></div>
                            <span>😠</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
