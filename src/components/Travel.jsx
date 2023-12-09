import React, { useContext, useState } from 'react';
import { resultadosLugaresContext } from '../grids/inicio/Apilugares';

import Modal from 'react-bootstrap/Modal';


export default function Travel() {
  const apiKey = process.env.REACT_APP_API_PLACES_KEY;

  //recupero la info de resultadosLugaresContext
  const lugares = useContext(resultadosLugaresContext);
  // console.log(lugares);

  const imgStyle = {
    height: '200px',
    objectFit: 'cover'
  }
  const imgModalStyle = {
    height: '400px',
    objectFit: 'cover'
  }


  //controla el corazon
  const [showCorazonRojo, setShowCorazonRojo] = useState(false); //variable para cambiar la clase del corazon
  const [favoritePlace, setFavoritePlace] = useState(''); // variable para obtener el nombre del lugar favorito


  const handleClick = () => {
    setShowCorazonRojo(!showCorazonRojo);
    setFavoritePlace(lugares.name);
  }
  // console.log({ favoritePlace });

  //controla el modal
  const [show, setShow] = useState(false);
  const handleModal = () => {
    setShow(!show);
  }

  return (

    <div className="card h-100" style={{ maxWidth: "20rem" }}>
      <div>
        {/* <div id={`carousel${lugares.result.place_id}`} className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${lugares.result.photos[0].photo_reference}&key=${apiKey}`} className="d-block w-100 card-img-top" alt={lugares.result.name} style={imgStyle}/>
            </div>
            {lugares.result.photos.slice(1).map((photo) => (
              <div className="carousel-item">
                <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photo.photo_reference}&key=${apiKey}`} className="d-block w-100 card-img-top" alt={lugares.result.name} style={imgStyle}/>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target={`#carousel${lugares.result.place_id}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#carousel${lugares.result.place_id}`} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div> */}
        <img className="card-img-top" src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${lugares.result.photos[0].photo_reference}&key=${apiKey}`} alt={lugares.result.name} style={imgStyle} />
        <div style={{ position: "absolute", top: "0px", right: "0px" }}>
          <div className="stage">
            <div
              className={showCorazonRojo ? "heart is-active" : "heart"}
              onClick={handleClick}
            >
            </div>
          </div>
        </div>
      </div>
      <div className="card-body mb-2">
        <h5 className="card-title">{lugares.result.name}</h5>
        <p className="card-text text-truncate">{lugares.result.formatted_address}</p>
        <a href={lugares.result.website} target="_blank" rel="noopener noreferrer" className="btn btnCards">Website</a>
        <a href={lugares.result.url} target="_blank" rel="noopener noreferrer" className="btn btnCards mx-2">Mapa</a>
        <button onClick={handleModal} className="btn btnCards">Fotos</button>
        {/* <button onClick={handleModal} className="btn" id='navBtnInicioSesion'>Fotos</button> */}
      </div>

      <Modal show={show} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>{lugares.result.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id={`carousel${lugares.result.place_id}`} className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${lugares.result.photos[0].photo_reference}&key=${apiKey}`} className="d-block w-100 card-img-top" alt={lugares.result.name} style={imgModalStyle}/>
              </div>
              {lugares.result.photos.slice(1).map((photo) => (
                <div className="carousel-item">
                  <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${photo.photo_reference}&key=${apiKey}`} className="d-block w-100 card-img-top" alt={lugares.result.name} style={imgModalStyle}/>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#carousel${lugares.result.place_id}`} data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#carousel${lugares.result.place_id}`} data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
          {/* <img className="card-img-top" src={lugares.image.secure_url} alt={lugares.name} style={imgStyle} /> */}
          {/* <p style={{marginTop:"1rem"}}>{lugares.description}</p> */}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn" id='btnCerrarModal' onClick={handleModal}>
            Cerrar
          </button>
          {/* <button className="btn" id='btnFavoritosModal' onClick={handleModal}>
            Agregar a Favoritos
          </button> */}
        </Modal.Footer>
      </Modal>

    </div>
  )
}