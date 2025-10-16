import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import {Login} from "../pages/Login/login";
import {CadastroUsuario} from "../pages/CadastroUsuario/CadastroUsuario";
import {CadastroProduto} from "../pages/CadastroProduto/cadastroproduto";
import {Fornecedores} from "../pages/Fornecedores/fornecedores";
import {AdmFuncionario} from "../pages/AdmFuncionarios/AdmFuncionario";
import {GestaoEstoque} from "../pages/GestaoEstoque/gestaoestoque";
import {Home} from "../pages/Home/home";
import {LucrosGastos} from "../pages/LucrosGastos/LucrosGastos";
import {Perfil} from "../pages/Perfil/Perfil";
=======
import { Login } from "../pages/Login/login";
import { CadastroUsuario } from "../pages/CadastroUsuario/cadastrousuario";
import { Fornecedores } from "../pages/Fornecedores/fornecedores";
import { AdmFuncionario } from "../pages/AdmFuncionarios/admfuncionario";
import { GestaoEstoque } from "../pages/GestaoEstoque/gestaoestoque";
import { Home } from "../pages/Home/home";
import { LucrosGastos } from "../pages/LucrosGastos/lucrosgastos";
import { Perfil } from "../pages/Perfil/Perfil";
import { LeituraProdutos } from "../pages/Leitura_Produtos/LeituraProdutos";
<<<<<<< HEAD
=======
>>>>>>> d9a89bb51add40e46639175e29bcc16188b10516
>>>>>>> a9bb1511b6aa4c6212b49ed0875ae22f9c1bc2b3

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
<<<<<<< HEAD
      </Routes> 

=======
<<<<<<< HEAD
        <Route path="/Leitura" element={<LeituraProdutos />} />
=======
        <Route path="/LeituraProdutos" element={<LeituraProdutos />} />
>>>>>>> a9bb1511b6aa4c6212b49ed0875ae22f9c1bc2b3
      </Routes>
    // </BrowserRouter>
>>>>>>> 8f28868e5a8d696a57a6f7a3f1184782b0e22c2c
  );
};

<<<<<<< HEAD
 const Rotas = () => {  
    return ( 
        // <BrowserRouter> 
            <Routes>
                <Route path="/" element={<Login />} exact />
                    <Route path="/Home" element={<Home />}  />
                    <Route path="/CadastroUsuario" element={<CadastroUsuario />} />
                    <Route path="/CadastroProduto" element={<CadastroProduto />} />
                    <Route path="/Fornecedores" element={<Fornecedores/>} />
                    <Route path="/GestaoEstoque" element={<GestaoEstoque/>}/>
                    <Route path="/LucrosGastos" element={<LucrosGastos/>} />
                    <Route path="/AdmFuncionarios" element={<AdmFuncionario/>} />
                    <Route path="/Perfil" element={<Perfil/>} />
            </Routes>
        // </BrowserRouter>
    )
}
export default Rotas;
=======
export default Rotas;
>>>>>>> d9a89bb51add40e46639175e29bcc16188b10516
