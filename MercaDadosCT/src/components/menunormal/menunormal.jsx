import "./menunormal.css";
import iconeSino from '../../assets/Alarm.png';
import iconeUsuario from '../../assets/perfil.png';

export const MenuNormal = () => {
  return (
     <header className="top-header">
              <div className="icons-header">
                <img src={iconeSino} alt="Notificações" />
                <img src={iconeUsuario} alt="Usuário" />
              </div>
            </header>
  );
};
