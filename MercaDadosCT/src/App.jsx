<<<<<<< HEAD
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
=======
<<<<<<< HEAD
import { useState } from 'react'
<<<<<<< HEAD
import './App.css'

import { CadastroFuncionario } from './pages/CadastroUsuario/cadastrousuario'
import { Registro } from './pages/Leitura_Produtos/Registro'
import { Fornecedores } from './pages/Fornecedores/fornecedores'
import { Login } from './pages/Login/login'
=======
import { CadastroFuncionario } from './pages/CadastroUsuario/cadastrousuario'
>>>>>>> 3c62d14aa681582fb5e49b2f9a48545482ff2837
import { AdmFuncionario } from './pages/AdmFuncionarios/admfuncionario'
import { LucroEGastos } from './pages/LucrosGastos/lucrosgastos'
import { Home } from './pages/Home/home'
import { GestaoEstoque } from './pages/GestaoEstoque/gestaoestoque'
<<<<<<< HEAD
import {Pagamento} from './pages/FormaDePagamento/Pagamento'
=======
import { Fornecedores } from './pages/Fornecedores/fornecedores'

=======
// import { useState } from 'react'
import './App.css'

import Rotas from "./routes/Routes"
>>>>>>> 77fa97c7b1a3a3307414c63821d325493f3a572d
>>>>>>> 3c62d14aa681582fb5e49b2f9a48545482ff2837

function App() {
>>>>>>> 4d8f8f03e7954e506adc8db84b3091e42a65f6ff


  return ( 
    <>
<<<<<<< HEAD
    <ConfirmarPagamento/>
      {/* <Login /> */}
      {/* <CadastroFuncionario /> */}
      {/* <AdmFuncionario /> */}
       {/* <LucroEGastos />  */}
      {/* <Home /> */}
      {/* <Cadastroproduto /> */}
      {/* <Fornecedores /> */}
      {/* <GestaoEstoque /> */}
=======
<<<<<<< HEAD
      {/* Aqui você escolhe qual página renderizar */}
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <CadastroFuncionario /> */}
      <Registro />
      {/*<Pagamento/>*/}
      {/* <Fornecedores /> */}
      {/* <AdmFuncionario /> */}
      {/* <LucroEGastos /> */}
      {/*<GestaoEstoque />*/}
=======
<<<<<<< HEAD

    <Fornecedores/>
    {/*<Login/>*/}
    {/*<CadastroFuncionario/>*/}
    {/*<GestaoEstoque/>*/}
    {/* {<Home/>} */}
    {/* {<LucroEGastos/>}      */}
    {/* {<Login/>} */}
    {/* {<AdmFuncionario/>} */}
    {/* <CadastroFuncionario/> */}

=======
      <Rotas /> 
      {/* <Home/> */}
      {/* <AdmFuncionario/> */}
      {/* <p>aaaaaaaaaaaaaa</p> */}
>>>>>>> 77fa97c7b1a3a3307414c63821d325493f3a572d
>>>>>>> 3c62d14aa681582fb5e49b2f9a48545482ff2837
>>>>>>> 4d8f8f03e7954e506adc8db84b3091e42a65f6ff
    </>
  );
}

export default App;
