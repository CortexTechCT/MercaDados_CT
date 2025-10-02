import "./lucrosgastos.css";
import ReactApexChart from "react-apexcharts";
import { MenuLateral } from "../../components/menulateral/MenuLateral";
import { MenuNormal } from "../../components/menunormal/menunormal.jsx";

export const LucroEGastos = () => {
    const graficoProdutos = {
        series: [
            {
                name: "PRODUCT A",
                data: [50, 60, 55, 70, 90, 85, 95, 100, 120, 110, 125, 140, 135, 150],
            },
            {
                name: "PRODUCT B",
                data: [150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215],
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
                    "01 Jan 2014", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan",
                    "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan",
                    "13 Jan", "14 Jan"
                ],
                labels: { rotate: -45 },
            },
            colors: ["#008FFB", "#00E396", "#FEB019"],
        },
    };

    const graficoAcoes = {
        series: [
            {
                name: "Stock Price",
                data: [160, 170, 200, 220, 180, 140, 120, 100, 90, 130, 150, 160, 170, 165, 175],
            },
        ],
        options: {
            chart: { type: "line", height: 250 },
            stroke: { curve: "smooth", width: 3 },
            xaxis: {
                categories: [
                    "01 Feb", "05 Feb", "10 Feb", "15 Feb", "20 Feb", "01 Mar",
                    "10 Mar", "20 Mar", "01 Apr", "10 Apr", "15 Apr", "20 Apr", 
                    "25 Apr", "01 May", "10 May"
                ],
            },
            colors: ["#008FFB"],
        },
    };

    return (
        <div className="container-geral-lucroegastos">
            <MenuLateral />
            <div className="conteudo-principal">
                <MenuNormal />
                <main className="lucroegastos-box">
                    <h2>Lucro e Gastos</h2>

                    <div className="grafico-container">
                        <div className="grafico-box">
                            <h4>Irregular Data in Time Series</h4>
                            <ReactApexChart
                                options={graficoProdutos.options}
                                series={graficoProdutos.series}
                                type="area"
                                height={300}
                            />
                        </div>

                        <div className="grafico-box">
                            <h4>Stock Price Movement</h4>
                            <ReactApexChart
                                options={graficoAcoes.options}
                                series={graficoAcoes.series}
                                type="line"
                                height={250}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};
