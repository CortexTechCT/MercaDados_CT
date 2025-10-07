import { MenuLateral } from "../../components/menulateral/MenuLateral";
import "./fornecedores.css";
import chocolandiaLogo from "../../assets/chocolandia.png";
import nescauLogo from "../../assets/nescau.png";
import duracellLogo from "../../assets/duracell.png";

export const Fornecedores = () => {
  return (
    <div className="container-geral">
      <MenuLateral />

      <main className="fornecedores-box">
        <h2 class="titulo-fornecedores">Fornecedores:</h2>


        <div className="fornecedores-lista">
          <div className="fornecedor-card">
            <img
              src={chocolandiaLogo}
              alt="Chocolândia"
              className="logo-fornecedor"
            />
            <div className="grafico-placeholder">
              Gráfico aqui
            </div>
          </div>

          <div className="fornecedor-card">
            <img src={nescauLogo} alt="Nescau" className="logo-fornecedor" />
            <div className="grafico-placeholder">
              Gráfico aqui
            </div>
          </div>

          <div className="fornecedor-card">
            <img
              src={duracellLogo}
              alt="Duracell"
              className="logo-fornecedor"
            />
            <div className="grafico-placeholder">
              Gráfico aqui
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
