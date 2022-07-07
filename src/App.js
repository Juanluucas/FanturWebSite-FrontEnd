import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import CatalogoPaquetes from "./views/CatalogoPaquetes";
import Home from "./views/Home";
import Conocenos from "./views/Conocenos";
import Carroform from "./components/Carro/carroform";
import Login from "./components/LoginForm/Login";
import AddPaquetes from "./views/AddPaquetes";
import EditarPaquetes from "./views/EditarPaquetes";
import PostForm from "./views/PostForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";

function App() {
  return (
    <div>
      
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/CatalogoPaquetes" element={<CatalogoPaquetes/>} />
            <Route path="/Conocenos" element={<Conocenos/>} />
            <Route path="/Login" element={<Login/>} />      
            <Route path="/AddPaquetes" element={<AddPaquetes/>} />
            <Route path="/EditarPaquetes" element={<EditarPaquetes/>} />
            <Route path="/PostForm" element={<PostForm/>} />
            <Route path="/register" element={<RegisterForm/>} />
            <Route path="/carroform" element={<Carroform/>} />

          </Routes>
      </BrowserRouter>


     
      </div>
  );
}

export default App;
