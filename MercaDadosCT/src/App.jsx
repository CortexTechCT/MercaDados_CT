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

export default App;
