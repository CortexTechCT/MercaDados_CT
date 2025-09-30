import { useState } from "react";
import Logo from "../../assets/img/logo.svg";
import "./Login.css";
import Botao from "../../components/botao/Botao";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Senha:", senha);
  };

  return (
    <div className="main_login">
      <div className="section_login">
        <img src={Logo} alt="Logo MercaDados" />
        <form className="form_login" onSubmit={handleLogin}>
          <h1>MercaDados</h1>
          <p>Sistema de Gestão de Estoque</p>

          <div className="campos_login">
            <div className="campo_input">
              <label>Email</label>
              <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="campo_input">
              <label>Senha</label>
              <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
          </div>

          <Botao type="submit">Entrar</Botao>
        </form>
      </div>
    </div>
  );
};

export default Login;
