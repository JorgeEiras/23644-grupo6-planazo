import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, deleteDoc, doc, query, where } from 'firebase/firestore';
import { db } from '../../fb';
import { async } from '@firebase/util';
import Swal from 'sweetalert2';
import { usuarioContext } from '../../App';



const FavoritosUno = () => {

  //recupero la info de usuarioContext
  const usuario = useContext(usuarioContext);

  const [favoritos, setFavoritos] = useState([]);
  const [usuarioUID, setUsuarioUID] = useState('');

  //referencia a la db de firebase: tiene que ir a db y de ahi a la coleccion favoritos usando la funcionalidad collection de firebase
  const favoritosCollection = collection(db, "Favoritos");

  //aca pide que sean del usuario activo
  const q = query(favoritosCollection, where("usuario", "==", "sol2"));

  //hacer el asincronismo con esa coleccion con esa query. devuelve los post_id de los lugares favoriteados
  const getFavoritos = async () => {
    const data = await getDocs(q);
    setFavoritos(
      data.docs.map((doc) => ({ ...doc.data().favoritos }))
    );
  }
  console.log(favoritos);



  //useEffect
  useEffect(() => {
    setUsuarioUID(usuario.user.uid);
    console.log(usuarioUID);
    getFavoritos();
  }, [])







  return (
    <div className='container-fluid'>
      <div className='headFavorito'>
        <h2>Mis favoritos</h2>
        <Link to='/' className="btn btnAgregarFavoritos">Agregar favorito</Link>
      </div>


      {favoritos.lenght > 0 ? (
        <div className="mostrarFavoritosContainer row row-cols-auto g-4 centered">
          {favoritos.map(() => (
            <div className="favorito col">
              <div className="card flex-row h-100" style={{ width: "20rem", alignItems: "center", justifyContent: "center" }}>
                <img className="card-img-left example-card-img-responsive" src="/imagenes/avion.png" alt="favorito.name" style={{ maxHeight: "5rem", padding: "5%" }} />
                <div className="card-body">
                  <h4 className="card-title h5 h4-sm"> Valle de la Luna</h4>
                  <p className="card-text" style={{ fontSize: "small" }}>San Juan</p>
                </div>
              </div>
            </div>

          ))}


        </div>
      ) : (
        <p>Todavía no agregaste ningun lugar a tus favoritos :heartbroken:</p>
      )}


    </div>


  )
}

export default FavoritosUno

// {
//   filteredResults.length > 0 ? (
//     <div className='row row-cols-auto g-4 centered'>

//       {filteredResults.map((filteredTravel) => (
//         <div className='col' key={filteredTravel.post_id}>
//         </div>
//       ))}

//     </div>
//   ) 