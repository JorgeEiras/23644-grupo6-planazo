import React, { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { app } from "./fb";

import Contacto from "./components/Contacto";
import Favoritos from "./components/Favoritos";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

import "./App.css";
import "./grids/Footer/Footer.css";



export const usuarioContext = React.createContext();


function App() {
  const [usuario, setUsuario] = React.useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged((usuarioFirebase) => {
      console.log("ya tienes sesión iniciada con:", usuarioFirebase);
      console.log(usuario);
    });
  }, [usuario]);

  return (
    <>
      <usuarioContext.Provider value={usuario}>

        <Navbar usuario={usuario} setUsuario={setUsuario} />

        <div>
          <Routes>
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="/favoritos" element={<Favoritos />}></Route>
            <Route path="/" element={<Inicio />}></Route>
            <Route
              path="/login"
              element={<Login setUsuario={setUsuario} />}
            ></Route>
          </Routes>
        </div>

        <Footer />

      </usuarioContext.Provider>
    </>
  );
}

export default App;

// let alter = usuario ? <Favoritos /> : <Inicio />;
// <Route path="/" element={alter}></Route>
// en realidad esto no va porque la ruta inicio siempre va a inicio
