import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/login";
import { CadastroUsuario } from "../pages/CadastroUsuario/cadastrousuario";
import { Fornecedores } from "../pages/Fornecedores/fornecedores";
import { GestaoEstoque } from "../pages/GestaoEstoque/gestaoestoque";
import { Home } from "../pages/Home/home";
import { LucrosGastos } from "../pages/LucrosGastos/lucrosgastos";
import { Perfil } from "../pages/Perfil/Perfil.jsx";
import { useAuth } from "../pages/contexts/authContexts";
import { LeituraProdutos } from "../pages/LeituraProdutos/LeituraProdutos";
import { Navigate } from "react-router-dom";
import { AdmFuncionario } from "../pages/AdmFuncionario/admfuncionario.jsx"
import { CadastroProduto } from "../pages/CadastroProduto/cadastroProduto.jsx";
import { AuthProvider } from "../pages/contexts/authContexts";

const Privado = ({ Item, tipoPermitido }) => {
    const { usuario } = useAuth();

    if (!usuario) return <Navigate to="/" />;

    // Normaliza para comparação
    const tipoUsuarioNormalizado = usuario.tipoUsuario?.trim().toLowerCase();
    const tipoPermitidoNormalizado = tipoPermitido.trim().toLowerCase();

    if (tipoUsuarioNormalizado !== tipoPermitidoNormalizado) {
        return <Navigate to="/" />;
    }

    return <Item />;
};

const Rotas = () => {
    return (
                <Routes>
                    <Route path="/" element={<Login />} />

                    <Route path="/Home" element={<Privado tipoPermitido="Admin" Item={Home} />} />
                    <Route path="/Perfil" element={<Privado tipoPermitido="Admin" Item={Perfil} />} />
                    <Route path="/CadastroUsuario" element={<Privado tipoPermitido="Admin" Item={CadastroUsuario} />} />
                    <Route path="/Fornecedores" element={<Privado tipoPermitido="Admin" Item={Fornecedores} />} />
                    <Route path="/GestaoEstoque" element={<Privado tipoPermitido="Admin" Item={GestaoEstoque} />} />
                    <Route path="/LucrosGastos" element={<Privado tipoPermitido="Admin" Item={LucrosGastos} />} />
                    <Route path="/AdmFuncionario" element={<Privado tipoPermitido="Admin" Item={AdmFuncionario} />} />
                    <Route path="/CadastroProduto" element={<Privado tipoPermitido="Admin" Item={CadastroProduto} />} />
                    <Route path="/Perfil" element={<Privado tipoPermitido="Admin" Item={Perfil} />} />
                    <Route path="/LeituraProdutos" element={<Privado tipoPermitido="Funcionario" Item={LeituraProdutos} />} />
                </Routes>
    )
}

export default Rotas;