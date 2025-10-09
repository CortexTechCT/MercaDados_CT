  import { MenuLateral } from "../../components/menulateral/MenuLateral";
  import "./fornecedores.css";
  import React, { useState } from "react";
  import ReactApexChart from "react-apexcharts";
  import chocolandiaLogo from "../../assets/chocolandia.png";
  import nescauLogo from "../../assets/nescau.png";
  import duracellLogo from "../../assets/duracell.png";
import { MenuNormal } from "../../components/menunormal/menunormal";

  export const Fornecedores = () => {
    const [state, setState] = React.useState({

      series: [{
        name: 'Inflation',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
      }],
      options: {
        chart: {
          height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: 'top',
            },
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          }
        },

        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          position: 'top',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              }
            }
          },
          tooltip: {
            enabled: true,
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%";
            }
          }

        },
        title: {

          floating: true,
          offsetY: 330,
          align: 'center',
          style: {
            color: '#444'
          }
        }
      },


    });

    return (
      <div className="container-geral">

        <MenuLateral />
<div className="conteudo-principal">

        <MenuNormal/>
        <main className="fornecedores-box">
<<<<<<< HEAD
          <div className="painel-box">
=======
          <div className="conteudoss">

>>>>>>> 527e61e5313bcd32677546f09c04f80c9c7b1ed9
          <h2 class="titulo-fornecedores">Fornecedores:</h2>


          <div className="fornecedores-lista">
            <div className="fornecedor-card">
              <img
                src={chocolandiaLogo}
                alt="Chocolândia"
                className="logo-fornecedor"
                />
              <div className="grafico-placeholder">
                <ReactApexChart
                  options={state.options}
                  series={state.series}
                  type="bar"
                  width="100%"
                  height="100%"
                  />

              </div>
            </div>

            <div className="fornecedor-card">
              <img src={nescauLogo} alt="Nescau" className="logo-fornecedor" />
              <div className="grafico-placeholder">
                  <ReactApexChart
                  options={state.options}
                  series={state.series}
                  type="bar"
                  width="100%"
                  height="100%"
                  />
              </div>
            </div>

            <div className="fornecedor-card">
              <img
                src={duracellLogo}
                alt="Duracell"
                className="logo-fornecedor"
                />
              <div className="grafico-placeholder">
                <ReactApexChart
                  options={state.options}
                  series={state.series}
                  type="bar"
                  width="100%"
                  height="100%"
                  />
              </div>
            </div>
          </div>
<<<<<<< HEAD
          </div>
=======
                  </div>
>>>>>>> 527e61e5313bcd32677546f09c04f80c9c7b1ed9
        </main>
        </div>
      </div>
    );
  };

