 import "./menunormal.css";
;
import iconeUsuario from "../../assets/perfil.png";
import iconeMenu from "../../assets/Hamburguer.png"; 
import { useState } from "react";
import { Link } from "react-router-dom";
import casa from "../../assets/casa.png"



export const MenuNormal = ({ toggleMenu }) => {
  const [menuAberto, setMenuAberto] = useState(false);

  const handleMenuClick = () => {
    setMenuAberto(!menuAberto);
    toggleMenu(); 
  };

  return (
    <header className="top-header">
      <div className="menu-hamburguer" onClick={handleMenuClick}>
        {/* <img src={iconeMenu} alt="Menu" /> */}
        <img src={casa} alt="Menu" />
      </div>

      <div className="icons-header">

        <Link to="/Perfil">
        <img src={iconeUsuario} className="Usuario-perfil" alt="Usuário" />
        </Link>
      </div>
    </header>
  );
};
