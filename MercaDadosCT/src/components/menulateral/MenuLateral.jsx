import "./MenuLateral.css";
import { Link, useNavigate } from "react-router-dom";
import iconeCasa from '../../assets/casa.png';
import iconeSair from '../../assets/Vector.png';
import { useAuth } from "../../pages/contexts/authContexts";

export const MenuLateral = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <aside className="menu-lateral">
      <Link to="/Home">
        <img className="CASA" src={iconeCasa} alt="Início" />
      </Link>
      <nav>
        <ul>
          <li><Link to="/Home">Gerenciamento</Link></li>
          <li><Link to="/Fornecedores">Fornecedor</Link></li>
          <li><Link to="/GestaoEstoque">Estoque</Link></li>
          <li><Link to="/LucrosGastos">Lucro e Gastos</Link></li>
          <li><Link to="/AdmFuncionario">Administração</Link></li>
          <li><Link to="/CadastroUsuario">Cadastro novo</Link></li>
        </ul>
      </nav>
      <button className="sair" onClick={handleLogout}>
        <img src={iconeSair} alt="Sair" />
        <span>Sair da conta</span>
      </button>
    </aside>
  );
};
