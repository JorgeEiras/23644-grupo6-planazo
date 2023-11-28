import React, { Link } from 'react-router-dom';
import { app } from "../fb";

export default function Navbar(props) {
  const cerrarSesion = () => {
    if (props.usuario) {
      app.auth().signOut();
    }
  };

  return (
    <nav className='navbar navbar-expand-lg'>
      <div className="container-fluid">
        <Link to="/"><img src="./imagenes/logo-misviajes.png" alt="Mis planes" /></Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
          <ul className="nav nav-underline navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" id="navLink">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/favoritos" className="nav-link" id="navLink">Favoritos</Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link" id="navLink">Contacto</Link>
            </li>
            <li className="nav-item">
              {props.usuario ? (
                <Link to="/" onClick={cerrarSesion} className="btn" id="navBtnCerrarSesion">Cerrar Sesión</Link>
                ) : (
                <Link to="/login" className="btn" id="navBtnInicioSesion">Iniciar Sesión</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}








/*
// esta parte no sé por qué esta toda comentada, pero me tiraba conflicto asi que la dejo comentada señalando el codigo viejo y el que dice que viene de JorgeEiras
import { Link } from 'react-router-dom'
import React from 'react'

export default function Navbar(props) {



  const cerrarSesion = () => {
    props.usuario? app.auth().signOut() : "";
  };

  return (
     //codigo viejo
    <div className='navbar navbar-expand-lg'>
      <div className="container-fluid">
     // hasta aca llega el codigo viejo
     // codigo nuevo jorgeEiras
    <nav className='navbar'>
      <Link to="/"><img src="./imagenes/logo-misviajes.png" alt="Mis planes" /></Link>
      
      <ul class="nav nav-underline">
        <li class="nav-item">
          <Link to="/favoritos" className="nav-link" id="navLink">Favoritos</Link>
        </li>
        <li class="nav-item">
          <Link to="/contacto" className="nav-link" id="navLink">Contacto</Link>
        </li>
        <li class="nav-item">
          <Link to="/login" 
          onClick={cerrarSesion}
          className="btn btn-primary" id="navButton">
            {props.usuario?'Cerrar Sesión' : 'Iniciar Sesión'}</Link>
        </li>
      </ul>
      // hasta aca llega el codigo nuevo jorgeEiras


        <Link className="navbar-brand" to="/"><img src="./imagenes/logo-misviajes.png" alt="Mis planes" /></Link>
       
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
          <ul className="nav nav-underline navbar-nav">
            <li className="nav-item">
              <Link to="/favorito" className="nav-link" id="navLink" aria-current="page">Favoritos</Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link" id="navLink">Contacto</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="btn btn-primary" id="navButton">Iniciar Sesión</Link>
            </li>
          </ul>
          
        </div>        
      </div>
    </div>
  )
}
*/