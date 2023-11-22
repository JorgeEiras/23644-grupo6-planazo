import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { app } from './fb'
import './App.css';

import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import Favoritos from './components/Favoritos';
import Login from './components/Login';
import Registro from './components/Registro';
import Footer from './components/Footer';


function App() {

  const [usuario, setUsuario] = React.useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged((usuarioFirebase) => {
      console.log("ya tienes sesión iniciada con:", usuarioFirebase);
      setUsuario(usuarioFirebase);
    });
  }, []);

  let alter = usuario? <Favoritos /> : <Inicio />

  return (
    
    <>    
    <Navbar usuario={usuario}/>
    <div>
      <Routes>
        <Route path="/contacto" element={<Contacto/>}></Route>
        <Route path="/favoritos" element={<Favoritos/>}></Route>
        <Route path="/" element= {alter}></Route>
        <Route path="/login" element={<Login setUsuario={setUsuario} />}></Route>
        <Route path="/registro" element={<Registro/>}></Route>
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;

//<Route path="/" element= {<Inicio />}></Route> 