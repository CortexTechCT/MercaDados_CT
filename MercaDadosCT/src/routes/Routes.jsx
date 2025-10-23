
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Login} from "../pages/Login/login";
import {CadastroUsuario} from "../pages/CadastroUsuario/cadastrousuario";
import {Fornecedores} from "../pages/Fornecedores/fornecedores";
import {AdmFuncionario} from "../pages/AdmFuncionario/admfuncionario";
import {GestaoEstoque} from "../pages/GestaoEstoque/gestaoestoque";
import {Home} from "../pages/Home/home";
import {LucrosGastos} from "../pages/LucrosGastos/LucrosGastos";
import {Perfil} from "../pages/Perfil/Perfil";
import {LeituraProdutos} from "../pages/LeituraProdutos/leituraProdutos"
import {FeedbacksClientes} from "../pages/FeedbacksClientes/feedbacksclientes"



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
                    <Route path="/LeituraProdutos" element={<LeituraProdutos/>} />
                    <Route path="/Feedback" element={<FeedbacksClientes/>} />
            </Routes>
        // </BrowserRouter>
    )
}



export default Rotas;