//import { Link } from 'react-router-dom'




import React from 'react'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <a href="/"><img src="./imagenes/logo-misviajes.png" alt="Mis planes" /></a>
      
      <ul class="nav nav-underline">
        <li class="nav-item">
          <a href="/favoritos" className="nav-link" id="navLink">Favoritos</a>
        </li>
        <li class="nav-item">
          <a href="/contacto" className="nav-link" id="navLink">Contacto</a>
        </li>
        <li class="nav-item">
          <a href="/login" className="btn btn-primary" id="navButton">Iniciar Sesión</a>
        </li>
      </ul>

    </nav>
  )
}
