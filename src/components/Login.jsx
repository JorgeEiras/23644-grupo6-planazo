import React from "react";
import { app } from "../fb";

// import Content2 from '../grids/login/Lcontent2'

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
                
                <div className='lContent2'>
                  <div>
                      <h1 className="tituloLogin"> {isRegistrando ? "Regístrate" : "Inicia sesión"}</h1>
                      <h3 className="subTituloLogin">Ingresa con tu email y contraseña</h3>
                      <form onSubmit={submitHandler} className="inicioSesion" >
                        <label htmlFor="emailField"></label>
                        <input type="email" id="emailField" placeholder="Email" /><br />
                        <label htmlFor="passwordField"> </label>
                        <input type="password" id="passwordField" placeholder="Contraseña"/><br />
                        <button type="submit" className="btn btnIniciarSesion">
                          {" "}
                          {isRegistrando ? "Regístrate" : "Inicia sesión"}{" "}
                        </button>
               
                      </form>
                              <p className="textoRegistrate">No tengo cuenta.
                      <button onClick={() => setIsRegistrando(!isRegistrando)} className="btn btnRegistrate">
                        {isRegistrando
                          ? "Iniciar sesión"
                          : "Registrarme"}
                      </button></p>  
                  
                  </div>
                </div>
                
            </div>
        </section>
    </React.Fragment>
  )
}

export default Login