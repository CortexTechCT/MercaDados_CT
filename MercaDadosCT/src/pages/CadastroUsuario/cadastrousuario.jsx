import "./cadastrousuario.css";
import { useState } from "react";
import { MenuLateral } from "../../components/menulateral/MenuLateral.jsx";
import { MenuNormal } from "../../components/menunormal/menunormal.jsx";
import { Botao } from "../../components/botao/Botao.jsx";
import Swal from "sweetalert2";
import api from "../../services/Services.js";

export const CadastroUsuario = () => {
  const [funcionario, setFuncionario] = useState({
    nome: "",
    dataNascimento: "",
    genero: "",
    cpfCnpj: "",
    email: "",
    endereco: "",
    senha: "",
    cidade: "",
    telefone: "",
    complemento: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFuncionario({ ...funcionario, [name]: value });
  }

async function cadastrarFuncionario(e) {
  e.preventDefault();

  try {
    const funcionarioFormatado = {
      dataNascimento: funcionario.dataNascimento,
      nomeFuncionario: funcionario.nome,
      email: funcionario.email,
      senha: funcionario.senha,
      genero: funcionario.genero,
      ruaENumero: funcionario.endereco,
      CidadeEstadoCEP: funcionario.cidade,
      complemento: funcionario.complemento,
      numero: funcionario.telefone,
      cpf: funcionario.cpfCnpj,
      fotoPerfil: "",
      usuario: {
        usuarioID: "00000000-0000-0000-0000-000000000000", 
        nomeUsuario: funcionario.nome,
        email: funcionario.email,
        senha: funcionario.senha,
        tipoUsuarioID: "00000000-0000-0000-0000-000000000000", 
        tipoUsuario: {
          tipoUsuarioID: "00000000-0000-0000-0000-000000000000",
          tituloTipoUsuario: "Funcionario",
        },
        numero: funcionario.telefone,
        cpf: funcionario.cpfCnpj,
      },
    };

    console.log("➡️ Enviando para API:", funcionarioFormatado);

    const resposta = await api.post("Funcionario", funcionarioFormatado);

    Swal.fire({
      icon: "success",
      title: "Funcionário cadastrado com sucesso!",
      text: `Nome: ${resposta.data.nomeFuncionario}`,
      confirmButtonColor: "#3085d6",
    });

    setFuncionario({
      nome: "",
      dataNascimento: "",
      genero: "",
      cpfCnpj: "",
      email: "",
      endereco: "",
      senha: "",
      cidade: "",
      telefone: "",
      complemento: "",
    });
  } catch (error) {
    console.error("❌ Erro ao cadastrar:", error);
    console.log("📦 Resposta da API:", error.response?.data);
    Swal.fire({
      icon: "error",
      title: "Erro ao cadastrar!",
      text: error.response?.data?.message || "Não foi possível realizar o cadastro.",
      confirmButtonColor: "#d33",
    });
  }
}


  return (
    <div className="container-geral">
      <MenuLateral />
      <div className="conteudo-principal">
        <MenuNormal />

        <main className="formulario-box">
          <h2>Cadastro de Funcionário</h2>

          <form className="formulario-grid" onSubmit={cadastrarFuncionario}>
            <input
              type="text"
              name="nome"
              placeholder="Nome completo"
              value={funcionario.nome}
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="dataNascimento"
              value={funcionario.dataNascimento}
              onChange={handleChange}
              required
            />

            <select
              name="genero"
              value={funcionario.genero}
              onChange={handleChange}
              required
            >
              <option value="">Selecione o gênero</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Prefiro não dizer">Prefiro não dizer</option>
            </select>

            <input
              type="text"
              name="cpfCnpj"
              placeholder="CPF ou CNPJ"
              value={funcionario.cpfCnpj}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={funcionario.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="endereco"
              placeholder="Rua/Avenida, número"
              value={funcionario.endereco}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="cidade"
              placeholder="Cidade, Estado, CEP"
              value={funcionario.cidade}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="telefone"
              placeholder="Número de telefone"
              value={funcionario.telefone}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="complemento"
              placeholder="Complemento"
              value={funcionario.complemento}
              onChange={handleChange}
            />

            <input
              type="password"
              name="senha"
              placeholder="Senha"
              value={funcionario.senha}
              onChange={handleChange}
              required
            />

            <div className="botao-container">
              <Botao nomeBotao="Cadastrar Funcionário" tipo="submit" onClick={cadastrarFuncionario} />
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};
