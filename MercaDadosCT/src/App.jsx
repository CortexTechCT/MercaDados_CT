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
    </>
  );
}

export default App;
