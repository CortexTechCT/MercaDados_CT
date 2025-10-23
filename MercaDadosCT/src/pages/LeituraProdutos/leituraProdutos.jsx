<<<<<<< HEAD
import React, { useState } from "react";
=======
<<<<<<< HEAD
import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { Modal } from "../../components/modal/Modal";
  import Doritos from "../../assets/Doritos.png";
  import "./LeituraProdutos.css";

  export const LeituraProdutos = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleContinuar = () => {
      navigate("/pagamento"); // 👈 rota para onde o modal vai levar
      setIsModalOpen(false);
    };

    return (
      <div className="leitura-container">
        <div className="produto-info">
          <img src={Doritos} alt="Doritos" />
          <button onClick={() => setIsModalOpen(true)}>Abrir Modal</button>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="conteudo-modal">
            <h2>Registro Atual</h2>
            <p>12x Caixa de Energético</p>

            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Qtd</th>
                  <th>Preço Unitário</th>
=======
import React from "react";
>>>>>>> 03dbb2b5135411fdf4ff46c42e493676dce0f3a6
import "./leituraProdutos.css";
import Doritos from "../../assets/Doritos.png";
import pix from "../../assets/pix.png";
import cartaoCredito from "../../assets/cartaoCredito.png";
import cartaoDebito from "../../assets/cartaoDebito.png";
import vr from "../../assets/vr.png";
import dinheiro from "../../assets/dinheiro.png";
import setaVoltar from "../../assets/setaVoltar.png";
import check from "../../assets/check.png";
import { MenuNormal } from "../../components/menunormal/menunormal";
import { Modal } from "../../components/modal/Modal";

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

<<<<<<< HEAD
=======
      {/* Quadrado azul principal */}
>>>>>>> 03dbb2b5135411fdf4ff46c42e493676dce0f3a6
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
>>>>>>> 5c80c6e61db46478ba58ceeca58aaba4d5471094
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
<<<<<<< HEAD
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
=======
                  <td>12x</td>
                  <td>x</td>
                  <td>R$ 9,49</td>
                  <td>=</td>
                  <td><b>R$ 113,99</b></td>
>>>>>>> 5c80c6e61db46478ba58ceeca58aaba4d5471094
                </tr>
              </tbody>
            </table>

<<<<<<< HEAD
            <p>Desconto = R$0,00</p>

            <button className="btn-continuar" onClick={handleContinuar}>
              R$ 122,87
            </button>
          </div>
        </Modal>
      </div>
    );
  };

export default LeituraProdutos;
=======
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
                  <tr className="linha-energetico">
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
>>>>>>> 5c80c6e61db46478ba58ceeca58aaba4d5471094
