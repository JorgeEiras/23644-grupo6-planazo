import './App.css';
import Contacto from './components/Contacto';
import Favoritos from './components/Favoritos';
import Inicio from './components/Inicio';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
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
