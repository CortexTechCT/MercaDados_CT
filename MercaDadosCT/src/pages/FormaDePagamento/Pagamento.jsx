import "./Pagamento.css"
import { Botao } from "../../components/botao/Botao"
import Pix from "../../assets/pix.png"
import Cartao from "../../assets/cartao.png"
import Credito from "../../assets/cartao2.png"
import VR from "../../assets/VR.png"
import Dinheiro from "../../assets/dinheiro.png"
import { FaBell, FaUserCircle, FaArrowLeft } from "react-icons/fa"

export const Pagamento = () => {
  return (
    <div className="pagamento-container">
      {/* Header superior */}
      <header className="header">
        <div className="header-left">
          <img src="/src/assets/casa.png" alt="logo" className="logo" />
        </div>

        <div className="header-right">
          <FaBell className="icone" />
          <FaUserCircle className="icone" />
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="pagamento-content">
        <div className="pagamento-card">
          <button className="voltar">
            <FaArrowLeft />
          </button>

          <h1 className="titulo">Forma de Pagamento!</h1>

          {/* Opções de pagamento */}
          <div className="opcoes-pagamento">
            <div className="opcao"><img src={Pix} alt="Pix" /></div>
            <div className="opcao"><img src={Cartao} alt="Cartão" /></div>
            <div className="opcao"><img src={Credito} alt="Crédito" /></div>
            <div className="opcao"><img src={VR} alt="Vale Refeição" /></div>
            <div className="opcao"><img src={Dinheiro} alt="Dinheiro" /></div>
          </div>

          {/* Botão confirmar */}
          <button className="botao-confirmar">confirmar</button>
        </div>
      </main>
    </div>
  )
}
