import './App.css';
import Contacto from './components/Contacto';
import Favoritos from './components/Favoritos';
import Inicio from './components/Inicio';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Registro from './components/Registro';
//import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  let component
  switch(window.location.pathname){
    case '/':
      component = <Inicio />
      break
    case '/contacto':
      component = <Contacto />
      break
    case '/favoritos':
      component = <Favoritos />
      break
    case '/login':
      component = <Login />
      break
    case '/registro':
      component = <Registro />
      break

  }
  return (
    <>
    <Navbar />
    {component}
    </>
  );
}

export default App;
