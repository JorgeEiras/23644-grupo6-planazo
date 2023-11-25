import React from "react";
import { app } from "../fb";

import Content2 from '../grids/login/Lcontent2'

import '../grids/login/Login.css'


const Login = (props) => {
  //estado ..se está registrando o no
  const [isRegistrando, setIsRegistrando] = React.useState(false);

  const crearUsuario = (correo, password) => {
    app
      .auth()
      .createUserWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        console.log("usuario creado:", usuarioFirebase);
        props.setUsuario(usuarioFirebase);
      });
  };

  const iniciarSesion = (correo, password) => {
    app
      .auth()
      .signInWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        console.log("sesión iniciada con:", usuarioFirebase.user);
        props.setUsuario(usuarioFirebase);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const correo = e.target.emailField.value;
    const password = e.target.passwordField.value;
    
    if (isRegistrando) {
      crearUsuario(correo, password);
    }

    if (!isRegistrando) {
      iniciarSesion(correo, password);
    }
  };

  return (
    <React.Fragment>
        <section>
            <div className='layoutLogin'>
                
                <div className='lContent2 centered'>
                  <div>
                      <h1> {isRegistrando ? "Regístrate" : "Inicia sesión"}</h1><br />
                      <form onSubmit={submitHandler} >
                        <label htmlFor="emailField"> Correo </label><br />
                        <input type="email" id="emailField" /><br />
                        <label htmlFor="passwordField"> Contraseña </label><br />
                        <input type="password" id="passwordField" /><br /><br />
                        <button type="submit">
                          {" "}
                          {isRegistrando ? "Regístrate" : "Inicia sesión"}{" "}
                        </button>
                      </form>
                      <br /><br />
                      <button onClick={() => setIsRegistrando(!isRegistrando)}>
                        {isRegistrando
                          ? "Iniciar sesión"
                          : "Registrate gratis!"}
                      </button>
                  </div>
                </div>
                
            </div>
        </section>
    </React.Fragment>
  )
}

export default Login