import "./feedbacksclientes.css";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import logo from '../../assets/ChatGPT Image 23_09_2025, 11_25_31 1.png';
import Bravo from '../../assets/Bravo.png';
import Feliz from '../../assets/Feliz.png';
import Medio from '../../assets/Medio.png';

export const FeedbacksClientes = () => {
  const [dashboard, setDashboard] = useState({ bom: 0, mediano: 0, ruim: 0 });

  // Mapeamento de emojis para feedback
  const feedbackMap = {
    Feliz: "bom",
    Medio: "mediano",
    Bravo: "ruim"
  };

  // Função para atualizar dashboard local
  const atualizarDashboard = (feedback) => {
    setDashboard(prev => ({
      ...prev,
      [feedback]: prev[feedback] + 1
    }));
  };

  // Envia feedback para API
  const handleFeedbackClick = async (emoji) => {
    const feedback = feedbackMap[emoji];

    try {
      const response = await fetch("https://sua-api.com/api/Feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ feedbackText: feedback })
      });

      if (!response.ok) throw new Error("Erro ao enviar feedback");

      Swal.fire({
        title: "Obrigado pelo feedback!",
        icon: "success",
        background: "#bfcaf5",
        color: "#000",
        confirmButtonColor: "#1b2d68",
      });

      // Atualiza dashboard local
      atualizarDashboard(feedback);

    } catch (error) {
      Swal.fire({
        title: "Erro!",
        text: error.message,
        icon: "error",
        background: "#bfcaf5",
        color: "#000",
        confirmButtonColor: "#1b2d68",
      });
    }
  };

  // Carrega feedbacks existentes da API ao abrir a página
  useEffect(() => {
    const carregarFeedbacks = async () => {
      try {
        const response = await fetch("https://sua-api.com/api/Feedback");
        const data = await response.json();

        const contagem = { bom: 0, mediano: 0, ruim: 0 };
        data.forEach(f => {
          if (f.feedbackText in contagem) {
            contagem[f.feedbackText]++;
          }
        });

        setDashboard(contagem);
      } catch (error) {
        console.error("Erro ao carregar feedbacks:", error);
      }
    };

    carregarFeedbacks();
  }, []);

  return (
    <div className="feedbacks-container">
      <div className="logo-feedbacks-geral"></div>
      <div className="feedbacks-box">
        <img className="Logo-feedbacks" src={logo} alt="Logo" />
        <h2 className="titulo-itens">Seus Itens</h2>

        <div className="itens-box">
          <div className="item">
            <span>Doritos 300g</span>
            <span>1 un x R$ 8,99</span>
            <span className="preco">R$ 8,99</span>
          </div>
          <div className="item">
            <span>Caixa de Energético monster</span>
            <span>12 un x R$ 9,49</span>
            <span className="preco">R$ 113,99</span>
          </div>
        </div>

        <div className="total-box">
          <span>R$ 122,87</span>
        </div>

        <div className="feedback-area">
          <h3>Deixe Seu Feedback!</h3>
          <div className="emojis">
            <button className="botao-feedback" onClick={() => handleFeedbackClick("Feliz")}>
              <img className="fedcaras" src={Feliz} alt="Feliz" />
            </button>
            <button className="botao-feedback" onClick={() => handleFeedbackClick("Medio")}>
              <img className="fedcaras" src={Medio} alt="Médio" />
            </button>
            <button className="botao-feedback" onClick={() => handleFeedbackClick("Bravo")}>
              <img className="fedcaras" src={Bravo} alt="Bravo" />
            </button>
          </div>
        </div>

        <div className="dashboard-feedback">
          <h3>Dashboard de Feedback</h3>
          <p>Bom: {dashboard.bom}</p>
          <p>Mediano: {dashboard.mediano}</p>
          <p>Ruim: {dashboard.ruim}</p>
        </div>
      </div>
    </div>
  );
};
