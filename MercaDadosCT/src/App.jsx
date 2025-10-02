import { useState } from 'react'
import { CadastroFuncionario } from './pages/CadastroUsuario/cadastrousuario'
import { Registro } from './pages/Leitura_Produtos/Registro'
import './App.css'
import { Login } from './pages/Login/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Registro />
      {/* <CadastroFuncionario/> */}
      {/* <Login /> */}
    </>
  )
}

export default App
