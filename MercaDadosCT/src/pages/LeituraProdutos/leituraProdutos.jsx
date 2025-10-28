import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/modal/Modal";
import Doritos from "../../assets/Doritos.png";
import "./LeituraProdutos.css";

export const LeituraProdutos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleContinuar = () => {
    navigate("/FormaDePagamento");
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
                <th>Total</th>
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
