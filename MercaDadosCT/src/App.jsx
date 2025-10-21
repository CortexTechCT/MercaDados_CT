<<<<<<< HEAD

import React from "react";

import { useState } from "react";

=======
import React from "react";
import { useState } from "react";
>>>>>>> 9eb3cc9ca34842c1cb80d025abe1badc4f982087
import "./App.css";
import Rotas from "./routes/Routes"
import { LeituraProdutos } from "./pages/Leitura_Produtos/LeituraProdutos";

function App() {
<<<<<<< HEAD



  return ( 
<>
      <Rotas/>

 

    </>
  );
} 
=======
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
>>>>>>> 9eb3cc9ca34842c1cb80d025abe1badc4f982087

export default App;
