import React from "react";
import { useState } from "react";
import "./App.css";
import Rotas from "./routes/Routes"
import { LeituraProdutos } from "./pages/Leitura_Produtos/LeituraProdutos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Página principal */}
      <LeituraProdutos />
      {/* <Rotas/> */}
      </>
  )
}
      <Rotas /> 

export default App;
