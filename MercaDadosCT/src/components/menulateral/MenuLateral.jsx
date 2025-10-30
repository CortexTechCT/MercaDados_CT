import "./MenuLateral.css";
import iconeCasa from "../../assets/casa.png";
import iconeSair from "../../assets/Vector.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export const MenuLateral = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  return (
    <>
      {!menuAberto && ( 
        <div className="icone-hamburguer" onClick={alternarMenu}>
          <div className="linha"></div>
          <div className="linha"></div>
          <div className="linha"></div>
        </div>
      )}

      {menuAberto && <div className="overlay" onClick={fecharMenu}></div>}

      <aside className={`menu-lateral ${menuAberto ? "ativo" : ""}`}>
        <Link to="/Home" onClick={fecharMenu}>
          <img className="CASA" src={iconeCasa} alt="casa" />
        </Link>

        <nav>
          <ul>
            <li><Link to="/Home" onClick={fecharMenu}>Gerenciamento</Link></li>
            <li><Link to="/Fornecedores" onClick={fecharMenu}>Fornecedor</Link></li>
            <li><Link to="/GestaoEstoque" onClick={fecharMenu}>Estoque</Link></li>
            <li><Link to="/LucrosGastos" onClick={fecharMenu}>Lucro e Gastos</Link></li>
            <li><Link to="/AdmFuncionarios" onClick={fecharMenu}>Administração</Link></li>
            <li><Link to="/CadastroUsuario" onClick={fecharMenu}>Cadastro novo</Link></li>
            <li><Link to="/CadastroProduto" onClick={fecharMenu}>Cadastro Produto</Link></li>
          </ul>
        </nav>

        <div className="sair" onClick={fecharMenu}>
          <img src={iconeSair} alt="Sair" />
          <span>sair da conta</span>
        </div>
      </aside>

    </>
  );
};
