import { useState } from 'react'
import { CadastroFuncionario } from './pages/CadastroUsuario/cadastrousuario'
import './App.css'
import {Login} from './pages/Login/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

  <CadastroFuncionario/>
    </>
  )
}

export default App
