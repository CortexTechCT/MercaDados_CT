import "./MenuLateral.css";
import iconeCasa from '../../assets/imagem_2025-09-23_101000545-removebg-preview 1.png';
import iconeSair from '../../assets/Vector.png';

export const MenuLateral = () => {
  return (
    <aside className="menu-lateral">

      <img className="CASA" src={iconeCasa} alt="casa" />

      <nav>
        <ul>
          <li>Gerenciamento</li>
          <li>Fornecedor</li>
          <li>Estoque</li>
          <li>Lucro e Gastos</li>
          <li>Administração</li>
          <li className="ativo">Produtos</li>
          <li className="ativo">Cadastro novo</li>
        </ul>
      </nav>

      <div className="sair">
        <img src={iconeSair} alt="Sair" />
        <span>sair da conta</span>
      </div>
    </aside>
  );
};
