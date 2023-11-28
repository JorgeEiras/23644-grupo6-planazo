import React, { useState } from 'react';


export default function Travel({ travel }) {

  const imgStyle = {
    height: '200px',
    objectFit: 'cover'
  }

  const [showCorazonRojo, setShowCorazonRojo] = useState(false);

 
  return (
        
    <div className="card h-100" style={{ maxWidth: "20rem" }}>
      <div>
        <img className="card-img-top" src={travel.image.secure_url} alt={travel.name} style={imgStyle} />
        <div style={{ position:"absolute", top:"0px", right:"0px"}}>
          <div className="stage">
            <div
              className={showCorazonRojo ? "heart is-active" : "heart"}
              onClick={() => setShowCorazonRojo(!showCorazonRojo)}>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body mb-2">
        <h5 className="card-title">{travel.name}</h5>
        <p className="card-text text-truncate">{travel.description}</p>
        <a href="#" className="btn btn-primary">Visitar</a>
      </div>
    </div>
   
  )
}
