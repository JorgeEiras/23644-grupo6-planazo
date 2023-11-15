import './App.css';
import Contacto from './components/Contacto';
import Favoritos from './components/Favoritos';
import Inicio from './components/Inicio';
import Login from './components/Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    
    <BrowserRouter>
      <nav className='menu'>
        <Link to="/">Home</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/favorito">Favorito</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/contacto" element={<Contacto />}/>
        <Route path="/favorito" element={<Favoritos />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
