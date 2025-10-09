import "./menunormal.css";
import iconeSino from "../../assets/Alarm.png";
import iconeUsuario from "../../assets/perfil.png";
import iconeMenu from "../../assets/Hamburguer.png"; 
import { useState } from "react";
import { Link } from "react-router-dom";

export const MenuNormal = ({ toggleMenu }) => {
  const [menuAberto, setMenuAberto] = useState(false);

  const handleMenuClick = () => {
    setMenuAberto(!menuAberto);
    toggleMenu(); 
  };

  return (
    <header className="top-header">
      <div className="menu-hamburguer" onClick={handleMenuClick}>
        <img src={iconeMenu} alt="Menu" />
      </div>

      <div className="icons-header">
        <img src={iconeSino} alt="Notificações" />
        <Link to="/Perfil">
        
        <img src={iconeUsuario} alt="Usuário" />
        </Link>
      </div>
    </header>
  );
};
