import React, { useState } from "react";
import "./LeituraProdutos.css";
import { Botao } from "../../components/botao/Botao";
import Doritos from "../../assets/Doritos.png";
import casa from "../../assets/casa.png";
import { MenuNormal } from "../../components/menunormal/menunormal";
import { Modal } from "../../components/modal/Modal";

export const LeituraProdutos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="leitura-container">
      <MenuNormal />
=======
      {/* Header */}
      <Header />
      {/* Fundo azul */}
      <header className="header">
        <img src={casa} alt="Home" className="icon" />
        <div className="header-icons">  
          <img src={perfil} alt="Perfil" className="icon" />
        </div>

        <div className="header-right">
         </div>
      </header>     

      {/* Quadrado azul principal */}
      <div className="fundo-azul">
        <div className="conteudo">
          <div className="produtos">
            <img src={Doritos} alt="Doritos" className="produto-img" />
          </div>

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
            </div>

            <p className="atendido">Atendido por: xxxxx</p>

            <div className="resumo">
              <p>Desconto = R$0,00</p>
              <div className="total">R$ 122,87</div>
            </div>

            {/* Botão que abre o modal */}
            <button
              className="botao_leitura"
              onClick={() => setIsModalOpen(true)}
            >
              Continuar
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Confirmação</h2>
        <p>Deseja ir para forma de Pagamento?</p>
        <button onClick={() => setIsModalOpen(false)}>Fechar</button>
      </Modal>
    </div>
  );
};
