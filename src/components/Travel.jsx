import React, { useContext, useState } from 'react';
import { resultadosLugaresContext } from '../grids/inicio/Apilugares';
import TravelCardIndividual from './TravelCardIndividual';


export default function Travel() {

  //recupero la info de resultadosLugaresContext
  const lugares = useContext(resultadosLugaresContext);

  const imgStyle = {
    height: '200px',
    objectFit: 'cover'
  }


  const [showCorazonRojo, setShowCorazonRojo] = useState(false); //variable para cambiar la clase del corazon
  const [favoritePlace, setFavoritePlace] = useState(''); // variable para obtener el nombre del lugar favorito

  const handleClick = () => {
    setShowCorazonRojo(!showCorazonRojo);
    setFavoritePlace(lugares.name);
  }
  console.log({ favoritePlace });
  

  return (
        
    <div className="card h-100" style={{ maxWidth: "20rem" }}>
      <div>
        <img className="card-img-top" src={lugares.image.secure_url} alt={lugares.name} style={imgStyle}/>
        <div style={{ position:"absolute", top:"0px", right:"0px"}}>
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
        <h5 className="card-title">{ lugares.name }</h5>
        <p className="card-text text-truncate">{ lugares.description }</p>
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
        >+ Info</button>
        <TravelCardIndividual name={lugares.name} img={lugares.image.secure_url} province={lugares.province} description={lugares.description}
        ></TravelCardIndividual>
      </div>
      
    </div>
   
  )
}