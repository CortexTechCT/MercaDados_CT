import { useState } from "react";
import "./App.css";


import {ConfirmarPagamento} from "./pages/ConfirmarPagamento/confirmarpagamento";
//import { CadastroFuncionario } from "./pages/CadastroUsuario/cadastrousuario";
//import { AdmFuncionario } from "./pages/AdmFuncionarios/admfuncionario";
//import { Login } from "./pages/Login/login";
//import { LucroEGastos } from "./pages/LucrosGastos/lucrosgastos";
//import { Home } from "./pages/Home/home";
// import { GestaoEstoque } from "./pages/GestaoEstoque/gestaoestoque";
//  import { Cadastroproduto } from "./pages/CadastroProduto/cadastroproduto";

//import { Fornecedores } from "./pages/Fornecedores/fornecedores";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <ConfirmarPagamento/>
      {/* <Login /> */}
      {/* <CadastroFuncionario /> */}
      {/* <AdmFuncionario /> */}
       {/* <LucroEGastos />  */}
      {/* <Home /> */}
      {/* <Cadastroproduto /> */}
      {/* <Fornecedores /> */}
      {/* <GestaoEstoque /> */}
    </>
  );
}

export default App;
