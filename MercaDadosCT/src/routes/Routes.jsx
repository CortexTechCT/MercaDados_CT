import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/login";
import { CadastroUsuario } from "../pages/CadastroUsuario/cadastrousuario";
import { Cadastroproduto } from "../pages/CadastroProduto/cadastroproduto";
import { Fornecedores } from "../pages/Fornecedores/fornecedores";
import { AdmFuncionario } from "../pages/AdmFuncionario/admfuncionario";
import { GestaoEstoque } from "../pages/GestaoEstoque/gestaoestoque";
import { Home } from "../pages/Home/home";
import { LucrosGastos } from "../pages/LucrosGastos/LucrosGastos";
import { Perfil } from "../pages/Perfil/Perfil";
import {FeedbacksClientes} from "../pages/FeedbacksClientes/feedbacksclientes"
const Rotas = () => {
  return (
   //<BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/CadastroUsuario" element={<CadastroUsuario/>} /> 
        <Route path="/CadastroProduto" element={<Cadastroproduto/>} />
        <Route path="/Fornecedores" element={<Fornecedores/>} />
        <Route path="/GestaoEstoque" element={<GestaoEstoque/>} />
        <Route path="/LucrosGastos" element={<LucrosGastos/>} />
        <Route path="/AdmFuncionarios" element={<AdmFuncionario/>} />
        <Route path="/FeedbacksClientes" element={<FeedbacksClientes/>} />
        <Route path="/Perfil" element={<Perfil/>} />
      </Routes>
   // </BrowserRouter>
  );
};

export default Rotas;
