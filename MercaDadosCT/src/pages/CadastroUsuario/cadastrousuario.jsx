import "./cadastrousuario.css";
import { MenuLateral } from "../../components/menulateral/MenuLateral";
import iconeSino from '../../assets/Alarm.png';
import iconeUsuario from '../../assets/perfil.png';
import {Botao} from '../../components/botao/Botao.jsx'
import { MenuNormal } from "../../components/menunormal/menunormal.jsx";

export const CadastroFuncionario = () => {
  return (
    <div className="container-geral">
      <MenuLateral />

      <div className="conteudo-principal">
      <MenuNormal/> 
       

        <main className="formulario-box">
          <h2>Cadastro de Funcionario:</h2>
          <form className="formulario-grid">
            <input type="date" placeholder="Data de nascimento" />
            <input type="text" placeholder="Gênero" />
            <input type="text" placeholder="Nome completo" />
            <input type="text" placeholder="CPF ou CNPJ" />
            <input type="email" placeholder="E-mail" />
            <input type="text" placeholder="Rua, número, bairro" />
            <input type="password" placeholder="Senha" />
            <input type="text" placeholder="Cidade, estado, CEP" />
            <input type="text" placeholder="Número de telefone" />
            <input type="text" placeholder="Complemento" />
          </form>
               <Botao nomeBotao="Cadastrar" />
        </main>
      </div>
    </div>
  );
};
