import "./LeituraProdutos.css";
import { Botao } from "../../components/botao/Botao";
import Doritos from "../../assets/Doritos.png";
import Monster from "../../assets/Monster.png";
import casa from "../../assets/casa.png";

export const LeituraProdutos = () => {
  return (
    <div className="registro-container">

      {/* Header */}
      <header className="header">
        <div className="header-left">
          <img src={casa} alt="Logo MercaDados" className="casa" />
        </div>


        <div className="header-right">


         </div>
      </header>     


      {/* Conteúdo principal */}
      <div className="registro-content">
        {/* Imagens dos produtos */}
        <div className="produtos">
          <img src={Doritos} alt="Doritos" className="img-produto" />
          <img src={Monster} alt="Monster" className="img-produto" />
        </div>

        {/* Card do registro */}
        <div className="registro-card">
          <h2>Registro Atual</h2>
          <h3>12x Caixa de Energético</h3>

          <table className="tabela-principal">
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
                <td>X</td>
                <td>R$ 9,49</td>
                <td>=</td>
                <td><b>R$ 113,99</b></td>
              </tr>
            </tbody>
          </table>

          <h4>Itens do Cupom</h4>

          <table className="tabela-itens">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Qtd:</th>
                <th>Preço Unitário:</th>
                <th>Total:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Doritos 300g</td>
                <td>1 un</td>
                <td>R$ 8,99</td>
                <td>R$ 8,99</td>
              </tr>
              <tr>
                <td>Caixa de Energético Monster</td>
                <td>12 un</td>
                <td>R$ 9,49</td>
                <td>R$ 113,99</td>
              </tr>
            </tbody>
          </table>

          <p className="atendido">Atendido por: xxxxx</p>

          <div className="total-final">
            <p>Desconto = R$0,00</p>
            <div className="valor-final">R$ 122,87</div>
          </div>

          <Botao nomeBotao="continuar" />
        </div>
      </div>
    </div>
  );
};
