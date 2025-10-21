
import "./MenuLateral.css";

import iconeCasa from '../../assets/casa.png'; // Choose one image source
import iconeSair from '../../assets/Vector.png';
import { Link } from "react-router-dom";



export const MenuLateral = () => {
  return (
    <aside className="menu-lateral">


   <Link to = "/Home">

      <img className="CASA" src={iconeCasa} alt="casa" />
   </Link>
      <nav>
        <ul>

          <li><Link to="/Home">Gerenciamento</Link></li>
          <li><Link to="/Fornecedores">Fornecedor</Link></li>
          <li><Link to="/GestaoEstoque">Estoque</Link></li>
          <li><Link to="/LucrosGastos">Lucro e Gastos</Link></li>
          <li><Link to="/AdmFuncionarios">Administração</Link></li>
          <li><Link to="/CadastroUsuario">Cadastro novo</Link></li>
        </ul>
      </nav>
      <div className="sair">
        <img src={iconeSair} alt="Sair" />
        <span>sair da conta</span>
      </div>
    </aside>
  );
}
