import "./login.css";
import logo from '../../assets/ChatGPT Image 23_09_2025, 11_25_31 1.png'; 

export const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
      
         <img className ="Logo"src={logo} alt="" />
         
        </div>

        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Digite seu email" />

          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" name="senha" placeholder="Digite sua senha" />

          <div className="forgot-password">
            <a href="#">Esqueceu a senha?</a>
          </div>

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};
