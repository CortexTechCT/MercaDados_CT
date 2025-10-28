import React, { useState } from "react";
import { MenuNormal } from "../../components/menunormal/menunormal";
import { Modal } from "../../components/modal/Modal";
import Doritos from "../../assets/Doritos.png";
import pix from "../../assets/pix.png";
import cartaoCredito from "../../assets/cartaoCredito.png";
import cartaoDebito from "../../assets/cartaoDebito.png";
import vr from "../../assets/vr.png";
import dinheiro from "../../assets/dinheiro.png";
import setaVoltar from "../../assets/setaVoltar.png";
import check from "../../assets/check.png";
import "./LeituraProdutos.css";

export const LeituraProdutos = () => {
  const [mostrarPagamento, setMostrarPagamento] = useState(false);
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);

  const handleContinuar = () => setMostrarPagamento(true);
  const handleConfirmar = () => {
    setMostrarPagamento(false);
    setMostrarConfirmacao(true);
  };

  return (
    <div className="leitura-container">
      <MenuNormal />

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
                  <td>Doritos 300g</td>
                  <td>1 un</td>
                  <td>R$ 8,99</td>
                  <td>R$ 8,99</td>
                  <td>R$ 8,99</td>
                </tr>
                <tr>
                  <td>Caixa de Energético Monster</td>
                  <td>12 un</td>
                  <td>R$ 9,49</td>
                  <td>R$ 113,99</td>
                  <td><b>R$ 113,99</b></td>
                </tr>
              </tbody>
            </table>

            <button className="botao_leitura" onClick={handleContinuar}>
              Continuar
            </button>
          </div>
        </div>
      </div>

      {/* MODAL - FORMAS DE PAGAMENTO */}
      {mostrarPagamento && (
        <Modal onClose={() => setMostrarPagamento(false)}>
          <div className="modal-pagamento">
            <img
              src={setaVoltar}
              alt="Voltar"
              className="seta-voltar"
              onClick={() => setMostrarPagamento(false)}
            />
            <h2 className="titulo-modal">Forma de Pagamento</h2>

            <div className="opcoes-pagamento">
              <img src={pix} alt="Pix" />
              <img src={cartaoCredito} alt="Cartão Crédito" />
              <img src={cartaoDebito} alt="Cartão Débito" />
              <img src={vr} alt="VR" />
              <img src={dinheiro} alt="Dinheiro" />
            </div>

            <button className="botao-confirmar" onClick={handleConfirmar}>
              Confirmar
            </button>
          </div>
        </Modal>
      )}

      {/* MODAL - CONFIRMAÇÃO */}
      {mostrarConfirmacao && (
        <Modal onClose={() => setMostrarConfirmacao(false)}>
          <div className="modal-confirmacao">
            <h2>Compra Confirmada!</h2>
            <img src={check} alt="Check" className="check-icon" />
            <p>Obrigado pela compra!</p>
            <button
              className="botao-voltar"
              onClick={() => setMostrarConfirmacao(false)}
            >
              Fechar
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default LeituraProdutos;
