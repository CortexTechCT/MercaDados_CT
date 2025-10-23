import { AuthProvider } from "../src/pages/contexts/authContexts";
import Rotas from "./routes/Routes.jsx";

function App() {
  return (
    <AuthProvider>
      <Rotas />
    </AuthProvider>
  );
}

export default App;