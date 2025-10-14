import "./FormaDePagamento.css"
import { Botao } from "../../components/botao/Botao"

// Importando as imagens dos métodos de pagamento
import Pix from "../../assets/pix.png"
import Cartao from "../../assets/cartao.png"
import Cartao2 from "../../assets/cartao2.png"
import VR from "../../assets/vr.png"
import Dinheiro from "../../assets/dinheiro.png"
import Header from "../../components/header/Header"

export const FormaDePagamento = () => {
  return (
    <div className="pagamento-container">
      
      {/* Header superior */}
      <Header />

      {/* Conteúdo principal */}
      <div className="pagamento-content">
        <div className="pagamento-card">
          
          {/* Botão de voltar */}
          <button className="voltar">
        
          </button>

          <h1>Forma de Pagamento!</h1>

          {/* Opções de pagamento */}
          <div className="opcoes-pagamento">
            <div className="opcao">
              <img src={Pix} alt="Pix" />
            </div>
            <div className="opcao">
              <img src={Cartao} alt="Cartão" />
            </div>
            <div className="opcao">
              <img src={Cartao2} alt="Credito" />
            </div>
            <div className="opcao">
              <img src={VR} alt="Vale Refeição" />
            </div>
            <div className="opcao">
              <img src={Dinheiro} alt="Dinheiro" />
            </div>
          </div>

          {/* Botão confirmar */}
          <Botao className="btn-confirmar">Confirmar</Botao>

        </div>
      </div>
    </div>
  )
}
