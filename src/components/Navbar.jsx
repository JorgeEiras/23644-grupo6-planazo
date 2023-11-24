import { Link } from 'react-router-dom';
import React from "react";
import { app } from "../fb";

export default function Navbar(props) {
  const cerrarSesion = () => {
    if (props.usuario) {
      app.auth().signOut();
    }
  };

  return (
    <nav className='navbar'>
      <Link to="/"><img src="./imagenes/logo-misviajes.png" alt="Mis planes" /></Link>
      <ul className="nav nav-underline">
        <li className="nav-item">
          <Link to="/" className="nav-link" id="navLink">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto" className="nav-link" id="navLink">Contacto</Link>
        </li>
        <li className="nav-item">
          {props.usuario ? (
            <Link to="/login" 
              onClick={cerrarSesion}
              className="btn btn-danger" id="navButton">
              Cerrar Sesión
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary" id="navButton">
              Iniciar Sesión
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

