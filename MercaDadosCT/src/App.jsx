import { useState } from 'react'
import './App.css'

import { CadastroFuncionario } from './pages/CadastroUsuario/cadastrousuario'
import { Registro } from './pages/Leitura_Produtos/Registro'
import { Fornecedores } from './pages/Fornecedores/fornecedores'
import { Login } from './pages/Login/login'
import { AdmFuncionario } from './pages/AdmFuncionarios/admfuncionario'
import { LucroEGastos } from './pages/LucrosGastos/lucrosgastos'
import { Home } from './pages/Home/home'
import { GestaoEstoque } from './pages/GestaoEstoque/gestaoestoque'
import {Pagamento} from './pages/FormaDePagamento/Pagamento'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Aqui você escolhe qual página renderizar */}
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <CadastroFuncionario /> */}
      <Registro />
      {/*<Pagamento/>*/}
      {/* <Fornecedores /> */}
      {/* <AdmFuncionario /> */}
      {/* <LucroEGastos /> */}
      {/*<GestaoEstoque />*/}
    </>
  )
}

export default App
