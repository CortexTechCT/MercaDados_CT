import "./login.css";
import api from "../../services/Services.js";
import logo from "../../assets/ChatGPT Image 23_09_2025, 11_25_31 1.png";
import { jwtDecode } from "jwt-decode";
import { Botao } from "../../components/botao/Botao.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../pages/contexts/authContexts.jsx";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const realizarAutenticacao = async (e) => {
    e.preventDefault();

    if (!email.trim() || !senha.trim()) {
      alert("Preencha os campos vazios!");
      return;
    }

    try {
      setLoading(true);

      //  Envia o login para a API
      const resposta = await api.post("login", { email, senha });
      const token = resposta?.data?.token;

      if (!token) {
        alert("Credenciais incorretas!");
        setLoading(false);
        return;
      }

      //  Decodifica o token
      const decodificado = jwtDecode(token);
      console.log("Token decodificado:", decodificado);

      // Monta o objeto do usuário logado
      const usuarioLogado = {
        idUsuario: decodificado.IdUsuario,
        email: decodificado.email,
        tipoUsuario: decodificado.TituloTipoUsuario?.trim() || "Desconhecido",
      };

      //  Salva no contexto
      login(usuarioLogado, token);

      //  Redireciona com base no tipo de usuário
      switch (usuarioLogado.tipoUsuario) {
        case "Admin":
          navigate("/Home", { replace: true });
          break;
        case "Funcionario":
          navigate("/LeituraProdutos", { replace: true });
          break;
        default:
          navigate("/", { replace: true });
          break;
      }
    } catch (error) {
      console.error(" Erro no login:", error.response ? error.response.data : error);
      alert("Erro ao realizar login! Verifique suas credenciais ou tente novamente mais tarde.");
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
            <a href="/CadastroAdmin">criar cadastro</a>
          </div>

          <Botao nomeBotao={loading ? "Entrando..." : "Entrar"} />
        </form>
      </div>
    </div>
  );
};

export default Login;
