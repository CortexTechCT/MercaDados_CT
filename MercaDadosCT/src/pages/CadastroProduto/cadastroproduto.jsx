import "./cadastroproduto.css";
import { MenuLateral } from "../../components/menulateral/MenuLateral";
import imagemCaixa from "../../assets/caixa.svg";
import { Botao } from "../../components/botao/Botao";

export const Cadastroproduto = () => {
  return (
    <div className="container-geral">
      <MenuLateral />

      <main className="formulario-box">
        <h2>Produtos:</h2>

   
        <div className="upload-box">
          <button className="upload-btn">Upload</button>
        </div>

        {/* Descrição do produto */}
        <div className="descricao-produto">
          <img src={imagemCaixa} alt="Produto" className="img-produto" />
          <div className="descricao-texto">
            <strong>Descrição:</strong>
            <p>
              O produto é um tal que faz parte de tal coisa e consumido por tal
              pessoas e com tal proteínas, vitaminas entre outros
            </p>
          </div>
        </div>

        {/* Inputs em grid */}
        <form className="formulario-grid">
          <input type="text" placeholder="Produto" />
          <input type="text" placeholder="Valor" />
          <input type="text" placeholder="Número do Produto" />
          <input type="text" placeholder="Validade" />
          <input type="text" placeholder="Peso (Kg)" />
          <input type="text" placeholder="Setor" />
        </form>

        {/* Botão cadastrar */}
        <div className="botao-box">
          <Botao nomeBotao="Cadastrar" />
        </div>
      </main>
    </div>
  );
};
