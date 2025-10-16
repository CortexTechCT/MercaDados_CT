import "./cadastrousuario.css";
import { useState } from "react";
import { MenuLateral } from "../../components/menulateral/MenuLateral.jsx";
import { Botao } from "../../components/botao/Botao.jsx";
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
    complemento: "",
  });

  function handleChange(e) {
    setFuncionario({ ...funcionario, [e.target.name]: e.target.value });
  }

  async function cadastrarFuncionario(e) {
    e.preventDefault();

    try {
      // Formata o objeto conforme seu backend espera
      const funcionarioFormatado = {
        nomeFuncionario: funcionario.nome,
        dataNascimento: funcionario.dataNascimento,
        genero: funcionario.genero,
        cpf: funcionario.cpfCnpj,
        email: funcionario.email,
        ruaENumero: funcionario.endereco,
        cidadeEstadoCEP: funcionario.cidade,
        numero: funcionario.telefone,
        complemento: funcionario.complemento,
        senha: funcionario.senha,
      };

      // Faz o POST no backend
      const response = await api.post("/Funcionario", funcionarioFormatado);

      // SweetAlert de sucesso
      Swal.fire({
        icon: "success",
        title: "Cadastro realizado com sucesso!",
        text: `Funcionário: ${response.data.nomeFuncionario}`,
        confirmButtonColor: "#3085d6",
      });

      // Limpa formulário
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
      // SweetAlert de erro
      Swal.fire({
        icon: "error",
        title: "Erro ao cadastrar!",
        text: error.response?.data || error.message,
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
              name="nome"
              placeholder="Nome completo"
              value={funcionario.nome}
              onChange={handleChange}
              required
            />

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
              type="password"
              name="senha"
              placeholder="Senha"
              value={funcionario.senha}
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

            <Botao nomeBotao="Cadastrar" tipo="submit" />
          </form>
        </main>
      </div>
    </div>
  );
};
