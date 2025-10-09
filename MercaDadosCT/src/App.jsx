import React from "react";
import "./App.css";

// Páginas do sistema
import { LeituraProdutos } from "./pages/Leitura_Produtos/LeituraProdutos";

function App() {
  return (
    <>
      {/* Renderize a página principal aqui */}
      <LeituraProdutos />
      {/* <Rotas /> */}
    </>
  );
}

export default App;
