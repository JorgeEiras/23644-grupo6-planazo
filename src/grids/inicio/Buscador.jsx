import React from 'react'

const Buscador = () => {
  return (
    <div className='buscador container'>
      <h2>¿A dónde vamos?</h2>
      <div className="input-group mb-3" style={{ width: '80%'}}>
        <input type="text" className="form-control" id='buscadorInput' placeholder="Bariloche..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <button className="btn" id="buscadorBtn" type="button"><img src="./imagenes/lupa.svg" alt="Buscar" style={{ width: '1.8rem'}}/></button>
      </div>
    </div>

  )
}

export default Buscador