
import "./MenuLateral.css";
<<<<<<< HEAD
import iconeCasa from '../../assets/casa.png'; // Choose one image source
import iconeSair from '../../assets/Vector.png';
import { Link } from "react-router-dom";
=======


import iconeCasa from '../../assets/casa.png';
import iconeSair from '../../assets/Vector.png';
import { Link } from "react-router-dom";



>>>>>>> 207435599db84fb1fd47b290b9fce492ee9cc117

export const MenuLateral = () => {
  return (
    <aside className="menu-lateral">

<<<<<<< HEAD
   <Link to = "/Home">
=======



   <Link to = "/Home">


>>>>>>> 207435599db84fb1fd47b290b9fce492ee9cc117
      <img className="CASA" src={iconeCasa} alt="casa" />
   </Link>
      <nav>
        <ul>
<<<<<<< HEAD
=======




>>>>>>> 207435599db84fb1fd47b290b9fce492ee9cc117
          <li><Link to="/Home">Gerenciamento</Link></li>
          <li><Link to="/Fornecedores">Fornecedor</Link></li>
          <li><Link to="/GestaoEstoque">Estoque</Link></li>
          <li><Link to="/LucrosGastos">Lucro e Gastos</Link></li>
          <li><Link to="/AdmFuncionarios">Administração</Link></li>
          <li><Link to="/CadastroUsuario">Cadastro novo</Link></li>
<<<<<<< HEAD
=======

>>>>>>> 207435599db84fb1fd47b290b9fce492ee9cc117
        </ul>
      </nav>
      <div className="sair">
        <img src={iconeSair} alt="Sair" />
        <span>sair da conta</span>
      </div>
    </aside>
  );
}
