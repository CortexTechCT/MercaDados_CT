import Login from"../pages/login/Login"
import {BrowserRouter, Route, Routes} from "react-router-dom";

const Rotas  = () =>{
   return(
      <BrowserRouter>
   
       <Routes>
   
         <Route path ="/" element = {<Login/>} exact/>

       </Routes>
    </BrowserRouter>
   )
}
export default Rotas;