<<<<<<< HEAD
import "./admfuncionario.css";
import { useState } from "react";
=======
import "./AdmFuncionario.css";
import { useState, useEffect } from "react"; // 👈 importa o useEffect
>>>>>>> 0012f210671cdd031baf72f565fbec06813aca24
import ReactApexChart from "react-apexcharts";

import { MenuLateral } from "../../components/menulateral/MenuLateral.jsx";
import { MenuNormal } from "../../components/menunormal/menunormal.jsx";

import vini from "../../assets/viniciou.jpg";
import yasmin from "../../assets/IMG_3617 (1).jpeg";
import matheus from "../../assets/IMG_8991 (1).JPG";
import higor from "../../assets/IMG_8977 (1).JPG";
import herik from "../../assets/image (2).png";
import isaac from "../../assets/171977797.png";

export const AdmFuncionario = () => {
    const [funcAberto, setFuncAberto] = useState(null);


    

    const funcionarios = [
        { nome: "Vini", foto: vini },
        { nome: "Yasmin", foto: yasmin },
        { nome: "Matheus", foto: matheus },
        { nome: "Higor", foto: higor },
        { nome: "Herik", foto: herik },
        { nome: "Isaac", foto: isaac },
    ];

    const toggleFuncionario = (index) => {
        setFuncAberto(funcAberto === index ? null : index);
    };

    const pizzaChartOptions = {
        chart: {
            width: 380,
            type: "pie",
        },
        labels: ["Satisfeito", "Neutro", "Insatisfeito"],
        colors: ["#337DFF", "#FFC043", "#FF5A5F"],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 250,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    };

    const pizzaChartSeries = [44, 30, 26];

    const graficoBarras = {
        series: [
            {
                name: "Inflation",
                data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
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
                style: {
                    fontSize: "12px",
                    colors: ["#304758"],
                },
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
                        {funcionarios.map((f, index) => (
                            <div key={index} className="item-funcionario-wrapper">
                                <div className="item-funcionario">
                                    <div className="info-funcionario">
                                        <img src={f.foto} alt={f.nome} className="foto-funcionario" />
                                        <span>{f.nome}</span>
                                    </div>
                                    <span
                                        className={`seta ${funcAberto === index ? "aberto" : ""}`}
                                        onClick={() => toggleFuncionario(index)}
                                    >
                                        {funcAberto === index ? "˄" : "˅"}
                                    </span>
                                </div>

                                <div
                                    className={`detalhes-funcionario-transicao ${funcAberto === index ? "aberto" : ""
                                        }`}
                                >
                                    {funcAberto === index && (
                                        <div className="detalhes-funcionario">
                                            <div className="header-funcionario-expandido">
                                                <div>
                                                    <strong>{f.nome}</strong>
                                                    <span className="funcao">Função: Caixa de Vendas</span>
                                                </div>
                                            </div>

                                            <div className="graficos-funcionario">
                                                <div className="grafico-barra-placeholder">
                                                    <ReactApexChart
                                                        options={graficoBarras.options}
                                                        series={graficoBarras.series}
                                                        type="bar"
                                                        height={250}
                                                    />
                                                </div>
                                                <div className="grafico-pizza-placeholder">
                                                    <ReactApexChart
                                                        options={pizzaChartOptions}
                                                        series={pizzaChartSeries}
                                                        type="pie"
                                                        width={320}
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
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};
