import "./home.css";
import ReactApexChart from "react-apexcharts";
import { MenuLateral } from "../../components/menulateral/MenuLateral";
import { MenuNormal } from "../../components/menunormal/menunormal";

export const Home = () => {
    const graficoPizza = {
        series: [40, 30, 10, 7, 13],
        options: {
            chart: { type: 'pie' },
            labels: ['Categoria A', 'Categoria B', 'Categoria C', 'Categoria D', 'Categoria E'],
            colors: ['#008FFB', '#00E396', '#FEB019', '#A3A3A3', '#7BDCB5'],
            legend: {
                position: 'bottom'
            }
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
                    "01 Jan 2014", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan",
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
                    <h2>Dashboard</h2>

                    <div className="cards-dashboard">
                        <div className="card-info">
                            <div className="icon pessoas" />
                            <p>Administração</p>
                        </div>
                        <div className="card-info">
                            <div className="icon alerta" />
                            <p>Alertas/Situações Críticas</p>
                            <strong>3</strong>
                        </div>
                        <div className="card-info">
                            <div className="icon caminhão" />
                            <p>Fornecedores Ativos</p>
                            <strong>32</strong>
                        </div>
                        <div className="card-info">
                            <p>Vendas do Dia</p>
                            <strong>R$ 12.350</strong>
                        </div>
                    </div>

                    <div className="graficos-home">
                        <div className="grafico-box">
                            <ReactApexChart
                                options={graficoPizza.options}
                                series={graficoPizza.series}
                                type="pie"
                                height={300}
                            />
                        </div>

                        <div className="grafico-box">
                            <h4>Irregular Data in Time Series</h4>
                            <ReactApexChart
                                options={graficoProdutos.options}
                                series={graficoProdutos.series}
                                type="area"
                                height={300}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};
