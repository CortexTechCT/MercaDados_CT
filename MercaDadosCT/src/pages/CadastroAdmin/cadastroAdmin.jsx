import "./cadastroAdmin.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MenuLateral } from "../../components/menulateral/MenuLateral.jsx";
import { Botao } from "../../components/botao/Botao.jsx";
import Swal from "sweetalert2";
import api from "../../services/Services.js";
import iconeCasa from '../../assets/casa.png';

export const CadastroAdmin = () => {
  const [usuario, setUsuario] = useState({
    nomeUsuario: "",
    email: "",
    senha: "",
    numero: "",
    cpf: "",
  });

  // remove tudo que não é dígito
  const apenasDigitos = (str = "") => (str ? str.replace(/\D/g, "") : "");

  // formata número de telefone BR
  const formatPhone = (digits) => {
    if (!digits) return "";
    const d = digits.replace(/\D/g, "");
    if (d.length <= 2) return `(${d}`;
    if (d.length <= 6) return `(${d.slice(0,2)}) ${d.slice(2)}`;
    if (d.length <= 10) {
      // (11) 1234-5678
      return `(${d.slice(0,2)}) ${d.slice(2,6)}-${d.slice(6,10)}`;
    }
    // 11+ digits -> (11) 91234-5678 (treat as 11 digits)
    return `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7,11)}`;
  };

  // formata CPF ou CNPJ
  const formatCpfCnpj = (digits) => {
    if (!digits) return "";
    const d = digits.replace(/\D/g, "");
    if (d.length <= 11) {
      // CPF: 123.123.123-45
      const part1 = d.slice(0,3);
      const part2 = d.slice(3,6);
      const part3 = d.slice(6,9);
      const part4 = d.slice(9,11);
      let out = "";
      if (part1) out += part1;
      if (part2) out += "." + part2;
      if (part3) out += "." + part3;
      if (part4) out += "-" + part4;
      return out;
    } else {
      // CNPJ: 12.345.678/0001-90 (supports up to 14 digits)
      const p1 = d.slice(0,2);
      const p2 = d.slice(2,5);
      const p3 = d.slice(5,8);
      const p4 = d.slice(8,12);
      const p5 = d.slice(12,14);
      let out = "";
      if (p1) out += p1;
      if (p2) out += "." + p2;
      if (p3) out += "." + p3;
      if (p4) out += "/" + p4;
      if (p5) out += "-" + p5;
      return out;
    }
  };

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "numero") {
      const digits = apenasDigitos(value).slice(0, 11); // limita a 11
      setUsuario({ ...usuario, numero: formatPhone(digits) });
      return;
    }

    if (name === "cpf") {
      const digits = apenasDigitos(value).slice(0, 14); // limita a 14 (CNPJ)
      setUsuario({ ...usuario, cpf: formatCpfCnpj(digits) });
      return;
    }

    setUsuario({ ...usuario, [name]: value });
  }

  async function cadastrarAdmin(e) {
    e.preventDefault();

    try {
      // envia os valores sem máscara (somente dígitos)
      const usuarioFormatado = {
        nomeUsuario: usuario.nomeUsuario,
        email: usuario.email,
        senha: usuario.senha,
        numero: apenasDigitos(usuario.numero),
        cpf: apenasDigitos(usuario.cpf),
        tipoUsuarioID: "65153ea0-f1c7-4f94-9162-08de22bbd771"
      };

      console.log("➡️ Enviando para API:", usuarioFormatado);
      const resposta = await api.post("Usuario", usuarioFormatado);

      Swal.fire({
        icon: "success",
        title: "Administrador cadastrado com sucesso!",
        text: `Nome: ${resposta.data.nomeUsuario}`,
        confirmButtonColor: "#3085d6",
      });

      setUsuario({
        nomeUsuario: "",
        email: "",
        senha: "",
        numero: "",
        cpf: "",
      });
    } catch (error) {
      console.error("❌ Erro ao cadastrar:", error);
      console.log("📦 Resposta da API:", error.response?.data);
      Swal.fire({
        icon: "error",
        title: "Erro ao cadastrar!",
        text:
          error.response?.data?.message ||
          "Não foi possível realizar o cadastro.",
        confirmButtonColor: "#d33",
      });
    }
  }

  return (
    <div className="cadastro-admin-page">
      <MenuLateral />
      <div className="conteudo-principal">
        <div className="menu-lateral-retangulo">
          <Link to="/">
            <img src={iconeCasa} alt="Logo" />
          </Link>
        </div>

        <main className="formulario-box">
          <h2>Cadastro de Administrador</h2>

          <form className="formulario-grid" onSubmit={cadastrarAdmin}>
            <input
              type="text"
              name="nomeUsuario"
              placeholder="Nome completo"
              value={usuario.nomeUsuario}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={usuario.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="senha"
              placeholder="Senha"
              value={usuario.senha}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="numero"
              placeholder="(11) 92345-4744"
              value={usuario.numero}
              onChange={handleChange}
              maxLength="16"
              required
            />

            <input
              type="text"
              name="cpf"
              placeholder="123.123.123-45 ou CNPJ"
              value={usuario.cpf}
              onChange={handleChange}
              maxLength="18"
              required
            />

            <div className="botao-container">
              <Botao
                nomeBotao="Cadastrar Administrador"
                tipo="submit"
                onClick={cadastrarAdmin}
              />
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};
