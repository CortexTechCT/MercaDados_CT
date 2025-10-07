import { useState } from 'react'
<<<<<<< HEAD
//import { CadastroFuncionario } from './pages/CadastroUsuario/cadastrousuario'
import './App.css'
import { Fornecedores } from './pages/Fornecedores/fornecedores'
//import {Login} from './pages/Login/login'
=======
import { CadastroFuncionario } from './pages/CadastroUsuario/cadastrousuario'
<<<<<<< HEAD
import { Registro } from './pages/Leitura_Produtos/Registro'
import './App.css'
import { Login } from './pages/Login/login'
=======
import { AdmFuncionario } from './pages/AdmFuncionarios/admfuncionario'
import './App.css'
import {Login} from './pages/Login/login'
import { LucroEGastos } from './pages/LucrosGastos/lucrosgastos'
import { Home } from './pages/Home/home'
import { GestaoEstoque } from './pages/GestaoEstoque/gestaoestoque'
>>>>>>> 1af5f47b98e3ecc4e553498649c9633db698071b
>>>>>>> d2aaa592698c6aab7fd792af2b21dfeaf717f11d

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<<<<<<< HEAD
      <Registro />
      {/* <CadastroFuncionario/> */}
      {/* <Login /> */}
=======
<<<<<<< HEAD
    <Fornecedores/>
  {/*<Login/>*/}
  {/*<CadastroFuncionario/>*/}
=======
    {<GestaoEstoque/>}
    {/* {<Home/>} */}
    {/* {<LucroEGastos/>}      */}
    {/* {<Login/>} */}
{/* {<AdmFuncionario/>} */}
  {/* <CadastroFuncionario/> */}
>>>>>>> 1af5f47b98e3ecc4e553498649c9633db698071b
>>>>>>> d2aaa592698c6aab7fd792af2b21dfeaf717f11d
    </>
  )
}

export default App
