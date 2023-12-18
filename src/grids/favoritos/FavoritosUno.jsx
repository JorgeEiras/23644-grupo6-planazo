import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
// import { collection, getDocs, deleteDoc, doc, query, where } from 'firebase/firestore';
// import { db } from '../../fb';
// import { async } from '@firebase/util';
// import Swal from 'sweetalert2';
import { useFetch } from "../inicio/useFetch";
import html2canvas from "html2canvas";


import { usuarioContext } from '../../App';
import { favoritosContext } from '../../App';



const FavoritosUno = () => {

  //recupero la info de usuarioContext
  const usuario = useContext(usuarioContext);

  //recupero la info de favoritosContext
  const favoritosEnFirebase = useContext(favoritosContext);


  // const [dataFavsDB, setDataFavsDB] = useState([]);
  const [usuarioUID, setUsuarioUID] = useState('');
  const [favoritosFinal, setFavoritosFinal] = useState([]);


  //primero consigue la data del usuario
  const fetchUserID = async () => {
    try {
      if (usuario) {
        setUsuarioUID(usuario.user.uid);
      }
    } catch (error) {
      console.error('Error al obtener el ID del usuario:', error);
    }
  };

  useEffect(() => {
    fetchUserID();
  }, [usuario]);


  //busca los lugares de la api
  const [url, setUrl] = useState("");
  const { data, loading } = useFetch(url);
  useEffect(() => {
    setUrl(`https://punctualturbodeletion--jeiras2020.repl.co/products/`);
  }, []);


  //filtra los lugares que trae la api para que deje los que estan en la lista de favoritos
  const lugaresFiltradosByPostID = (favFB) => {
    if (data != null) {
      try {
        const lugaresFiltrados = data.filter((lugar) => favFB.includes(lugar.post_id));
        setFavoritosFinal(lugaresFiltrados);
      } catch (error) {
        console.log("hay un error en el filtrado", error);
      }
    }
  };

  useEffect(() => {
    if (usuarioUID != null) {
      lugaresFiltradosByPostID(favoritosEnFirebase);
    }
  }, [usuarioUID, data]);


  //descargar cosas
  const descargar = (e) => {
    html2canvas(document.querySelector("#contenedorShowFavs"),
      { logging: true, letterRendering: 1, allowTaint: false, useCORS: true }).then(function (canvas) {
        let img = canvas.toDataURL("lugares/jpg");
        let link = document.createElement("a");
        link.download = "lugaresporvisitar.jpg";
        link.href = img;
        link.click();
      });
  }



  return (
    <div className='container-fluid'>
      <div className='headFavorito'>
        <h2>Mis favoritos</h2>
        <Link to='/' className="btn btnAgregarFavoritos">Agregar favorito</Link>
      </div>

      <div id="contenedorShowFavs" style={{ marginBottom:"1.8rem" }}>
        {favoritosFinal.length > 0 ? (
          <div className="mostrarFavoritosContainer row row-cols-auto g-4 centered">
            {favoritosFinal.map((lugar) => (
              <div key={lugar.post_id} className="favorito col">
                <div className="card flex-row h-100" style={{ width: "20rem", alignItems: "center", justifyContent: "center" }}>
                  <img className="card-img-left example-card-img-responsive" src="/imagenes/avion.png" alt="favorito.name" style={{ maxHeight: "5rem", padding: "5%" }} />
                  <div className="card-body">
                    <h4 className="card-title h5 h4-sm"> {lugar.name}</h4>
                    <p className="card-text" style={{ fontSize: "small" }}> {lugar.province} </p>
                  </div>
                </div>
              </div>

            ))}
          </div>
        ) : (
          <p>Todavía no agregaste ningun lugar a tus favoritos :heartbroken:</p>
        )}
      </div>

      <div className="container-fluid centered">
        <button className="btn" id='btnCerrarModal' onClick={descargar}>Descargar bucketlist!</button>
      </div>


    </div>


  )
}

export default FavoritosUno
