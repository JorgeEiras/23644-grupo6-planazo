import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, deleteDoc, doc, query, where } from 'firebase/firestore';
import { db } from '../../fb';
import { async } from '@firebase/util';
import Swal from 'sweetalert2';



const FavoritosUno = () => {

  
  //1. configurar los hooks
  const [favoritos, setFavoritos] = useState([]);


  //2. referencia a la db de firebase: tiene que ir a db y de ahi a la coleccion favoritos usando la funcionalidad collection de firebase
  const favoritosCollection = collection(db, "Favoritos");
  //2.5 aca pide que sean del usuario activo
  const q = query(favoritosCollection, where("usuario", "==", "sol2"));

  //3. hacer el asincronismo con esa coleccion con esa query
  const getFavoritos = async () => {
    const data = await getDocs(q);
    setFavoritos(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  }
  console.log(favoritos);


  


  //4. useEffect
  useEffect(() => {
    getFavoritos();
  }, [])

  //falta que llame a la api y que traiga esos lugares


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
      </div>
      {/* ACA TERMINA EL EJEMPLO*/}
      
      
    </div>
      
    
  )
}

export default FavoritosUno