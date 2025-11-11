import "./home.css";
import ReactApexChart from "react-apexcharts";
import { MenuLateral } from "../../components/menulateral/MenuLateral";
import { MenuNormal } from "../../components/menunormal/menunormal";
import Pessoas from "../../assets/pessoas.png";
import alerta from "../../assets/alerta.png";
import caminhao from "../../assets/caminhao.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContexts";

export const Home = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const graficoPizza = {
    series: [40, 30, 10, 7, 13],
    options: {
      chart: { type: "pie" },
      labels: ["Categoria A", "Categoria B", "Categoria C", "Categoria D", "Categoria E"],
      colors: ["#008FFB", "#00E396", "#FEB019", "#A3A3A3", "#7BDCB5"],
      legend: { position: "bottom" },
    },
  };

  const graficoProdutos = {
    series: [
      {
        name: "PRODUCT A",
        data: [150, 160, 170, 165, 180, 190, 200, 210, 220, 225, 230, 240, 245, 250],
      },
      {
        name: "PRODUCT B",
        data: [60, 65, 70, 75, 100, 120, 150, 160, 140, 130, 100, 80, 60, 50],
      },
      {
        name: "PRODUCT C",
        data: [20, 22, 25, 23, 21, 24, 26, 27, 28, 26, 25, 27, 29, 30],
      },
    ],
    options: {
      chart: { type: "area", height: 300 },
      dataLabels: { enabled: false },
      stroke: { curve: "smooth" },
      xaxis: {
        categories: [
          "01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan",
          "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan",
          "13 Jan", "14 Jan"
        ],
        labels: { rotate: -45 },
      },
      colors: ["#00E396", "#008FFB", "#FEB019"],
    },
  };

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
              <strong>R$ 12.350</strong>
            </div>
          </div>

          <div className="graficos-home">
            <div className="grafico-box-home">
              <Link to="/Fornecedores">
                <ReactApexChart
                  className="dashboard-home"
                  options={graficoPizza.options}
                  series={graficoPizza.series}
                  type="pie"
                  height={300}
                />
              </Link>
            </div>

            <div className="grafico-box-home">
              <Link to="/LucrosGastos">
                <h4 className="lucrosGastos_h4">Lucros e Gastos</h4>
                <ReactApexChart
                  className="dashboard-home"
                  options={graficoProdutos.options}
                  series={graficoProdutos.series}
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
