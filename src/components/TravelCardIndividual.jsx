import React from 'react'

export default function TravelCardIndividual({ name, img, province, description }) {

    const imgStyle = {
        height: '200px',
        objectFit: 'cover'
    }

  return (
      
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">{name}</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body d-flex" style={{ flexDirection: 'column', justifyContent: 'center' }}>
                      <h6>{province}</h6>
                      <img src={img} alt={name} style={imgStyle} />
                      <p style={{ marginTop: '1rem' }}>{description}</p>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                      <button type="button" class="btn btn-primary">Agregar a favoritos</button>
                  </div>
              </div>
          </div>
      </div>
      
  )
}

{/* <TravelCardIndividual
    nombre={lugares.name}
    provincia={lugares.province}
    descripcion={lugares.description}
></TravelCardIndividual> */}