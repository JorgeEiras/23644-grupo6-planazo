import React from 'react'
import { Link } from 'react-router-dom'


const Content1 = () => {
  return (
    <div className='navbar navbar-expand-lg'>
      <div className="container-fluid barra-nav">
        <Link to="/"><img src="./imagenes/logo-misviajes.png" alt="Mis planes" /></Link>
        
        <div class="collapse navbar-collapse justify-content-end">
          <ul className="nav nav-underline">
            <li className="nav-item">
              <Link to="/favorito" className="nav-link" id="navLink">Favoritos</Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link" id="navLink">Contacto</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="btn btn-primary" id="navButton">Iniciar Sesión</Link>
            </li>
          </ul>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
      </div>
    </div>
  )
}

export default Content1