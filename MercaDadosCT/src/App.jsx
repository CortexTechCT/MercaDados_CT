<<<<<<< HEAD
import React, { useState } from "react";
import "./App.css";

// Rotas principais
import Rotas from "./routes/Routes";

// Páginas (deixa os outros comentados pra você ativar quando quiser)
import { Cadastroproduto } from "./pages/CadastroProduto/cadastroproduto";
// import { LeituraProdutos } from "./pages/Leitura_Produtos/LeituraProdutos";
// import { FormaDePagamento } from "./pages/FormaDePagamento/FormaDePagamento";
// import { CadastroFuncionario } from "./pages/CadastroUsuario/cadastrousuario";
// import { AdmFuncionario } from "./pages/AdmFuncionarios/admfuncionario";
// import { Login } from "./pages/Login/login";
// import { LucroEGastos } from "./pages/LucrosGastos/lucrosgastos";
// import { Home } from "./pages/Home/home";
// import { GestaoEstoque } from "./pages/GestaoEstoque/gestaoestoque";
// import { Fornecedores } from "./pages/Fornecedores/fornecedores";

function App() {
  // Exemplo de uso do estado
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Ative apenas o que for usar */}
      {/* <GestaoEstoque /> */}
      {/* <Fornecedores /> */}
      {/* <AdmFuncionario /> */}
      {/* <LeituraProdutos /> */}
      {/* <FormaDePagamento /> */}
      <Cadastroproduto />
      {/* Ou use rotas */}
      {/* <Rotas /> */}
    </>
  );
}
=======
<<<<<<< HEAD
import React from "react";
import "./App.css";
import { LeituraProdutos } from "./pages/Leitura_Produtos/LeituraProdutos";

function App() {
  return (
    <>
      {/* Página principal */}
      <LeituraProdutos />
=======
>>>>>>> b4fa9d0bf73ff6edab18605a35754a7da2b51bbd

      {/* <Rotas/> */}

<<<<<<< HEAD
=======

function App() {



  return ( 
<>
      <Rotas/>

 

>>>>>>> b4fa9d0bf73ff6edab18605a35754a7da2b51bbd
    </>
  );
} 

>>>>>>> 5a90c6d300864f8b24180c2eaef5697f9bfb712f

export default App;
