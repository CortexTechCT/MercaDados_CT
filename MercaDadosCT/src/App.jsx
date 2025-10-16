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

export default App;
