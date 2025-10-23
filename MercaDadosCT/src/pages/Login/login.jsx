import "./login.css";
import api from "../../services/Services.js";
import logo from "../../assets/ChatGPT Image 23_09_2025, 11_25_31 1.png";
import { jwtDecode } from "jwt-decode";
import { Botao } from "../../components/botao/Botao.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../pages/contexts/authContexts.jsx";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const { usuario, login } = useAuth();
  const navigate = useNavigate();

  const realizarAutenticacao = async (e) => {
    e.preventDefault();

    if (!email.trim() || !senha.trim()) {
      alert("Preencha os campos vazios!");
      return;
    }

    try {
      setLoading(true);

      const resposta = await api.post("login", { email, senha });
      const token = resposta?.data?.token;

      if (!token) {
        alert("Credenciais incorretas!");
        setLoading(false);
        return;
      }

      const decodificado = jwtDecode(token);
      console.log("Token decodificado:", decodificado);

      const usuarioLogado = {
        idUsuario: decodificado.jti,
        email: decodificado.email,
        tipoUsuario: decodificado.TituloTipoUsuario?.trim() || "Desconhecido",
      };

      login(usuarioLogado, token);
      setLoading(false);
    } catch (error) {
      console.error(error.response ? error.response.data : error);
      alert("Erro ao realizar login!");
      setLoading(false);
    }
  };

  // Redireciona após login bem-sucedido
  useEffect(() => {
    if (!usuario) return;

    if (usuario.tipoUsuario === "Admin") navigate("/Home", { replace: true });
    else if (usuario.tipoUsuario === "Funcionario") navigate("/LeituraProdutos", { replace: true });
    else navigate("/", { replace: true });
  }, [usuario, navigate]);

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <img className="Logo" src={logo} alt="Logo" />
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
            <a href="#">Esqueceu a senha?</a>
          </div>

          <Botao nomeBotao={loading ? "Entrando..." : "Entrar"} />
        </form>
      </div>
    </div>
  );
};

export default Login;
