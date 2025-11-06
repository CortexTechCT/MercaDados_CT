import "./Perfil.css";
import { MenuLateral } from "../../components/menulateral/MenuLateral";
import { MenuNormal } from "../../components/menunormal/menunormal";
import iconeUsuario from "../../assets/perfil.png";
import { useAuth } from "../contexts/authContexts"; 
import { useEffect, useState } from "react";
import api from "../../services/Services";

export const Perfil = () => {
  const { usuario, token } = useAuth();
  const [dados, setDados] = useState(null);

  useEffect(() => {
    const carregarUsuario = async () => {
      if (!usuario?.idUsuario || !token) return;

      try {
        const resposta = await api.get(`/Usuario/BuscarPorId/${usuario.idUsuario}`, {
        });
        setDados(resposta.data);
      } catch (error) {
        console.error(" Erro ao carregar perfil:", error.response ? error.response.data : error);
      }
    };

    carregarUsuario();
  }, [usuario, token]);

  if (!dados) {
    return <p style={{ margin: "50px", fontSize: "18px" }}>Carregando perfil...</p>;
  }

  return (
    <div className="container-geral-admfuncionario">
      <MenuLateral />
      <div className="conteudo-principal-perfil">
        <MenuNormal />
        <main className="Perfil-Logo">
          <div className="perfil-header">
            <img className="Logo-perfil" src={iconeUsuario} alt="Usuário" />
            <div className="perfil-info">
              <h2>{dados.nomeUsuario}</h2>
              <p>{dados.tipoUsuario?.tituloTipoUsuario || "Usuário"}</p>
            </div>
          </div>

          <div className="perfil-dados">
            <div className="campo-perfil">
              <label>Nome completo</label>
              <input type="text" value={dados.nomeUsuario || ""} readOnly />
            </div>

            <div className="campo-perfil">
              <label>Email</label>
              <input type="email" value={dados.email || ""} readOnly />
            </div>

            <div className="campo-perfil">
              <label>Telefone</label>
              <input type="text" value={dados.numero || ""} readOnly />
            </div>

            <div className="campo-perfil">
              <label>CPF</label>
              <input type="text" value={dados.cpf || ""} readOnly />
            </div>

            <div className="campo-perfil">
              <label>Função</label>
              <input
                type="text"
                value={dados.tipoUsuario?.tituloTipoUsuario || ""}
                readOnly
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
