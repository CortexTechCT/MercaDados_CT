import React, { useState } from "react";
import "./LeituraProdutos.css";
import { Botao } from "../../components/botao/Botao";
import Doritos from "../../assets/Doritos.png";
import casa from "../../assets/casa.png";
import { MenuNormal } from "../../components/menunormal/menunormal";
import { Modal } from "../../components/modal/Modal";

export const LeituraProdutos = () => {
  const [modalPagamento, setModalPagamento] = useState(false);
  const [modalConfirmar, setModalConfirmar] = useState(false);
  const [modalFila, setModalFila] = useState(false);

  return (
    <div className="leitura-container">
      <MenuNormal />



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
                  <td>R$ 9,49</td>
                  <td>=</td>
                  <td><b>R$ 113,99</b></td>
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
              <p>Desconto = R$ 0,00</p>
              <div className="total">R$ 122,87</div>
            </div>

            {/* Botão que abre o primeiro modal */}
            <button className="botao_leitura" onClick={() => setModalPagamento(true)}>
              Continuar
            </button>
          </div>
        </div>
      </div>

      {/* Modal 1: Ir para forma de pagamento */}
      <Modal isOpen={modalPagamento} onClose={() => setModalPagamento(false)}>
        <h2>Forma de Pagamento</h2>
        <p>Deseja prosseguir para o pagamento?</p>
        <button
          onClick={() => {
            setModalPagamento(false);
            setModalConfirmar(true);
          }}
        >
          Continuar
        </button>
      </Modal>

      {/* Modal 2: Confirmar pagamento */}
      <Modal isOpen={modalConfirmar} onClose={() => setModalConfirmar(false)}>
        <h2>Confirmar Pagamento</h2>
        <p>Tem certeza que deseja confirmar o pagamento?</p>
        <button
          onClick={() => {
            setModalConfirmar(false);
            setModalFila(true);
          }}
        >
          Confirmar
        </button>
      </Modal>

      {/* Modal 3: Fila de espera */}
      <Modal isOpen={modalFila} onClose={() => setModalFila(false)}>
        <h2>Fila de Espera</h2>
        <p>Confirmando seu pagamento. Aguarde...</p>
        <button onClick={() => setModalFila(false)}>Fechar</button>
      </Modal>
    </div>
  );
};
