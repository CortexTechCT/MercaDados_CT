<<<<<<< HEAD
import "./MenuLateral.css";
import iconeCasa from '../../assets/casa.png';
import iconeSair from '../../assets/Vector.png';
import { Link } from "react-router-dom";
=======
import "./MenuLateral.css"
import iconeCasa from '../../assets/casa.png';
import iconeSair from '../../assets/Vector.png';
import { Link } from "react-router-dom";

>>>>>>> 4d5b4f7fa203d3e12d2937ebb8122826911dd8b4

export const MenuLateral = () => {
  return (
    <aside className="menu-lateral">
<<<<<<< HEAD

      
=======
   <Link to = "/Home">
>>>>>>> 4d5b4f7fa203d3e12d2937ebb8122826911dd8b4
      <img className="CASA" src={iconeCasa} alt="casa" />
   </Link>
      <nav>
        <ul>
<<<<<<< HEAD
=======

>>>>>>> 4d5b4f7fa203d3e12d2937ebb8122826911dd8b4
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
  )
}
