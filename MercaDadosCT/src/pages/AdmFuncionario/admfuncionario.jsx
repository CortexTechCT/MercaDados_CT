import "./AdmFuncionario.css";
import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { MenuLateral } from "../../components/menulateral/MenuLateral.jsx";
import { MenuNormal } from "../../components/menunormal/menunormal.jsx";
import perfilazul from "../../assets/perfilazul.svg";
import api from "../../services/Services.js";
<<<<<<< HEAD

=======
>>>>>>> e2f587557cd7c4562fe9026d7e29e07db1a3139f

 // Imagens (mantidas caso sejam usadas futuramente)
// import vini from "../../assets/viniciou.jpg";
// import yasmin from "../../assets/IMG_3617_1.png";
// import matheus from "../../assets/IMG_8991_1.png";
// import higor from "../../assets/IMG_8977_1.png";
// import herik from "../../assets/image_2.png";
// import isaac from "../../assets/171977797.png";

<<<<<<< HEAD

=======
>>>>>>> e2f587557cd7c4562fe9026d7e29e07db1a3139f
export const AdmFuncionario = () => {
  const [listaFuncionario, setListaFuncionario] = useState([]);
  const [funcAberto, setFuncAberto] = useState(null);

  const toggleFuncionario = (index) => {
    setFuncAberto(funcAberto === index ? null : index);
  };

  // Gráfico de Pizza
  const pizzaChartOptions = {
    chart: { width: 380, type: "pie" },
    labels: ["Satisfeito", "Neutro", "Insatisfeito"],
    colors: ["#337DFF", "#FFC043", "#FF5A5F"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { width: 250 },
          legend: { position: "bottom" },
        },
      },
    ],
  };
  const pizzaChartSeries = [44, 30, 26];

  // Gráfico de Barras
  const graficoBarras = {
    series: [
      {
        name: "Desempenho",
<<<<<<< HEAD


        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],

        data: [2.3, 3.1, 4.0, 10.1, 4.0, 7.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.5],


        data: [2.3, 3.1, 4.0, 10.1, 4.0, 7.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.5],

=======
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 7.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.5],
>>>>>>> e2f587557cd7c4562fe9026d7e29e07db1a3139f
      },
    ],
    options: {
      chart: { type: "bar", height: 250 },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: { position: "top" },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: (val) => val + "%",
        offsetY: -20,
        style: { fontSize: "12px", colors: ["#304758"] },
      },
<<<<<<< HEAD


      xaxis: { categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"] },
    },
  };

  // Buscar funcionários do backend

  

  // useEffect (() => {
  //     xaxis: {
  //       categories: [
  //         "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  //         "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  //       ],
  //     },
  //   },
  // });
=======
      xaxis: {
        categories: [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        ],
      },
    },
  };
>>>>>>> e2f587557cd7c4562fe9026d7e29e07db1a3139f

  // Buscar funcionários do backend
  useEffect(() => {
<<<<<<< HEAD

=======
>>>>>>> e2f587557cd7c4562fe9026d7e29e07db1a3139f
    ListarFuncionario();
  }, []);

  async function ListarFuncionario() {
    try {
      const resposta = await api.get("Funcionario");
      console.log("Dados recebidos:", resposta.data);
      setListaFuncionario(resposta.data);
    } catch (error) {
      console.log("Erro ao buscar os usuários:", error);
    }
  }

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
                <div key={index} className="item-funcionario-wrapper">
                  <div
                    className="item-funcionario"
                    onClick={() => toggleFuncionario(index)}
                  >
                    <div className="info-funcionario">
<<<<<<< HEAD



=======
>>>>>>> e2f587557cd7c4562fe9026d7e29e07db1a3139f
                      <img
                        src={
                          f.fotoPerfil
                            ? `https://localhost:7115${f.fotoPerfil}`
                            : "/assets/default.png"
                        }
                        alt={f.nomeFuncionario}
                        className="foto-funcionario"
<<<<<<< HEAD

                      /> 
                      <img 
                        src={perfilazul} 

=======
>>>>>>> e2f587557cd7c4562fe9026d7e29e07db1a3139f
                      />

                      <img
                        src={perfilazul}
<<<<<<< HEAD

=======
>>>>>>> e2f587557cd7c4562fe9026d7e29e07db1a3139f
                        className="Usuario-perfilAdm"
                        alt="Usuário"
                      />

                      <p>{f.nomeFuncionario}</p>
                    </div>

                    <span
                      className={`seta ${funcAberto === index ? "aberto" : ""}`}
                    >
                      {funcAberto === index ? "˄" : "˅"}
                    </span>
                  </div>

                  <div
                    className={`detalhes-funcionario-transicao ${
                      funcAberto === index ? "aberto" : ""
                    }`}
                  >
                    {funcAberto === index && (
                      <div className="detalhes-funcionario">
                        <div className="header-funcionario-expandido">
                          <div>
                            <strong>{f.nomeFuncionario}</strong>
                            <span className="funcao">
                              Função: {"Caixa de Vendas"}
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

export default AdmFuncionario;