import "./MenuLateral.css";
import iconeCasa from '../../assets/casa.png';
import iconeSair from '../../assets/Vector.png';

export const MenuLateral = () => {
  return (
    <aside className="menu-lateral">

      <img className="CASA" src={iconeCasa} alt="casa" />

      <nav>
        <ul>
          <li>Gerenciamento</li>
          <li className="ativo">Fornecedor</li>
          <li>Estoque</li>
          <li>Lucro e Gastos</li>
          <li>Administração</li>
          <li>Produtos</li>
          <li >Cadastro novo</li>
        </ul>
      </nav>

      <div className="sair">
        <img src={iconeSair} alt="Sair" />
        <span>sair da conta</span>
      </div>
    </aside>
  );
};
