import { Link } from 'react-router-dom'




import React from 'react'

export default function Navbar() {
  return (
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
          <Link to="/login" className="btn btn-primary" id="navButton">Iniciar Sesión</Link>
        </li>
      </ul>

    </nav>
  )
}
