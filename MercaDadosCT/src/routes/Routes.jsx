import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../pages/Login/login";
import { CadastroUsuario } from "../pages/CadastroUsuario/cadastrousuario";
import { Fornecedores } from "../pages/Fornecedores/fornecedores";
import { GestaoEstoque } from "../pages/GestaoEstoque/gestaoestoque";
import { Home } from "../pages/Home/home";
import { LucrosGastos } from "../pages/LucrosGastos/lucrosgastos";
import { Perfil } from "../pages/Perfil/Perfil";
import { LeituraProdutos } from "../pages/LeituraProdutos/LeituraProdutos";
import { AdmFuncionario } from "../pages/AdmFuncionario/admfuncionario";
import { CadastroProduto } from "../pages/CadastroProduto/cadastroproduto";
import { FeedbacksClientes } from "../pages/FeedbacksClientes/feedbacksclientes";
import { CadastroAdmin } from "../pages/CadastroAdmin/cadastroAdmin";
import { useAuth } from "../pages/contexts/authContexts";

// 🔒 Componente para proteger rotas
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

  // Normaliza o tipo de usuário (tanto no contexto quanto no permitido)
  const tipoUsuarioNormalizado = usuario.tipoUsuario?.trim().toLowerCase();
  const tipoPermitidoNormalizado = tipoPermitido.trim().toLowerCase();

  // Se o tipo não for o permitido → bloqueia
  if (tipoUsuarioNormalizado !== tipoPermitidoNormalizado) {
    return <Navigate to="/" replace />;
  }

  // Se tudo ok → renderiza a página
  return <Item />;
};

// 🌐 Todas as rotas da aplicação
const Rotas = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/CadastroAdmin" element={<CadastroAdmin />} />

        <Route path="/Home" element={<Privado tipoPermitido="Admin" Item={Home} />} />
        <Route path="/Perfil" element={<Privado tipoPermitido="Admin" Item={Perfil} />} />
        <Route path="/CadastroUsuario" element={<Privado tipoPermitido="Admin" Item={CadastroUsuario} />} />
        <Route path="/Fornecedores" element={<Privado tipoPermitido="Admin" Item={Fornecedores} />} />
        <Route path="/GestaoEstoque" element={<Privado tipoPermitido="Admin" Item={GestaoEstoque} />} />
        <Route path="/LucrosGastos" element={<Privado tipoPermitido="Admin" Item={LucrosGastos} />} />
        <Route path="/AdmFuncionario" element={<Privado tipoPermitido="Admin" Item={AdmFuncionario} />} />
        <Route path="/CadastroProduto" element={<Privado tipoPermitido="Admin" Item={CadastroProduto} />} />

        <Route path="/LeituraProdutos" element={<Privado tipoPermitido="Funcionario" Item={LeituraProdutos} />} />
        <Route path="/FeedbacksClientes" element={<Privado tipoPermitido="Funcionario" Item={FeedbacksClientes} />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  );
};

export default Rotas;
