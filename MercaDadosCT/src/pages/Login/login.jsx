import "./login.css";
import api from "../../services/Services.js";
import logo from "../../assets/ChatGPT Image 23_09_2025, 11_25_31 1.png";
import { jwtDecode } from "jwt-decode";
import { Botao } from "../../components/botao/Botao.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../pages/contexts/authContexts.jsx";
import Swal from "sweetalert2";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const realizarAutenticacao = async (e) => {
    e.preventDefault();

    if (!email.trim() || !senha.trim()) {
      Swal.fire("Atenção", "Preencha todos os campos!", "warning");
      return;
    }

    try {
      setLoading(true);
      const resposta = await api.post("login", { email, senha });
      const token = resposta?.data?.token;

      if (!token) {
        Swal.fire("Erro", "Credenciais incorretas!", "error");
        setLoading(false);
        return;
      }

      const decodificado = jwtDecode(token);
      console.log("TOKEN DECODIFICADO:", decodificado);

      const tipoUsuario = decodificado.Tipo?.toLowerCase();

      const usuarioLogado = {
        funcionarioId: decodificado.FuncionarioID || null,
        usuarioId: decodificado.UsuarioID || null,
        email: decodificado.email,
        tipoUsuario: tipoUsuario || "desconhecido",
      };

      login(usuarioLogado, token);

      if (tipoUsuario === "funcionario") {
        Swal.fire({
          title: `Olá, ${usuarioLogado.email}!`,
          text: "Para qual tela você deseja ir?",
          icon: "question",
          showDenyButton: true,
          confirmButtonText: "Caixa",
          denyButtonText: "Feedback",
          confirmButtonColor: "#1b2d68",
          denyButtonColor: "#bfcaf5",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/LeituraProdutos", { replace: true });
          } else if (result.isDenied) {
            navigate(
              `/FeedbacksClientes?idFuncionario=${usuarioLogado.funcionarioId}`,
              { replace: true }
            );
          }
        });
      } else if (tipoUsuario === "admin") {
        navigate("/Home", { replace: true });
      } else {
        Swal.fire(
          "Atenção",
          "Tipo de usuário não reconhecido. Verifique seu cadastro.",
          "warning"
        );
      }
    } catch (error) {
      console.error("Erro no login:", error.response ? error.response.data : error);
      Swal.fire("Erro", "Não foi possível realizar o login!", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <img className="Logo" src={logo} alt="Logo do sistema" />
        </div>

        <form onSubmit={realizarAutenticacao}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />

          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            disabled={loading}
          />

          <div className="forgot-password">
            <a href="/CadastroAdmin">Cadastrar um usuario</a>
          </div>

          <Botao nomeBotao={loading ? "Entrando..." : "Entrar"} />
        </form>
      </div>
    </div>
  );
};

export default Login;
