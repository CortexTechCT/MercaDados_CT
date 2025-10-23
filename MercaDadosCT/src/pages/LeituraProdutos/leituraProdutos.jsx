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
import "./leituraProdutos.css";
import { Botao } from "../../components/botao/Botao";
import Doritos from "../../assets/Doritos.png";
import casa from "../../assets/casa.png";
import { MenuNormal } from "../../components/menunormal/menunormal";
import { Modal } from "../../components/modal/Modal";
import { useNavigate } from "react-router-dom";

export const LeituraProdutos = () => {
  const navigate = useNavigate();

  // 🔹 Quando clicar em "Continuar", vai para a tela Forma de Pagamento
  const handleContinuar = () => {
    navigate("/FormaDePagamento");
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

            {/* 🔘 Botão que leva para Forma de Pagamento */}
            <button className="botao_leitura" onClick={handleContinuar}>
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
>>>>>>> 5c80c6e61db46478ba58ceeca58aaba4d5471094
