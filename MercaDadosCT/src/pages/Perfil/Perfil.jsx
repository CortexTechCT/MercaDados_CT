import "./Perfil.css";
import { MenuLateral } from "../../components/menulateral/MenuLateral";
import { MenuNormal } from "../../components/menunormal/menunormal";
import iconeUsuario from "../../assets/perfil.png";


export const Perfil = () => {
  return (
    <div className="container-geral-admfuncionario">
      <MenuLateral />
      <div className="conteudo-principal-perfil">
        <MenuNormal />

        <main className="Perfil-Logo">
          <div className="perfil-header">
            <img className="Logo-perfil" src={iconeUsuario} alt="Usuário" />
            <div className="perfil-info">
              <h2>Jucelino</h2>
              <p>Administrador</p>
            </div>
          </div>

          <div className="perfil-dados">
            <div className="campo-perfil">
              <label>Nome completo</label>
              <input type="text" value="Jucelino" readOnly />
            </div>

            <div className="campo-perfil">
              <label>Email</label>
              <input type="email" value="Jucelino@gmail.com" readOnly />
            </div>

            <div className="campo-perfil">
              <label>Telefone</label>
              <input type="text" value="(11) 99999-9999" readOnly />
            </div>

            <div className="campo-perfil">
              <label>CPF</label>
              <input type="text" value="*********911" readOnly />
            </div>

            <div className="campo-perfil">
              <label>Função</label>
              <input type="text" value="Administrador do Sistema" readOnly />
            </div>

      
          </div>
        </main>
      </div>
    </div>
  );
};
