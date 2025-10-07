import "./MenuLateral.css";
<<<<<<< HEAD
import iconeCasa from "../../assets/imagem_2025-09-23_101000545-removebg-preview 1.png";
import iconeSair from "../../assets/Vector.png";
=======
import iconeCasa from '../../assets/casa.png';
import iconeSair from '../../assets/Vector.png';
import { Link } from "react-router-dom";
>>>>>>> 4d8f8f03e7954e506adc8db84b3091e42a65f6ff

export const MenuLateral = () => {
  return (
    <aside className="menu-lateral">
<<<<<<< HEAD
=======
      
>>>>>>> 4d8f8f03e7954e506adc8db84b3091e42a65f6ff
      <img className="CASA" src={iconeCasa} alt="casa" />
      <nav>
        <ul>
<<<<<<< HEAD
          <li>Gerenciamento</li>
          <li>Fornecedor</li>
          <li>Estoque</li>
          <li>Lucro e Gastos</li>
          <li>Administração</li>
          <li className="ativo">Produtos</li>
          <li>Cadastro novo</li>
=======
          <li><Link to="/Home">Gerenciamento</Link></li>
          <li><Link to="/Fornecedores">Fornecedor</Link></li>
          <li><Link to="/GestaoEstoque">Estoque</Link></li>
          <li><Link to="/LucrosGastos">Lucro e Gastos</Link></li>
          <li><Link to="/AdmFuncionarios">Administração</Link></li>
          <li><Link to="/CadastroUsuario">Cadastro novo</Link></li>
>>>>>>> 4d8f8f03e7954e506adc8db84b3091e42a65f6ff
        </ul>
      </nav>
      <div className="sair">
        <img src={iconeSair} alt="Sair" />
        <span>sair da conta</span>
      </div>
    </aside>
  )
}
