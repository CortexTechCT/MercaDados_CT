import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Login} from "../pages/Login/login";
import {CadastroUsuario} from "../pages/CadastroUsuario/CadastroUsuario";
// import {CadastroProduto} from "../pages/CadastroProduto/cadastroproduto";
import {Fornecedores} from "../pages/Fornecedores/fornecedores";
import {AdmFuncionario} from "../pages/AdmFuncionarios/admfuncionario";
import {GestaoEstoque} from "../pages/GestaoEstoque/gestaoestoque";
import {Home} from "../pages/Home/home";
import {LucrosGastos} from "../pages/LucrosGastos/LucrosGastos";
import {Perfil} from "../pages/Perfil/Perfil";
import { LeituraProdutos } from "../pages/Leitura_Produtos/LeituraProdutos";

<<<<<<< HEAD
const Rotas = () => {
  return (
  
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/CadastroUsuario" element={<CadastroUsuario />} />
        <Route path="/Fornecedores" element={<Fornecedores />} />
        <Route path="/GestaoEstoque" element={<GestaoEstoque />} />
        <Route path="/LucrosGastos" element={<LucrosGastos />} />
        <Route path="/AdmFuncionarios" element={<AdmFuncionario />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Leitura" element={<LeituraProdutos />} />
        <Route path="/LeituraProdutos" element={<LeituraProdutos />} />
      </Routes>
    // </BrowserRouter>
  );
};
=======

 const Rotas = () => {  
    return ( 
        // <BrowserRouter> 
            <Routes>
                <Route path="/" element={<Login />} exact />
                    <Route path="/Home" element={<Home />}  />
                    <Route path="/CadastroUsuario" element={<CadastroUsuario />} />
                    <Route path="/Fornecedores" element={<Fornecedores/>} />
                    <Route path="/GestaoEstoque" element={<GestaoEstoque/>}/>
                    <Route path="/LucrosGastos" element={<LucrosGastos/>} />
                    <Route path="/AdmFuncionarios" element={<AdmFuncionario/>} />
                    <Route path="/Perfil" element={<Perfil/>} />
            </Routes>
        // </BrowserRouter>
    )
}
>>>>>>> b0050fe402dcb4cc50d02aa37bfa7cfc02f1c679

export default Rotas;

