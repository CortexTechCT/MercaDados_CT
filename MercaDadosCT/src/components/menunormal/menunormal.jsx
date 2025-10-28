<<<<<<< HEAD


=======
>>>>>>> e2f587557cd7c4562fe9026d7e29e07db1a3139f
import "./menunormal.css";
import iconeSino from "../../assets/Alarm.png";
import iconeUsuario from "../../assets/perfil.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import casa from "../../assets/casa.png";

export const MenuNormal = () => {
  
  return (
    <header className="top-header">
    

      <div className="icons-header">
        <Link to="/Perfil">
          <img src={iconeUsuario} className="Usuario-perfil" alt="Usuário" />
        </Link>
      </div>
    </header>
  );
};
