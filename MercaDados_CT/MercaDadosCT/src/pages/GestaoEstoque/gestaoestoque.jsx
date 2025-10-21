import "./gestaoestoque.css";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { MenuLateral } from "../../components/menulateral/MenuLateral";
import { MenuNormal } from "../../components/menunormal/menunormal.jsx";
import friosIcon from "../../assets/Frios.png";
import bebidasIcon from "../../assets/bebidas.png";
import hortifruitIcon from "../../assets/Hortifruit.png";
import merceariaIcon from "../../assets/Mercearia.png";
import padariaIcon from "../../assets/Padaria.png";
import prolimIcon from "../../assets/Prolim.png";
import nescau from "../../assets/Design sem nome 3.png";



export const GestaoEstoque = () => {
    const [state, setState] = useState({
        series: [
            {
                name: "Movimentação de Estoque",
                data: [
                    [new Date("2025-01-01").getTime(), 12000000],
                    [new Date("2025-02-01").getTime(), 15000000],
                    [new Date("2025-03-01").getTime(), 11000000],
                    [new Date("2025-04-01").getTime(), 13000000],
                    [new Date("2025-05-01").getTime(), 17000000],
                    [new Date("2025-06-01").getTime(), 14000000],
                ],
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
            dataLabels: {
                enabled: false,
            },
            markers: {
                size: 0,
            },
            title: {
                text: "Movimentação de Estoque",
                align: "left",
            },
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
                    formatter: function (val) {
                        return (val / 1000000).toFixed(0) + "M";
                    },
                },
                title: {
                    text: "Quantidade",
                },
            },
            xaxis: {
                type: "datetime",
            },
            tooltip: {
                shared: false,
                y: {
                    formatter: function (val) {
                        return (val / 1000000).toFixed(2) + "M";
                    },
                },
            },
        },
    });

    return (
        <div className="container-geral-gestaoestoque">
            <MenuLateral />
            <div className="conteudo-principal">
                <MenuNormal />
                <main className="gestaoestoque-box">
                    <h2>Gestão de Estoque</h2>

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

                    <div className="categorias-box">
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
                    <div className="listagem-produtos">
                        <h4 className="produtos-h4">Produtos</h4>

                        <div className="produto-card">
                            <img className ="produto-img" src={nescau} alt="Padaria" />
                            <div className="produto-info">
                                <p><strong>Descrição:</strong></p>
                                <p>Produto: Nescau</p>
                                <p>Número do produto: 99746487393</p>
                                <p>Peso: 400g</p>
                                <p>Valor: R$ 13,00</p>
                                <p>Validade: 14/08/26</p>
                                <p>Setor: Mercearia</p>
                            </div>
                        </div>

                        <div className="produto-card">
                            <img className ="produto-img"src={nescau} alt="Padaria" />
                           
                            <div className="produto-info">
                                <p><strong>Descrição:</strong></p>
                                <p>Produto: Nescau</p>
                                <p>Número do produto: 99746487393</p>
                                <p>Peso: 400g</p>
                                <p>Valor: R$ 13,00</p>
                                <p>Validade: 14/08/26</p>
                                <p>Setor: Mercearia</p>
                            </div>
                        </div>
                    </div>


                </main>
            </div>
        </div>
    );
};
