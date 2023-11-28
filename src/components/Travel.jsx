import React from 'react';


export default function Travel({ travel }) {

  const imgStyle = {
    height: '200px',
    objectFit: 'cover'
  }

 
  return (
        
    <div className="card h-100" style={{ maxWidth: "20rem" }}>
      <img className="card-img-top" src={travel.image.secure_url} alt={travel.name} style={imgStyle} />
      <div className="card-body mb-2">
        <h5 className="card-title">{travel.name}</h5>
        <p className="card-text text-truncate">{travel.description}</p>
        <a href="#" className="btn btn-primary">Visitar</a>
      </div>
    </div>
   
  )
}
