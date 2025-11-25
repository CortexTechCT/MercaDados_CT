import "./home.css";
import ReactApexChart from "react-apexcharts";
import { MenuLateral } from "../../components/menulateral/MenuLateral";
import { MenuNormal } from "../../components/menunormal/menunormal";
import Pessoas from "../../assets/pessoas.png";
import alerta from "../../assets/alerta.png";
import caminhao from "../../assets/caminhao.png";
import perfilazul from "../../assets/perfilazul.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContexts";
import { useState, useEffect } from "react";
import api from "../../services/Services.js";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Home = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const [lucros, setLucros] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [totalVendasDia, setTotalVendasDia] = useState(0);

  const carregarLucros = async () => {
    try {
      console.log("🔄 Buscando vendas...");

      const vendasResp = await api.get("Venda/Listar");
      const vendas = vendasResp.data;

      console.log("📌 Vendas recebidas:", vendas);

      // ======== GRÁFICO ========
      const nomes = vendas.map((v, i) => `Venda ${i + 1}`);
      const valores = vendas.map(v => v.valor);

      setCategorias(nomes);
      setLucros(valores);

      // ======== VENDAS DO DIA — PEGANDO DATA DO FEEDBACK ========
      const hoje = new Date().toISOString().split("T")[0];
      let totalHoje = 0;

      for (const venda of vendas) {
        const valorVenda = Number(venda.valor || 0);
        const feedbackId = venda.feedbackID;

        if (!feedbackId) continue;

        try {
          const respFeedback = await api.get(`Feedback/${feedbackId}`);
          const feedback = respFeedback.data;

          const dataFeedback = feedback.dataFeedback?.split("T")[0];

          console.log("📝 Feedback encontrado:", {
            feedbackId,
            dataFeedback,
            valorVenda,
          });

          if (dataFeedback === hoje) {
            totalHoje += valorVenda;
          }

        } catch (err) {
          console.log("⚠ Erro ao buscar feedback:", feedbackId, err);
        }
      }

      console.log("💰 Total vendido hoje:", totalHoje);
      setTotalVendasDia(totalHoje);

    } catch (error) {
      console.error("❌ Erro ao carregar lucros na Home:", error);
    }
  };

  useEffect(() => {

   carregarLucros();
  }, []);

  const graficoLucros = {
    series: [{ name: "Lucros", data: lucros }],
    options: {
      chart: { type: "area", height: 300 },
      xaxis: { categories: categorias },
      colors: ["#00E396"],
      stroke: { curve: "smooth" },
      dataLabels: { enabled: true },
    },
  };

  const [funcionarios, setFuncionarios] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [indexAtual, setIndexAtual] = useState(0);

  const carregarFuncionarios = async () => {
    try {
      const res = await api.get("Funcionario");
      setFuncionarios(res.data);
    } catch (err) {
      console.error("Erro ao carregar funcionários:", err);
    }
  };

  const carregarFeedbacks = async () => {
    try {
      const res = await api.get("Feedback");
      setFeedbacks(res.data);
    } catch (err) {
      console.error("Erro ao carregar feedbacks:", err);
    }
  };

  useEffect(() => {
    carregarFuncionarios();
    carregarFeedbacks();
  }, []);

  useEffect(() => {
    if (funcionarios.length === 0) return;
    const intervalo = setInterval(() => {
      setIndexAtual((prev) => (prev + 1) % funcionarios.length);
    }, 5000);
    return () => clearInterval(intervalo);
  }, [funcionarios]);

  const funcionarioAtual = funcionarios[indexAtual];

  const irParaAnterior = () => {
    setIndexAtual((prev) => (prev - 1 + funcionarios.length) % funcionarios.length);
  };

  const irParaProximo = () => {
    setIndexAtual((prev) => (prev + 1) % funcionarios.length);
  };

  let graficoFuncionario = null;

  if (funcionarioAtual) {
    const idFunc = funcionarioAtual.funcionarioID || funcionarioAtual.idFuncionario;
    const feedbacksFunc = feedbacks.filter(f => f.funcionarioID === idFunc);

    const totalSatisfeito = feedbacksFunc.filter(f => f.nota?.toLowerCase() === "satisfeito").length;
    const totalNeutro = feedbacksFunc.filter(f => f.nota?.toLowerCase() === "neutro").length;
    const totalInsatisfeito = feedbacksFunc.filter(f => f.nota?.toLowerCase() === "insatisfeito").length;

    graficoFuncionario = {
      series: [totalSatisfeito, totalNeutro, totalInsatisfeito],
      options: {
        chart: { type: "pie" },
        labels: ["Satisfeito", "Neutro", "Insatisfeito"],
        colors: ["#00E396", "#FEB019", "#FF4560"],
        legend: { position: "bottom" },
      },
    };
  }

  return (
    <div className="container-geral-home">
      <MenuLateral />
      <div className="conteudo-principal">
        <MenuNormal />

        <main className="home-box">
          <h2 className="dashboard-h2">Dashboard</h2>

          <div className="cards-dashboard">
            <div className="card-info">
              <Link className="link-administrador" to="/AdmFuncionario">
                <img className="pessoas" src={Pessoas} alt="Administração" />
                <p>Administração</p>
              </Link>
            </div>

            <div className="card-info">
              <Link className="link-administrador" to="/LucrosGastos">
                <img className="alertaa" src={alerta} alt="Alertas" />
                <p>Alertas/Situações Críticas</p>
                <strong>3</strong>
              </Link>
            </div>

            <div className="card-info">
              <Link className="link-administrador" to="/Fornecedores">
                <img className="caminhao" src={caminhao} alt="Fornecedores" />
                <p>Fornecedores Ativos</p>
                <strong>3</strong>
              </Link>
            </div>

            <div className="card-info">
              <p>Vendas do Dia</p>
              <strong>
                {totalVendasDia.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
            </div>
          </div>

          <div className="graficos-home">
            <div className="grafico-box-home funcionario-carousel">
              <h4>Funcionário em Destaque</h4>

              <button className="seta-esquerda" onClick={irParaAnterior}>
                <ChevronLeft size={28} />
              </button>
              <button className="seta-direita" onClick={irParaProximo}>
                <ChevronRight size={28} />
              </button>

              {funcionarioAtual ? (
                <div className="funcionario-carousel-item">
                  <div className="funcionario-info-home">
                    <img
                      src={
                        funcionarioAtual.fotoPerfil
                          ? `https://localhost:7115${
                              funcionarioAtual.fotoPerfil.startsWith("/")
                                ? funcionarioAtual.fotoPerfil
                                : `/${funcionarioAtual.fotoPerfil}`
                            }`
                          : perfilazul
                      }
                      onError={(e) => (e.target.src = perfilazul)}
                      className="foto-func-home"
                    />
                    <p className="nome-func-home">{funcionarioAtual.nomeFuncionario}</p>
                  </div>

                  {graficoFuncionario && graficoFuncionario.series.some(v => v > 0) ? (
                    <ReactApexChart
                      options={graficoFuncionario.options}
                      series={graficoFuncionario.series}
                      type="pie"
                      height={250}
                    />
                  ) : (
                    <p className="sem-feedback">O funcionário não possui um feedback cadastrado.</p>
                  )}
                </div>
              ) : (
                <p>Carregando funcionários...</p>
              )}
            </div>

            <div className="grafico-box-home">
              <Link to="/LucrosGastos">
                <h4 className="lucrosGastos_h4">Lucros</h4>
                <ReactApexChart
                  className="dashboard-home"
                  options={graficoLucros.options}
                  series={graficoLucros.series}
                  type="area"
                  height={300}
                />
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
