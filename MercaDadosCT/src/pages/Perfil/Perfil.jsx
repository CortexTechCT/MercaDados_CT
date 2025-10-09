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
                 <img className ="Logo-perfil"src={iconeUsuario} alt="" />
                        <div className="lista-funcionarios">
                            
                             
                    </div>
                </main>
            </div>
        </div>
    )
}
