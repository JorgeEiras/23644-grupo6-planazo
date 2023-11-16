import React from 'react'
import { Link } from 'react-router-dom'


const Content1 = () => {
  return (
    <div className='navbar'>
      <Link to="/"><img src="./imagenes/logo-misviajes.png" alt="Mis planes" /></Link>
      
      <ul class="nav nav-underline">
        <li class="nav-item">
          <Link to="/favorito" className="nav-link" id="navLink">Favoritos</Link>
        </li>
        <li class="nav-item">
          <Link to="/contacto" className="nav-link" id="navLink">Contacto</Link>
        </li>
        <li class="nav-item">
          <Link to="/login" className="btn btn-primary" id="navButton">Iniciar Sesión</Link>
        </li>
      </ul>

    </div>   
  )
}

export default Content1