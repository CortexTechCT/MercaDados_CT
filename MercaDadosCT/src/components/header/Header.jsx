import React from "react";
import "./Header.css";
import casa from "../../assets/casa.png";
import perfil from "../../assets/perfil.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={casa} alt="Home" className="icon" />
      </div>

      <div className="header-icons">
        <img src={perfil} alt="Perfil" className="icon" />
      </div>
    </header>
  );
};

export default Header;
