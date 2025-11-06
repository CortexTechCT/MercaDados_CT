import "./cadastroProduto.css";
import imagemCaixa from "../../assets/caixa.svg";
import Swal from "sweetalert2";
import api from "../../services/Services.js";
import { MenuLateral } from "../../components/menulateral/MenuLateral.jsx";
import { Botao } from "../../components/botao/Botao.jsx";
import { MenuNormal } from "../../components/menunormal/menunormal.jsx";
import { useState, useEffect } from "react";

export const CadastroProduto = () => {
  const [produto, setProduto] = useState({
    Nome: "",
    Valor: "",
    NumeroProduto: "",
    Validade: "",
    Peso: "",
    Setor: "",
    Imagem: null,
  });

  const [setoresDisponiveis, setSetoresDisponiveis] = useState([]);
  const [carregandoSetores, setCarregandoSetores] = useState(true);

  // Buscar setores da API
  useEffect(() => {
    const buscarSetores = async () => {
      try {
        const resposta = await api.get("/Estoque"); // URL correta da sua API
        console.log("📦 Resposta da API de Estoque:", resposta.data);

        const setores = Array.isArray(resposta.data)
          ? resposta.data.map((item) => item.setor)
          : [];

        setSetoresDisponiveis(setores);
      } catch (erro) {
        console.error("❌ Erro ao buscar setores:", erro);
        Swal.fire({
          icon: "error",
          title: "Erro ao carregar setores",
          text: "Não foi possível listar os setores disponíveis.",
        });
      } finally {
        setCarregandoSetores(false);
      }
    };

    buscarSetores();
  }, []);

  // Atualizar formulário
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "Imagem") {
      setProduto({ ...produto, Imagem: files[0] });
    } else {
      setProduto({ ...produto, [name]: value });
    }
  };

  // Função auxiliar para converter arquivo em base64
  const converterParaBase64 = (arquivo) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(arquivo);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Cadastrar produto
  const cadastrarProduto = async (e) => {
    e.preventDefault();

    try {
      const produtoFormatado = {
        nomeProduto: produto.Nome,
        valor: parseFloat(produto.Valor),
        numeroProduto: produto.NumeroProduto,
        validade: produto.Validade ? new Date(produto.Validade).toISOString() : null,
        peso: produto.Peso,
        setor: produto.Setor,
        imagem: produto.Imagem
          ? {
              nome: produto.Imagem.name,
              arquivo: await converterParaBase64(produto.Imagem),
            }
          : null,
      };

      console.log("➡️ Enviando produto:", produtoFormatado);

      const resposta = await api.post("/Produtos", produtoFormatado);

      Swal.fire({
        icon: "success",
        title: "Produto cadastrado com sucesso!",
        text: `Produto: ${resposta.data.nomeProduto}`,
      });

      setProduto({
        Nome: "",
        Valor: "",
        NumeroProduto: "",
        Validade: "",
        Peso: "",
        Setor: "",
        Imagem: null,
      });
    } catch (erro) {
      console.error("❌ Erro ao cadastrar produto:", erro);
      Swal.fire({
        icon: "error",
        title: "Erro ao cadastrar produto",
        text: erro.response?.data?.message || "Não foi possível realizar o cadastro.",
      });
    }
  };

  return (
    <div className="container-geral">
      <MenuLateral />
      <div className="conteudo-principal">
        <MenuNormal />
        <main className="formulario-box">
          <h2>Cadastro de Produtos</h2>

          <div className="descricao-produto">
            <img src={imagemCaixa} alt="Produto" className="img-produto" />
            <div className="descricao-texto">
              <strong>Descrição:</strong>
              <p>
                Preencha os campos abaixo para cadastrar um novo produto no sistema.
              </p>
            </div>
          </div>

          <form className="formulario-grid" onSubmit={cadastrarProduto}>
            <input
              type="text"
              name="Nome"
              placeholder="Nome do Produto"
              value={produto.Nome}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="Valor"
              placeholder="Valor"
              value={produto.Valor}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="NumeroProduto"
              placeholder="Número do Produto"
              value={produto.NumeroProduto}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="Validade"
              placeholder="Validade"
              value={produto.Validade}
              onChange={handleChange}
            />
            <input
              type="text"
              name="Peso"
              placeholder="Peso (ex: 100ml)"
              value={produto.Peso}
              onChange={handleChange}
            />

            <select
              name="Setor"
              value={produto.Setor}
              onChange={handleChange}
              disabled={carregandoSetores}
              required
            >
              <option value="">
                {carregandoSetores ? "Carregando setores..." : "Selecione um Setor"}
              </option>
              {setoresDisponiveis.map((setor, index) => (
                <option key={index} value={setor}>
                  {setor}
                </option>
              ))}
            </select>

            <input type="file" name="Imagem" onChange={handleChange} />
            
            <div className="botao-box">
              <Botao nomeBotao="Cadastrar Produto" tipo="submit" />
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};
