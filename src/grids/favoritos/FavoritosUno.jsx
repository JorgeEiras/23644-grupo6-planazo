import React from 'react';
import { Link } from 'react-router-dom';

const FavoritosUno = () => {



  return (
    <div className='container-fluid'>
      <div className='headFavorito'>
        <h2>Mis favoritos</h2>
        <Link to='/' className="btn btnAgregarFavoritos">Agregar favorito</Link>
      </div>



      {/* ESTE ES UN EJEMPLO PARA YA TENER LOS ESTILOS. REEMPLAZARLO POR LO QUE CORRESPONDA MANTENIENDO LOS ESTILOS*/}
      <div className="mostrarFavoritosContainer row row-cols-auto g-4 centered"> 
                
        <div className="favorito col">
          <div className="card flex-row h-100" style={{ width: "20rem", alignItems:"center", justifyContent:"center"}}>
            <img className="card-img-left example-card-img-responsive" src="/imagenes/avion.png" alt="favorito.name" style={{ maxHeight:"5rem", padding:"5%" }}/>
            <div className="card-body">
              <h4 className="card-title h5 h4-sm"> Valle de la Luna</h4>
              <p className="card-text" style={{ fontSize: "small" }}>San Juan</p>
            </div>
          </div>
        </div>

        <div className="favorito col">
          <div className="card flex-row h-100" style={{ width: "20rem", alignItems: "center", justifyContent: "center" }}>
            <img className="card-img-left example-card-img-responsive" src="/imagenes/avion.png" alt="favorito.name" style={{ maxHeight: "5rem", padding: "5%" }} />
            <div className="card-body">
              <h4 className="card-title h5 h4-sm">EJ1.Purmamarca</h4>
              <p className="card-text" style={{ fontSize: "small" }}>Jujuy</p>
            </div>
          </div>
        </div>

        <div className="favorito col">
          <div className="card flex-row h-100" style={{ width: "20rem", alignItems: "center", justifyContent: "center" }}>
            <img className="card-img-left example-card-img-responsive" src="/imagenes/avion.png" alt="favorito.name" style={{ maxHeight: "5rem", padding: "5%" }} />
            <div className="card-body">
              <h4 className="card-title h5 h4-sm">Villa Langostura</h4>
              <p className="card-text" style={{ fontSize: "small" }}>Rio Negro</p>
            </div>
          </div>
        </div>

        <div className="favorito col">
          <div className="card flex-row h-100" style={{ width: "20rem", alignItems: "center", justifyContent: "center" }}>
            <img className="card-img-left example-card-img-responsive" src="/imagenes/avion.png" alt="favorito.name" style={{ maxHeight: "5rem", padding: "5%" }} />
            <div className="card-body">
              <h4 className="card-title h5 h4-sm">favorito.name</h4>
              <p className="card-text" style={{ fontSize: "small" }}>favorito.province</p>
            </div>
          </div>
        </div>    
      </div>
      {/* ACA TERMINA EL EJEMPLO*/}
      
      
    </div>
      
    
  )
}

export default FavoritosUno