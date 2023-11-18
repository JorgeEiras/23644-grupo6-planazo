import './App.css';
import Contacto from './components/Contacto';
import Favoritos from './components/Favoritos';
import Inicio from './components/Inicio';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Registro from './components/Registro';
import { Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <>
    <Navbar />
    <div>
      <Routes>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/contacto" element={<Contacto/>}></Route>
        <Route path="/favoritos" element={<Favoritos/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/registro" element={<Registro/>}></Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
