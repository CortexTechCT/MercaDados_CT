import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../pages/Login/login";
import { CadastroUsuario } from "../pages/CadastroUsuario/cadastrousuario";
import { Fornecedores } from "../pages/Fornecedores/fornecedores";
import { GestaoEstoque } from "../pages/GestaoEstoque/gestaoestoque";
import { Home } from "../pages/Home/home";
import { LucrosGastos } from "../pages/LucrosGastos/lucrosgastos";
import { Perfil } from "../pages/Perfil/Perfil.jsx";
import { useAuth } from "../pages/contexts/authContexts";
import { LeituraProdutos } from "../pages/LeituraProdutos/LeituraProdutos";
import { AdmFuncionario } from "../pages/AdmFuncionario/admfuncionario.jsx";
import { CadastroProduto } from "../pages/CadastroProduto/cadastroProduto.jsx";
import { FeedbacksClientes } from "../pages/FeedbacksClientes/feedbacksclientes.jsx";

// ✅ Componente de proteção de rotas
const Privado = ({ Item, tipoPermitido }) => {
  const { usuario, loading } = useAuth();

  // Espera o contexto carregar
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "1.5rem",
          color: "#1b2d68",
        }}
      >
        Carregando...
      </div>
    );
  }

  // Se não houver usuário → volta pro login
  if (!usuario) {
    return <Navigate to="/" replace />;
  }

  // Verifica o tipo de usuário
  const tipoUsuarioNormalizado = usuario.tipoUsuario?.trim().toLowerCase();
  const tipoPermitidoNormalizado = tipoPermitido.trim().toLowerCase();

  if (tipoUsuarioNormalizado !== tipoPermitidoNormalizado) {
    return <Navigate to="/" replace />;
  }

  return <Item />;
};

const Rotas = () => {
  return (
    <Routes>
      {/* Login livre */}
      <Route path="/" element={<Login />} />

      {/* Rotas do Admin */}
      <Route path="/Home" element={<Privado tipoPermitido="Admin" Item={Home} />} />
      <Route path="/Perfil" element={<Privado tipoPermitido="Admin" Item={Perfil} />} />
      <Route path="/CadastroUsuario" element={<Privado tipoPermitido="Admin" Item={CadastroUsuario} />} />
      <Route path="/Fornecedores" element={<Privado tipoPermitido="Admin" Item={Fornecedores} />} />
      <Route path="/GestaoEstoque" element={<Privado tipoPermitido="Admin" Item={GestaoEstoque} />} />
      <Route path="/LucrosGastos" element={<Privado tipoPermitido="Admin" Item={LucrosGastos} />} />
      <Route path="/AdmFuncionario" element={<Privado tipoPermitido="Admin" Item={AdmFuncionario} />} />
      <Route path="/CadastroProduto" element={<Privado tipoPermitido="Admin" Item={CadastroProduto} />} />

      {/* Rotas do Funcionário */}
      <Route path="/LeituraProdutos" element={<Privado tipoPermitido="Funcionario" Item={LeituraProdutos} />} />
      <Route path="/FeedbacksClientes" element={<Privado tipoPermitido="Funcionario" Item={FeedbacksClientes} />} />
    </Routes>
  );
};

export default Rotas;
