import "./LeituraProdutos.css";
import { Botao } from "../../components/botao/Botao";
import Doritos from "../../assets/Doritos.png";
import Monster from "../../assets/Monster.png";
import casa from "../../assets/casa.png";
import perfil from "../../assets/perfil.png";

export const LeituraProdutos = () => {
  return (
    <div className="leitura-container">
      {/* Header */}
      <header className="header">
        <img src={casa} alt="Home" className="icon" />
        <div className="header-icons">  
          <img src={perfil} alt="Perfil" className="icon" />
        </div>
      </header>

      {/* Quadrado azul principal */}
      <div className="fundo-azul">
        <div className="conteudo">
          {/* Lado esquerdo - produtos */}
          <div className="produtos">
            <img src={Doritos} alt="Doritos" className="produto-img" />
            <img src={Monster} alt="Monster" className="produto-img" />
          </div>

          {/* Lado direito - tabela */}
          <div className="tabela">
            <h2 className="titulo">Registro Atual</h2>
            <h3 className="subtitulo">12x Caixa de Energético</h3>

            <table className="tabela-dados">
              <thead>
                <tr>
                  <th>Quantidade</th>
                  <th></th>
                  <th>Preço unitário</th>
                  <th></th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12x</td>
                  <td>x</td>
                  <td>R$9,49</td>
                  <td>=</td>
                  <td><b>R$113,99</b></td>
                </tr>
              </tbody>
            </table>

            <div className="itens-cupom">
              <h4>Itens do Cupom</h4>
              <div className="linha">
                <span className="item">Doritos 300g</span>
                <span>1 un</span>
                <span>R$ 8,99</span>
                <span><b>R$ 8,99</b></span>
              </div>
              <div className="linha">
                <span className="item">Caixa de Energético Monster</span>
                <span>12 un</span>
                <span>R$ 9,49</span>
                <span><b>R$ 113,99</b></span>
              </div>
            </div>

            <p className="atendido">Atendido por: xxxxx</p>

            <div className="resumo">
              <p>Desconto = R$0,00</p>
              <div className="total">R$ 122,87</div>
            </div>

            <Botao texto="continuar" />
          </div>
        </div>
      </div>
    </div>
  );
};
