import "./cadastroProduto.css";
import imagemCaixa from "../../assets/caixa.svg";
import Swal from "sweetalert2";
import api from "../../services/Services.js";
import { MenuLateral } from "../../components/menulateral/MenuLateral";
import { Botao } from "../../components/botao/Botao";
import { MenuNormal } from "../../components/menunormal/menunormal";
import { useState } from 'react';

export const CadastroProduto = () => {
  const [produto, setProduto] = useState({
    Nome: "",
    Valor: "",
    NumeroProduto: "",
    Validade: "",
    Peso: "",
    Setor: "",
    Imagem: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "Imagem") {
      setProduto({ ...produto, Imagem: files[0] });
    } else {
      setProduto({ ...produto, [name]: value });
    }
  };

const handleSubmit = async () => {
  try {
    const formData = new FormData();

    formData.append("Nome", produto.Nome);
    formData.append("Valor", produto.Valor);
    formData.append("NumeroProduto", produto.NumeroProduto);

    if (produto.Validade) {
      const validadeISO = new Date(produto.Validade).toISOString();
      formData.append("Validade", validadeISO);
    }

    formData.append("Peso", produto.Peso);
    formData.append("Setor", produto.Setor);

    if (produto.Imagem) {
      formData.append("Imagem.Arquivo", produto.Imagem);
      formData.append("Imagem.Nome", produto.Imagem.name);
    }

    const response = await api.post("/produto", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log("✅ Produto criado:", response.data);
    Swal.fire({
      icon: "success",
      title: "Produto cadastrado!",
    });

  } catch (error) {
    console.error("❌ ERRO:", error);
    Swal.fire({
      icon: "error",
      title: "Erro ao cadastrar produto",
    });
  }
};



  return (
    <div className="container-geral">
      <MenuLateral />
      <div className="conteudo-principal">
        <MenuNormal />
        <main className="formulario-box">
          <h2>Produtos:</h2>

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
            <input type="text" name="Nome" placeholder="Produto" onChange={handleChange} />
            <input type="number" name="Valor" placeholder="Valor" onChange={handleChange} />
            <input type="number" name="NumeroProduto" placeholder="Número do Produto" onChange={handleChange} />
            <input type="date" name="Validade" placeholder="Validade" onChange={handleChange} />
            <input type="text" name="Peso" placeholder="Peso" onChange={handleChange} />
            <input type="text" name="Setor" placeholder="Setor" onChange={handleChange} />
            <input type="file" name="Imagem" onChange={handleChange} />
          </form>

          <div className="botao-box">
            <Botao nomeBotao="Cadastrar" onClick={handleSubmit} />
          </div>
        </main>
      </div>
    </div>
  );
};
