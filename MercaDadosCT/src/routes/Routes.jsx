<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";

import { Login } from "../pages/Login/login";
import { CadastroUsuario } from "../pages/CadastroUsuario/CadastroUsuario";
import { Fornecedores } from "../pages/Fornecedores/fornecedores";
import { AdmFuncionario } from "../pages/AdmFuncionario/admfuncionario";
import { GestaoEstoque } from "../pages/GestaoEstoque/gestaoestoque";
import { Home } from "../pages/Home/home";
import { LucrosGastos } from "../pages/LucrosGastos/LucrosGastos";
import { Perfil } from "../pages/Perfil/Perfil";
import { LeituraProdutos } from "../pages/LeituraProdutos/leituraProdutos";
import { FormaDePagamento } from "../pages/FormaDePagamento/FormaDePagamento";

const Rotas = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      {/* <Route path="/Home" element={<Home />} /> */}
      {/* <Route path="/CadastroUsuario" element={<CadastroUsuario />} /> */}
      {/* <Route path="/Fornecedores" element={<Fornecedores />} /> */}
      {/* <Route path="/GestaoEstoque" element={<GestaoEstoque />} /> */}
      {/* <Route path="/LucrosGastos" element={<LucrosGastos />} />  */}
      {/* <Route path="/AdmFuncionarios" element={<AdmFuncionario />} /> */}
      {/* <Route path="/Perfil" element={<Perfil />} /> */}
      <Route path="/LeituraProdutos" element={<LeituraProdutos />}/>
      {/* <Route path="/FormaDePagamento" element={<FormaDePagamento />}/> */}
    </Routes>
  );
};
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Login} from "../pages/Login/login";
import {CadastroUsuario} from "../pages/CadastroUsuario/cadastrousuario";
import {Fornecedores} from "../pages/Fornecedores/fornecedores";
import {AdmFuncionario} from "../pages/AdmFuncionarios/admfuncionario";
import {GestaoEstoque} from "../pages/GestaoEstoque/gestaoestoque";
import {Home} from "../pages/Home/home";
import {LucrosGastos} from "../pages/LucrosGastos/LucrosGastos";
import {Perfil} from "../pages/Perfil/Perfil";



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


     
>>>>>>> 6137098c2118dc53a56bf05c1df9682bbac09d22

export default Rotas;