import "./MenuLateral.css";

<<<<<<< HEAD
import iconeCasa from '../../assets/casa.png';
import iconeSair from '../../assets/Vector.png';
import { Link } from "react-router-dom";

=======

import iconeCasa from '../../assets/casa.png'; // Choose one image source
import iconeSair from '../../assets/Vector.png';
import { Link } from "react-router-dom";



>>>>>>> 5c80c6e61db46478ba58ceeca58aaba4d5471094
export const MenuLateral = () => {
  return (
    <aside className="menu-lateral">
      <Link to="/Home">
        <img className="CASA" src={iconeCasa} alt="casa" />
      </Link>

<<<<<<< HEAD
      <nav>
        <ul>
=======

   <Link to = "/Home">

      <img className="CASA" src={iconeCasa} alt="casa" />
   </Link>
      <nav>
        <ul>

>>>>>>> 5c80c6e61db46478ba58ceeca58aaba4d5471094
          <li><Link to="/Home">Gerenciamento</Link></li>
          <li><Link to="/Fornecedores">Fornecedor</Link></li>
          <li><Link to="/GestaoEstoque">Estoque</Link></li>
          <li><Link to="/LucrosGastos">Lucro e Gastos</Link></li>
          <li><Link to="/AdmFuncionarios">Administração</Link></li>
          <li><Link to="/CadastroUsuario">Cadastro novo</Link></li>
        </ul>
      </nav>

      <Link to="/" className="sair">
        <img src={iconeSair} alt="Sair" />
        <span>Sair da conta</span>
      </Link>
    </aside>
  );
}
