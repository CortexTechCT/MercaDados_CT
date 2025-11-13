import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Login } from "../pages/Login/login";
import { CadastroUsuario } from "../pages/CadastroUsuario/cadastrousuario";
import { Fornecedores } from "../pages/Fornecedores/fornecedores";
import { GestaoEstoque } from "../pages/GestaoEstoque/gestaoestoque";
import { Home } from "../pages/Home/home";
import { LucrosGastos } from "../pages/LucrosGastos/lucrosgastos";
import { Perfil } from "../pages/Perfil/Perfil";
import { LeituraProdutos } from "../pages/LeituraProdutos/LeituraProdutos";
import { AdmFuncionario } from "../pages/AdmFuncionario/admfuncionario.jsx";
import { CadastroProduto } from "../pages/CadastroProduto/cadastroproduto.jsx";
import { CadastroAdmin } from "../pages/CadastroAdmin/cadastroAdmin.jsx";
import { useAuth } from "../pages/contexts/authContexts";


// 🔒 Componente para proteger rotas
const Privado = ({ Item, tipoPermitido }) => {
  const { usuario } = useAuth();

  if (!usuario) return <Navigate to="/" />;

  const tipoUsuarioNormalizado = usuario.tipoUsuario?.trim().toLowerCase();
  const tipoPermitidoNormalizado = tipoPermitido.trim().toLowerCase();

  if (tipoUsuarioNormalizado !== tipoPermitidoNormalizado) {
    return <Navigate to="/" />;
  }

  return <Item />;
};


// 🌐 Todas as rotas da aplicação
const Rotas = () => {
  return (
    <Routes>
      {/* 🟢 Públicas */}
      <Route path="/" element={<Login />} />
      <Route path="/CadastroAdmin" element={<CadastroAdmin />} />

      {/* 🔐 Privadas - Admin */}
      <Route path="/Home" element={<Privado tipoPermitido="Admin" Item={Home} />} />
      <Route path="/Perfil" element={<Privado tipoPermitido="Admin" Item={Perfil} />} />
      <Route path="/CadastroUsuario" element={<Privado tipoPermitido="Admin" Item={CadastroUsuario} />} />
      <Route path="/Fornecedores" element={<Privado tipoPermitido="Admin" Item={Fornecedores} />} />
      <Route path="/GestaoEstoque" element={<Privado tipoPermitido="Admin" Item={GestaoEstoque} />} />
      <Route path="/LucrosGastos" element={<Privado tipoPermitido="Admin" Item={LucrosGastos} />} />
      <Route path="/AdmFuncionario" element={<Privado tipoPermitido="Admin" Item={AdmFuncionario} />} />
      <Route path="/CadastroProduto" element={<Privado tipoPermitido="Admin" Item={CadastroProduto} />} />

      {/* 🔐 Privadas - Funcionário */}
      <Route path="/LeituraProdutos" element={<Privado tipoPermitido="Funcionario" Item={LeituraProdutos} />} />
    </Routes>
  );
};

export default Rotas;
