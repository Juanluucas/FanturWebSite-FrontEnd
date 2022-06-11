import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import CatalogoPaquetes from "./views/CatalogoPaquetes";
import Home from "./views/Home";
import Conocenos from "./views/Conocenos";
import Carro from "./views/Carro";
import Login from "./views/Login";
import AddPaquetes from "./views/AddPaquetes";

function App() {
  return (
    <div>
      
      <BrowserRouter>
          <Routes>

           
            <Route path="/" element={<Home/>} />
            <Route path="/CatalogoPaquetes" element={<CatalogoPaquetes/>} />
            <Route path="/Conocenos" element={<Conocenos/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/carro" element={<Carro/>} />
            <Route path="/AddPaquetes" element={<AddPaquetes/>} />

          </Routes>
      </BrowserRouter>


     
      </div>
  );
}

export default App;
