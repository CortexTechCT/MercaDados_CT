import "./feedbacksclientes.css";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import logo from "../../assets/ChatGPT Image 23_09_2025, 11_25_31 1.png";
import Bravo from "../../assets/Bravo.png";
import Feliz from "../../assets/Feliz.png";
import Medio from "../../assets/Medio.png";
import api from "../../services/Services.js";
import { useSearchParams } from "react-router-dom";


export const FeedbacksClientes = () => {
  const [dashboard, setDashboard] = useState({ satisfeito: 0, neutro: 0, insatisfeito: 0 });
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [searchParams] = useSearchParams();

  const idFromUrl = searchParams.get("idFuncionario");

  const getFuncionarioIdFromToken = () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return null;

      const decoded = jwtDecode(token);
      console.log("Claims do token:", decoded);

      return (
        decoded.IdUsuario ||
        decoded.idUsuario ||
        decoded.Id ||
        decoded.sub ||
        decoded.jti || 
        decoded.Jti ||
        null
      );
    } catch (err) {
      console.warn("Erro ao decodificar token:", err);
      return null;
    }
  };

  const resolveFuncionarioId = () => {
    if (idFromUrl) return idFromUrl;
    const fromToken = getFuncionarioIdFromToken();
    if (fromToken) return fromToken;
    const stored1 = localStorage.getItem("idUsuario");
    if (stored1) return stored1;
    const stored2 = localStorage.getItem("idFuncionario");
    if (stored2) return stored2;
    return null;
  };

  const funcionarioID = resolveFuncionarioId();

  const feedbackMap = {
    Feliz: "satisfeito",
    Medio: "neutro",
    Bravo: "insatisfeito",
  };

  const atualizarDashboard = (feedback) => {
    setDashboard((prev) => ({
      ...prev,
      [feedback]: (prev[feedback] || 0) + 1,
    }));
  };

  const carregarFeedbacks = async () => {
    try {
      const response = await api.get("/Feedback");
      const data = response.data;

      const contagem = { satisfeito: 0, neutro: 0, insatisfeito: 0 };
      data.forEach((f) => {
        if (!f) return;
        // normaliza caixa baixa/alta
        const nota = (f.nota || f.Nota || "").toString().toLowerCase();
        if (contagem.hasOwnProperty(nota)) contagem[nota]++;
      });

      setDashboard(contagem);
    } catch (error) {
      console.error("Erro ao carregar feedbacks:", error);
    }
  };

  useEffect(() => {
    carregarFeedbacks();
  }, []);

  const confirmarFeedback = async () => {
    if (!selectedEmoji) {
      Swal.fire({
        title: "Selecione um emoji primeiro!",
        icon: "warning",
        background: "#bfcaf5",
        color: "#000",
        confirmButtonColor: "#1b2d68",
      });
      return;
    }

    const nota = feedbackMap[selectedEmoji];
    const dataFeedback = new Date().toISOString();

    const resolvedFuncionarioId = resolveFuncionarioId();

    if (!resolvedFuncionarioId) {
      Swal.fire({
        title: "Erro: funcionário não identificado",
        text: "ID do funcionário não encontrado. Faça login novamente.",
        icon: "error",
      });
      console.error("ID do funcionário não encontrado. URL, token e localStorage checados.");
      return;
    }

    const payload = {
      Nota: nota,
      FuncionarioID: resolvedFuncionarioId,
      DataFeedback: dataFeedback,
    };

    console.log("Enviando payload /api/Feedback ->", payload);

    try {

      const response = await api.post("/Feedback", payload /*, { headers }*/);

      console.log("Resposta do POST /Feedback:", response);
      if (response.status === 201 || response.status === 200) {
        Swal.fire({
          title: "Obrigado pelo feedback!",
          icon: "success",
          background: "#bfcaf5",
          color: "#000",
          confirmButtonColor: "#1b2d68",
        });

        setSelectedEmoji(null);
        atualizarDashboard(nota);
        await carregarFeedbacks(); 
      } else {
        throw new Error("Resposta inesperada: " + response.status);
      }
    } catch (error) {
      console.error("Erro ao enviar feedback:", error);
      const backendMessage = error?.response?.data || error?.message || "Erro desconhecido";
      Swal.fire({
        title: "Erro ao enviar feedback",
        text: String(backendMessage),
        icon: "error",
      });
    }
  };

  return (
    <div className="feedbacks-container">
      <div className="logo-feedbacks-geral"></div>
      <div className="feedbacks-box">
        <img className="Logo-feedbacks" src={logo} alt="Logo" />

        <div className="feedback-area">
          <h3>Deixe Seu Feedback!</h3>
          <div className="emojis">
            <button
              className={`botao-feedback ${selectedEmoji === "Feliz" ? "selecionado" : ""}`}
              onClick={() => setSelectedEmoji("Feliz")}
            >
              <img className="fedcaras" src={Feliz} alt="Feliz" />
            </button>
            <button
              className={`botao-feedback ${selectedEmoji === "Medio" ? "selecionado" : ""}`}
              onClick={() => setSelectedEmoji("Medio")}
            >
              <img className="fedcaras" src={Medio} alt="Médio" />
            </button>
            <button
              className={`botao-feedback ${selectedEmoji === "Bravo" ? "selecionado" : ""}`}
              onClick={() => setSelectedEmoji("Bravo")}
            >
              <img className="fedcaras" src={Bravo} alt="Bravo" />
            </button>
          </div>

          <button className="botao-confirmar" onClick={confirmarFeedback}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

