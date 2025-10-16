import "./cadastrousuario.css";
import { useState } from "react";
import { MenuLateral } from "../../components/menulateral/MenuLateral.jsx";
import { Botao } from '../../components/botao/Botao.jsx';
import { MenuNormal } from "../../components/menunormal/menunormal.jsx";
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
    complemento: ""
  });

  function handleChange(e) {
    setFuncionario({ ...funcionario, [e.target.name]: e.target.value });
  }

  async function cadastrarFuncionario(e) {
    e.preventDefault();
    try {
      const response = await api.post("/Funcionario", funcionario);

      Swal.fire({
        icon: "success",
        title: "Cadastro realizado com sucesso!",
        text: `Funcionário: ${response.data.nome}`,
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
        complemento: ""
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erro ao cadastrar!",
        text: error.response ? error.response.data : error.message,
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
              type="date"
              name="dataNascimento"
              placeholder="Data de nascimento"
              value={funcionario.dataNascimento}
              onChange={handleChange}
            />

            {/* Campo de seleção de gênero */}
            <select
              name="genero"
              value={funcionario.genero}
              onChange={handleChange}
            >
              <option value="">Selecione o gênero</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Prefiro não dizer">Prefiro não dizer</option>
            </select>

            <input
              type="text"
              name="nome"
              placeholder="Nome completo"
              value={funcionario.nome}
              onChange={handleChange}
            />
            <input
              type="text"
              name="cpfCnpj"
              placeholder="CPF ou CNPJ"
              value={funcionario.cpfCnpj}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={funcionario.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="endereco"
              placeholder="Rua, número, bairro"
              value={funcionario.endereco}
              onChange={handleChange}
            />
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              value={funcionario.senha}
              onChange={handleChange}
            />
            <input
              type="text"
              name="cidade"
              placeholder="Cidade, estado, CEP"
              value={funcionario.cidade}
              onChange={handleChange}
            />
            <input
              type="text"
              name="telefone"
              placeholder="Número de telefone"
              value={funcionario.telefone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="complemento"
              placeholder="Complemento"
              value={funcionario.complemento}
              onChange={handleChange}
            />

          </form>
            <Botao nomeBotao="Cadastrar" tipo="submit" />
        </main>
      </div>
    </div>
  );
};
