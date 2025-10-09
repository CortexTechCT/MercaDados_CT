<<<<<<< HEAD

// import { useState } from 'react'

// import {CadastroProdutos} from "./pages/CadastroProduto/cadastroproduto"
// import { FeedbacksClientes } from "./pages/FeedbacksClientes/feedbacksclientes";
import Rotas from "./routes/Routes"

// import {Registro} from "./pages/Leitura_Produtos/Registro"

  
function App() {



  return ( 
    <>


{/* <FeedbacksClientes/>   */}
  {/* <Registro/> */}


      <Rotas /> 
      {/* <CadastroProdutos/> */}

=======
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
>>>>>>> bda8aa5bade5a7e7dd29fb9262db973c4f139f4b
    </>
  );
}

export default App;
