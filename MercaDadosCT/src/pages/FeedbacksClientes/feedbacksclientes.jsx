import "./feedbacksclientes.css";
import Swal from "sweetalert2";
import logo from '../../assets/ChatGPT Image 23_09_2025, 11_25_31 1.png'; 
import Bravo from '../../assets/Bravo.png';
import Feliz from '../../assets/Feliz.png';
import Medio from '../../assets/Medio.png';

export const FeedbacksClientes = () => {

  const handleFeedbackClick = () => {
    Swal.fire({
      title: "Realize seu pagamento",
      html: "<p>insira ou aproxime seu cartão<br>da máquina.</p>",
      background: "#bfcaf5",
    
      color: "#000",
      confirmButtonText: "OK",
      confirmButtonColor: "#1b2d68",
      showConfirmButton: false,
      width: "500px",
      padding: "2em",
      customClass: {
        popup: "popup-pagamento",
        title: "titulo-pagamento",
        htmlContainer: "texto-pagamento"
      },
      didOpen: (popup) => {
        popup.style.borderRadius = "20px";
      }
    });
  };

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
            <button className="botao-feedback" onClick={handleFeedbackClick}>
              <img className="fedcaras" src={Feliz} alt="Feliz" />
            </button>

            <button className="botao-feedback" onClick={handleFeedbackClick}>
              <img className="fedcaras" src={Medio} alt="Médio" />
            </button>

            <button className="botao-feedback" onClick={handleFeedbackClick}>
              <img className="fedcaras" src={Bravo} alt="Bravo" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
