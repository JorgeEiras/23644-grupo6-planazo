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
  const [dataApi, setDataApi] = useState([]);
  const [dataFinal, setDataFinal] = useState([]);

  //referencia a la db de firebase: tiene que ir a db y de ahi a la coleccion favoritos usando la funcionalidad collection de firebase
  const favoritosCollection = collection(db, "Favoritos");

  //hacer el asincronismo con la db
  const getFavoritos = async (usuarioID) => {
    const q = query(favoritosCollection, where("usuario", "==", usuarioID));  //aca pide que sean del usuario activo

    const data = await getDocs(q);
    setFavoritos(
      data.docs.map((doc) => ({ ...doc.data().favoritos })) //aca trae el array favoritos del doc de corresponde a ese usuarioID
    );
  }
  // console.log(favoritos);


  //busca en la api y filtra
  async function getFavoritosDataFinal(favoritos) {
    try {
      const response = await fetch('https://punctualturbodeletion--jeiras2020.repl.co/products/');
      const responseData = await response.json();

      setDataApi(responseData);
      // console.log(dataApi);

      const favoritosIds = favoritos.flatMap(obj => Object.values(obj));

      const dataFiltrada = dataApi.filter((objeto) =>
        favoritosIds.includes(objeto.post_id)
      );

      // console.log(dataFiltrada);

      setDataFinal(dataFiltrada);
      // console.log(dataFinal);

    } catch (error) { 
      console.log("error al obtener datos", error)
    }
  };


  //useEffect
  useEffect(() => {
    setUsuarioUID(usuario.user.uid);
    // console.log(usuarioUID);
    getFavoritos(usuarioUID);
    getFavoritosDataFinal(favoritos); //aca llama a la api
  }, [usuarioUID]) //SI PONGO FAVORITOS EN LAS DEPENDENCIAS, SE ACTULIZA BIEN PERO SE RENDERIZA ETERNAMENTE X-X


 

  return (
    <div className='container-fluid'>
      <div className='headFavorito'>
        <h2>Mis favoritos</h2>
        <Link to='/' className="btn btnAgregarFavoritos">Agregar favorito</Link>
      </div>


      {dataFinal.length > 0 ? (
        <div className="mostrarFavoritosContainer row row-cols-auto g-4 centered">
          {dataFinal.map((lugar) => (
            <div key={lugar.post_id} className="favorito col">
              <div className="card flex-row h-100" style={{ width: "20rem", alignItems: "center", justifyContent: "center" }}>
                <img className="card-img-left example-card-img-responsive" src="/imagenes/avion.png" alt="favorito.name" style={{ maxHeight: "5rem", padding: "5%" }} />
                <div className="card-body">
                  <h4 className="card-title h5 h4-sm"> { lugar.name }</h4>
                  <p className="card-text" style={{ fontSize: "small" }}> { lugar.province } </p>
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
