import React from 'react'
import { Link } from 'react-router-dom'


const Content1 = () => {
  return (
    <div className='navbar navbar-expand-lg'>
      <div className="container-fluid">

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

export default Content1