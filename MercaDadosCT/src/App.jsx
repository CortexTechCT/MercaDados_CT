<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import { LeituraProdutos } from "./pages/LeituraProdutos/LeituraProdutos";
import { FormaDePagamento } from "./pages/FormaDePagamento/FormaDePagamento";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LeituraProdutos />} />
      <Route path="/FormaDePagamento" element={<FormaDePagamento />} />
    </Routes>
  );
}
=======

import React from "react";
import { useState } from "react";

import "./App.css";
import Rotas from "./routes/Routes"


function App() {




  return ( 
<>
      <Rotas/>

 

    </>
  );
} 


 
>>>>>>> 6137098c2118dc53a56bf05c1df9682bbac09d22

export default App;
