<<<<<<< HEAD
=======

>>>>>>> a9bb1511b6aa4c6212b49ed0875ae22f9c1bc2b3
import "./MenuLateral.css";
<<<<<<< HEAD
import iconeCasa from '../../assets/casa.png'; // Choose one image source
import iconeSair from '../../assets/Vector.png';
import { Link } from "react-router-dom";
<<<<<<< HEAD

=======
=======
import iconeCasa from '../../assets/casa.png';
import iconeSair from '../../assets/Vector.png';
import { Link } from "react-router-dom";



>>>>>>> d9a89bb51add40e46639175e29bcc16188b10516
>>>>>>> a9bb1511b6aa4c6212b49ed0875ae22f9c1bc2b3

export const MenuLateral = () => {
  return (
    <aside className="menu-lateral">
<<<<<<< HEAD

   <Link to = "/Home">
=======
<<<<<<< HEAD
=======

   <Link to = "/Home">

>>>>>>> d9a89bb51add40e46639175e29bcc16188b10516
>>>>>>> a9bb1511b6aa4c6212b49ed0875ae22f9c1bc2b3
      <img className="CASA" src={iconeCasa} alt="casa" />
   </Link>
      <nav>
        <ul>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> d9a89bb51add40e46639175e29bcc16188b10516
>>>>>>> a9bb1511b6aa4c6212b49ed0875ae22f9c1bc2b3
          <li><Link to="/Home">Gerenciamento</Link></li>
          <li><Link to="/Fornecedores">Fornecedor</Link></li>
          <li><Link to="/GestaoEstoque">Estoque</Link></li>
          <li><Link to="/LucrosGastos">Lucro e Gastos</Link></li>
          <li><Link to="/AdmFuncionarios">Administração</Link></li>
          <li><Link to="/CadastroUsuario">Cadastro novo</Link></li>
<<<<<<< HEAD
=======

>>>>>>> d9a89bb51add40e46639175e29bcc16188b10516
        </ul>
      </nav>
      <div className="sair">
        <img src={iconeSair} alt="Sair" />
        <span>sair da conta</span>
      </div>
    </aside>
  );
}
