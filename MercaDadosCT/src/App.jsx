import { useState } from 'react'
//  import { CadastroFuncionario } from './pages/CadastroUsuario/cadastrousuario'
import './App.css'
//import {Login} from './pages/Login/login'
import { Cadastroproduto } from './pages/CadastroProduto/cadastroproduto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Cadastroproduto/>
  {/*<Login/>*/}
  {/* <CadastroFuncionario/> */}
    </>
  )
}

export default App
