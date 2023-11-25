import React from 'react';


export default function Travel({ travel }) {

  const imgStyle = {
    height: '300px',
    objectFit: 'cover'
  }

  return (
    <div className='card'>
      <img
        src={travel.image.secure_url}
        alt={travel.name}
        className='card-img-top'
        style={imgStyle}
      />
      <div className='card-body mb-2'>
        <h4>{travel.name}</h4>
        
        <p>{travel.description}</p>

      </div>
    </div>
  )
}