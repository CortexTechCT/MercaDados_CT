import "./admfuncionario.css";
import { MenuLateral } from "../../components/menulateral/MenuLateral";
import { MenuNormal } from "../../components/menunormal/menunormal";
import { useEffect, useState } from "react";
import api from "../../services/Services";

export const AdmFuncionario = () => {
  // --- ESTADOS ---
  const [listaFuncionario, setListaFuncionario] = useState([]);
  const [listaVenda, setListaVenda] = useState([]);
  const [listaFeed, setListaFeed] = useState([]);

  // --- FUNÇÕES DE API ---
  const ListarFuncionario = async () => {
    try {
      const resposta = await api.get("Venda/Listar");
      setListaFuncionario(resposta.data);
    } catch (error) {
      console.error("❌ Erro ao buscar funcionários:", error);
    }
  };

const ListarVenda = async () => {
  try {
    const resposta = await api.get("Venda/Listar");
    setListaVenda(resposta.data);
  } catch (error) {
    console.error("❌ Erro ao buscar vendas:", error);
  }
};


  const ListarFeedback = async () => {
    try {
      const resposta = await api.get("Feedback");
      setListaFeed(resposta.data);
    } catch (error) {
      console.error("❌ Erro ao buscar feedback:", error);
    }
  };

  // --- USEEFFECT PARA CARREGAR DADOS AO INICIAR ---
  useEffect(() => {
    ListarFuncionario();
    ListarVenda();
    ListarFeedback();
  }, []);

  // --- JSX ---
  return (
    <div className="container-geral-admfuncionario">
      <MenuLateral />
      <MenuNormal />

      <div className="conteudo-admfuncionario">
        <h1>Administração de Funcionários</h1>

        {/* ---------------- FUNCIONÁRIOS ---------------- */}
        <section>
          <h2>Lista de Funcionários</h2>
          {listaFuncionario.length > 0 ? (
            <table className="tabela">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Cargo</th>
                </tr>
              </thead>
              <tbody>
                {listaFuncionario.map((f, index) => (
                  <tr key={f.id || index}>
                    <td>{index + 1}</td>
                    <td>{f.nome}</td>
                    <td>{f.email}</td>
                    <td>{f.cargo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Nenhum funcionário encontrado.</p>
          )}
        </section>

        {/* ---------------- VENDAS ---------------- */}
        <section>
          <h2>Vendas Registradas</h2>
          {listaVenda.length > 0 ? (
            <table className="tabela">
              <thead>
                <tr>
                  <th>#</th>
                  <th>ID Venda</th>
                  <th>Cliente</th>
                  <th>Valor Total</th>
                </tr>
              </thead>
              <tbody>
                {listaVenda.map((venda, index) => (
                  <tr key={venda.id || index}>
                    <td>{index + 1}</td>
                    <td>{venda.id}</td>
                    <td>{venda.nomeCliente}</td>
                    <td>R$ {venda.valorTotal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Nenhuma venda encontrada.</p>
          )}
        </section>

        {/* ---------------- FEEDBACKS ---------------- */}
        <section>
          <h2>Feedbacks dos Clientes</h2>
          {listaFeed.length > 0 ? (
            <ul className="lista-feedback">
              {listaFeed.map((feed, index) => (
                <li key={feed.id || index}>
                  <strong>{feed.nomeCliente}:</strong> {feed.mensagem}
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum feedback disponível.</p>
          )}
        </section>
      </div>
    </div>
  );
};
