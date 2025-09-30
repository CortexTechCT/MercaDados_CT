import Logo from "../../assets/img/logo.svg";
import "./Login.css";
import Botao from "../../components/botao/Botao";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const senha = e.target.senha.value;
    console.log("Tentando logar com:", email, senha);

    // Aqui você chama a API ou faz a navegação
  };

  return (
    
    <main className="main_login">
      <div className="banner"></div>
      <section className="section_login">
        <img src={Logo} alt="Logo da filmoteca" />
        <form onSubmit={handleLogin} className="form_login">
          <h1>Login</h1>
          <div className="campos_login">
            <div className="campo_input">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Digite seu e-mail" />
            </div>
            <div className="campo_input">
              <label htmlFor="senha">Senha:</label>
              <input type="password" id="senha" name="senha" placeholder="Digite sua senha" />
            </div>
          </div>
          <Botao nomeDoBotao="Entrar" />
        </form>
      </section>
    </main>
  )
 
};

export default Login;
