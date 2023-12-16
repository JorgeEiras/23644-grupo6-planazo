import React, { useEffect, useState } from "react";
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

import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "./fb";

export const usuarioContext = React.createContext();
export const favoritosContext = React.createContext();

function App() {
  const [usuario, setUsuario] = React.useState(null);
  const [favoritosEnFirebase, setFavoritosEnFirebase] = useState([]);

  useEffect(() => {
    try {
      app.auth().onAuthStateChanged((usuarioFirebase) => {
        console.log("ya tienes sesión iniciada con:", usuarioFirebase);
        // if (usuario != null) {
        //   console.log(usuario.user.uid);
        // } else {
        //   console.log(usuario);
        // }
      });
    } catch (error) {
      console.log("Error al obtener info de usuario", error);
    }
  }, [usuario]);

  //referencia a la db de firebase: tiene que ir a db y de ahi a la coleccion favoritos usando la funcionalidad collection de firebase
  const favoritosCollection = collection(db, "Favoritos");

  //hacer el asincronismo con la db
  const getFavoritos = async (uid) => {
    try {
      const q = query(favoritosCollection, where("usuario", "==", uid)); //aca pide que sean del usuario activo

      const data = await getDocs(q);
      const dataDocs = data.docs.map((doc) => ({ ...doc.data().favoritos })); //aca trae el array favoritos del doc de corresponde a ese usuarioID
      const favoritosIDs = dataDocs.flatMap((obj) => Object.values(obj));
      setFavoritosEnFirebase(favoritosIDs);
    } catch (error) {
      console.log("Error al conseguir los favoritos de la db", error);
    }
  };

  useEffect(() => {
    if (usuario != null) {
      getFavoritos(usuario.user.uid);
    }
  }, [usuario]);

  return (
    <>
      <favoritosContext.Provider value={favoritosEnFirebase}>
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
      </favoritosContext.Provider>
    </>
  );
}

export default App;
