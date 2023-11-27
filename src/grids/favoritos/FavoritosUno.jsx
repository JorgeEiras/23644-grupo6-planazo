import React, {useState} from 'react'
//import { useFetch } from './useFetch'


const Content2 = ({onSearch}) => {

  const [searchTerm, setSearchTerm]= useState('');

  const handleSearch= () =>{
    console.log("soy el content2", searchTerm);
    onSearch(searchTerm);
  };

  return (
    <div className='buscador container'>
      <h2>¿A dónde vamos?</h2>
      <div className="input-group mb-3" style={{ width: '80%'}}>
        <input type="text" className="form-control" id='buscadorInput' placeholder="Bariloche..." aria-label="Recipient's username" aria-describedby="button-addon2" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
        <button className="btn" id="buscadorBtn" type="button" onClick={handleSearch}><img src="./imagenes/lupa.svg" alt="Buscar" style={{ width: '1.8rem'}}/></button>
      </div>
    </div>
  )
}

export default Content2
