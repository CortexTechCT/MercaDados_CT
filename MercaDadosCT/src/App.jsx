<<<<<<< HEAD
import { useState } from "react";
import "./App.css";




// import { CadastroFuncionario } from "./pages/CadastroUsuario/cadastrousuario";
//import { AdmFuncionario } from "./pages/AdmFuncionarios/admfuncionario";
// import { Login } from "./pages/Login/login";
// import { LucroEGastos } from "./pages/LucrosGastos/lucrosgastos";
// import { Home } from "./pages/Home/home";
//  import { GestaoEstoque } from "./pages/GestaoEstoque/gestaoestoque";
 import { Cadastroproduto } from "./pages/CadastroProduto/cadastroproduto";
// import { Fornecedores } from "./pages/Fornecedores/fornecedores";
// import Rotas from "./routes/Routes"; // se for usar rotas futuramente

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    {/* <GestaoEstoque/> */}
    {/* <Fornecedores/> */}
     {/* <AdmFuncionario/> */}
<Cadastroproduto/>
=======
<<<<<<< HEAD
import React from "react";
import "./App.css";
import { LeituraProdutos } from "./pages/Leitura_Produtos/LeituraProdutos";
import { FormaDePagamento } from "./pages/FormaDePagamento/FormaDePagamento";

function App() {
  return (
    <>
      {/* Página principal */}
      <LeituraProdutos />
      {/* < FormaDePagamento/> */}
=======

import { useState } from "react";
import "./App.css";
import Rotas from "./routes/Routes"

function App() {



  return ( 
    <>
      <Rotas/>

>>>>>>> f5c072692021760268630caf0d25aa32dd99e7c8
>>>>>>> d9a89bb51add40e46639175e29bcc16188b10516
    </>
  );
} 

export default App;
