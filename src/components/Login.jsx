import React from 'react'

import Content2 from '../grids/login/Lcontent2'

import '../grids/login/Login.css'


const Login = () => {
  const [isRegistrando, setIsRegistrando] = React.useState(false);
  return (
    <React.Fragment>
        <section>
            <div className='layoutLogin'>
                
                <div className='lContent2 centered'>
                  <div>
                      <h1> {isRegistrando ? "Regístrate" : "Inicia sesión"}</h1><br />
                      <form >
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