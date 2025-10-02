import { useState } from 'react'
//import { CadastroFuncionario } from './pages/CadastroUsuario/cadastrousuario'
import './App.css'
import { Fornecedores } from './pages/Fornecedores/fornecedores'
//import {Login} from './pages/Login/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Fornecedores/>
  {/*<Login/>*/}
  {/*<CadastroFuncionario/>*/}
    </>
  )
}

export default App
