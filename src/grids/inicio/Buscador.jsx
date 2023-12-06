import React, { useState } from 'react'

const Buscador = ({ onSearch }) => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log("soy el content2", searchTerm);
    onSearch(searchTerm);
  };
  
  return (

    <div className='buscador container'>
      <h2>¿A dónde vamos?</h2>

      <div className="input-group mb-3" style={{ width: '80%' }}>
        <input type="text" className="form-control" id='buscadorInput' placeholder="¿Qué provincia te gustaría conocer?" aria-label="Recipient's username" aria-describedby="button-addon2" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
        <button onClick={handleSearch} className="btn" id="buscadorBtn" type="button"><img src="./imagenes/lupa.svg" alt="Buscar" style={{ width: '1.8rem' }} /></button>
      </div>
      
    </div>

  )
}

export default Buscador