import React from 'react';
import './App.css';
import Contacto from './components/Contacto';
import Favoritos from './components/Favoritos';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Registro from './components/Registro';
import { Routes, Route } from 'react-router-dom'
import { app } from './fb'
function App() {

  const [usuario, setUsuario] = React.useState(false);
  let alter = usuario? <Inicio /> : <Login />

  return (
    
    <>
    
    <Navbar />
    <div>
      
      <Routes>
        <Route path="/contacto" element={<Contacto/>}></Route>
        <Route path="/favoritos" element={<Favoritos/>}></Route>
        <Route path="/" element= {alter}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/registro" element={<Registro/>}></Route>
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;

//<Route path="/" element= {<Inicio />}></Route> 