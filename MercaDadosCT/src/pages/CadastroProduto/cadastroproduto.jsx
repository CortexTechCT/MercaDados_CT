import React from 'react';
import "./cadastroproduto.css";
import { MenuLateral } from "../../components/menulateral/MenuLateral";
import imagemCaixa from "../../assets/caixa.svg";
import { Botao } from "../../components/botao/Botao";
import { MenuNormal } from "../../components/menunormal/menunormal";

export const Cadastroproduto = () => {
  const handleUploadClick = () => {
    document.getElementById('upload-input').click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if(file) {
      console.log("Arquivo selecionado:", file);
      // Aqui pode subir o arquivo via API, ou armazenar no estado
    }
  };

  return (
    <div className="container-geral">
      <MenuLateral />

      <div className="conteudo-principal">
        <MenuNormal />

        <main className="formulario-box">
          <h2>Produtos:</h2>

          <div className="upload-box">
            <input 
              type="file" 
              id="upload-input" 
              style={{ display: 'none' }} 
              onChange={handleFileChange} 
            />
            <button className="upload-btn" onClick={handleUploadClick}>Upload</button>
          </div>

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

          <form className="formulario-grid">
            <input type="text" placeholder="Produto" />
            <input type="text" placeholder="Valor" />
            <input type="text" placeholder="Número do Produto" />
            <input type="text" placeholder="Validade" />
            <input type="text" placeholder="Peso (Kg)" />
            <input type="text" placeholder="Setor" />
          </form>

          <div className="botao-box">
            <Botao nomeBotao="Cadastrar" />
          </div>
        </main>
      </div>
    </div>
  );
};
