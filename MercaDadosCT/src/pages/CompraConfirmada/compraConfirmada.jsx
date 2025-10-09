import "./CompraConfirmada.css";
import {MenuNormal} from "../../components/menunormal/menunormal"
import logo from "../../assets/logo.png"
import imageok from "../../assets/ok.png"
export const CompraConfirmada = () => {
  return (
   <div className="conteudo-principal">
  
        <MenuNormal/> 
         

      <main className="confirmacao-box">
        <div className="card-confirmacao">
          <h2 className="titulo">Compra Confirmada</h2>
          <div className="icone-check">
            <img src={imageok} alt="Confirmada" />
          </div>
          <p className="mensagem">Obrigado pela Compra</p>
          
        </div>
      </main>
    </div>
  );
};
