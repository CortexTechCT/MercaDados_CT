import { useState } from 'react'
import { CadastroFuncionario } from './pages/CadastroUsuario/cadastrousuario'
import { AdmFuncionario } from './pages/AdmFuncionarios/admfuncionario'
import './App.css'
import {Login} from './pages/Login/login'
import { LucroEGastos } from './pages/LucrosGastos/lucrosgastos'
import { Home } from './pages/Home/home'
import { GestaoEstoque } from './pages/GestaoEstoque/gestaoestoque'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {<GestaoEstoque/>}
    {/* {<Home/>} */}
    {/* {<LucroEGastos/>}      */}
    {/* {<Login/>} */}
{/* {<AdmFuncionario/>} */}
  {/* <CadastroFuncionario/> */}
    </>
  )
}

export default App
