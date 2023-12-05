import React from "react";
import { app } from "../fb";

// import Content2 from '../grids/login/Lcontent2'

import '../grids/login/Login.css'

import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

const Login = (props) => {
  
  const [isRegistrando, setIsRegistrando] = React.useState(false);

  const crearUsuario = (correo, password) => {
    app
      .auth()
      .createUserWithEmailAndPassword(correo, password)
      .then(result => {
        return result.user.updateProfile({
          displayName: document.getElementById("userName").value
        });
      })
      .then(usuarioFirebase => {
        console.log("usuario creado:", usuarioFirebase);
        props.setUsuario(usuarioFirebase);
        mostrarAlerta("Registro exitoso", "success");
      })
      .catch(error => {
        console.error("Error al registrar usuario:", error.message);
        mostrarMensajeError(error.message);
      });
  };


  const iniciarSesion = (correo, password) => {
    app
      .auth()
      .signInWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {        
        console.log("sesión iniciada con:", usuarioFirebase.user);
        props.setUsuario(usuarioFirebase);
        mostrarAlerta("Bienvenido " + usuarioFirebase.user.displayName, "success");        
      })
      .catch((error) => {
        console.error("Error al iniciar sesión:", error.message);
        mostrarAlerta("Credenciales incorrectas. Verifica los datos ingresados", "error");
      });
  };


  const mostrarMensajeError = (mensaje) => {
    let mensajePersonalizado = "Error desconocido"; // Mensaje predeterminado

    if (mensaje.includes("auth/weak-password")) {
      mensajePersonalizado = "La contraseña debe tener al menos 6 caracteres.";
    } else if (mensaje.includes("auth/email-already-in-use")) {
      mensajePersonalizado = "La dirección de correo electrónico ya está en uso.";
    } else if (mensaje.includes("auth/invalid-email")) {
      mensajePersonalizado = "La dirección de correo electrónico no es válida.";
    }  

    // Se pueden agregar más casos según sea necesario para otros posibles errores de Firebase

    mostrarAlerta(mensajePersonalizado, "error");
  };

  const mostrarAlerta = (mensaje, tipo) => {
    Swal.fire({
      /*title: mensaje,*/
      text: mensaje,
      icon: tipo,
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#55AECA",
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
        
          <Link to="/"><img className="plane" src="./favicon.svg" alt="Planazo" /></Link>

            {isRegistrando ? (
              <div className="container-form">
                <h1 className="tituloLogin">Regístrate</h1>
                <h3 className="subTituloLogin">Totalmente gratis!! </h3>

                <form onSubmit={submitHandler} className="formInicioSesion" >
                  <label htmlFor="userName"></label>
                  <input type="text" className="form-control" id="userName" placeholder="Nombre de usuario" /><br />

                  <label htmlFor="emailField"></label>
                  <input type="email" className="form-control" id="emailField" placeholder="Email" /><br />

                  <label htmlFor="passwordField"> </label>
                  <input type="password" className="form-control" id="passwordField" placeholder="Contraseña" /><br />

                  <button type="submit" className="btn btnIniciarSesion">Crear mi cuenta</button>
              </form>
              
                <p className="textoRegistrate">Ya tengo una cuenta.
                  <button onClick={() => setIsRegistrando(!isRegistrando)} className="btn btnRegistrate">
                    {isRegistrando
                      ? "Iniciar sesión"
                      : "Registrarme"}
                  </button></p>
              </div>
          ) : (
              <div className="container-form">
                <h1 className="tituloLogin">Inicia sesión</h1>
                <h3 className="subTituloLogin">Con tu email y contraseña</h3>

                <form onSubmit={submitHandler} className="formInicioSesion" >
                  <label htmlFor="emailField"></label>
                  <input type="email" className="form-control" id="emailField" placeholder="Email" /><br />
                              
                  <label htmlFor="passwordField"> </label>
                  <input type="password" className="form-control" id="passwordField" placeholder="Contraseña" /><br />

                  <button type="submit" className="btn btnIniciarSesion">Iniciar sesión</button>
                </form>

                <p className="textoRegistrate">No tengo cuenta.
                  <button onClick={() => setIsRegistrando(!isRegistrando)} className="btn btnRegistrate">
                    {isRegistrando
                      ? "Iniciar sesión"
                      :  "Registrarme"}
                  </button></p>
              </div>
            )}


            
          </div>

      </section>
    </React.Fragment>
  )
}

export default Login