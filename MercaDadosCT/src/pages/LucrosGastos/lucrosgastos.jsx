import "./lucrosgastos.css";
import ReactApexChart from "react-apexcharts";
import { MenuLateral } from "../../components/menulateral/MenuLateral.jsx";
import { MenuNormal } from "../../components/menunormal/menunormal.jsx";
import { useState, useEffect } from "react";
import api from "../../services/Services.js";

export const LucrosGastos = () => {
  const [lucros, setLucros] = useState([]);
  const [gastos, setGastos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const carregarDados = async () => {
    try {
      const vendasResp = await api.get("/Venda/Listar");
      const vendas = vendasResp.data;

      const nomes = vendas.map((v, i) => `Venda ${i + 1}`);
      const valores = vendas.map(v => v.valor);

      setCategorias(nomes);
      setLucros(valores);

      try {
        const gastosResp = await api.get("/Gasto/Listar");
        const gastosData = gastosResp.data;
        const nomesGastos = gastosData.map((g, i) => `Gasto ${i + 1}`);
        const valoresGastos = gastosData.map(g => g.valor);
        setGastos(valoresGastos);
      } catch (err) {
        console.warn("Nenhum gasto encontrado ou rota inexistente");
      }

    } catch (error) {
      console.error("Erro ao carregar dados de lucro/gasto:", error);
    }
  };

  useEffect(() => {
    carregarDados();
    const intervalo = setInterval(carregarDados, 10000); // Atualiza a cada 10s
    return () => clearInterval(intervalo);
  }, []);

  const graficoLucros = {
    series: [{ name: "Lucros", data: lucros }],
    options: {
      chart: { type: "area", height: 300 },
      xaxis: { categories: categorias },
      colors: ["#00E396"],
      stroke: { curve: "smooth" },
      dataLabels: { enabled: true },
      yaxis: { title: { text: "Valor (R$)" } },
    },
  };

  const graficoGastos = {
    series: [{ name: "Gastos", data: gastos }],
    options: {
      chart: { type: "line", height: 250 },
      xaxis: { categories: categorias },
      colors: ["#FF4560"],
      stroke: { curve: "smooth", width: 3 },
      dataLabels: { enabled: true },
      yaxis: { title: { text: "Valor (R$)" } },
    },
  };

  return (
    <div className="container-geral-lucroegastos">
      <MenuLateral />
      <div className="conteudo-principal">
        <MenuNormal />
        <main className="lucroegastos-box">
          <h2>Lucros e Gastos</h2>

          <div className="grafico-container">
            <div className="grafico-box">
              <h4>Lucros (por venda)</h4>
              <ReactApexChart
                options={graficoLucros.options}
                series={graficoLucros.series}
                type="area"
                height={300}
              />
            </div>

            <div className="grafico-box">
              <h4>Gastos</h4>
              <ReactApexChart
                options={graficoGastos.options}
                series={graficoGastos.series}
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
