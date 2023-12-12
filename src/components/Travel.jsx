import React, { useContext, useState, useEffect } from 'react';
import { resultadosLugaresContext } from '../grids/inicio/Apilugares';
import { usuarioContext } from '../App';
import Modal from 'react-bootstrap/Modal';

import { collection, addDoc, getDocs, updateDoc, doc, query, where } from 'firebase/firestore';
import { db } from '../fb';
import { async } from '@firebase/util';
import { dbCollections } from '../../src/collection'; //la coleccion que vamos a usar


// import Swal from 'sweetalert2';

// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Travel() {

  //recupero la info de resultadosLugaresContext
  const lugares = useContext(resultadosLugaresContext);

  //recupero la info de usuarioContext
  const usuario = useContext(usuarioContext);

  const navigate = useNavigate();

  const imgStyle = {
    height: '200px',
    objectFit: 'cover'
  }

  //controla el corazon
  const [showCorazonRojo, setShowCorazonRojo] = useState(false); //variable para cambiar la clase del corazon
  const [usuarioUID, setUsuarioUID] = useState('');
  const [postID, setPostID] = useState(0);
  const [favoritos, setFavoritos] = useState([]);

  //referenciar a la base
  const favoritosCollection = collection(db, "Favoritos");


  //tiene favoritos ya guardados? consulta a la db
  const getFavoritos = async (usuarioID) => {
    const q = query(favoritosCollection, where("usuario", "==", usuarioID));  //aca pide que sean del usuario activo

    const data = await getDocs(q);
    setFavoritos(
      data.docs.map((doc) => ({ ...doc.data().favoritos })) //aca trae el array favoritos del doc de corresponde a ese usuarioID
    );
  }
  console.log(favoritos);


  useEffect(() => {
    if (usuario == null) {
      console.log("no iniciaste sesion bolas"); 

    } else {

      setUsuarioUID(usuario.user.uid);
      getFavoritos(usuarioUID);
      
    }
    
  }, [usuario]);
  

  function toggleCorazon() { 
    setShowCorazonRojo(!showCorazonRojo)
  }

  
  const handleClickCorazon = () => {
    if (usuario == null) {
      console.log("no iniciaste sesion bolas"); //aca deberia ir un alerta
      navigate("/login");
    } else {
      setShowCorazonRojo(!showCorazonRojo);
      setPostID(lugares.post_id);

      // getDocdelUsuario(usuarioUID);
      // if (docUsuario.length == 0) {
      //   console.log("no existe", docUsuario); //si no existe, lo tengo que crear
      //   // crearDocUsuarioConFavorito(usuarioUID, postID);
      // } else {
      //   console.log("existe", docUsuario) //si existe, tengo que actualizar el array de favoritos
      //   actualizarDocUsuarioConFavoritoNuevo(docUsuario, postID);
      // }
    }
  }


  console.log(usuarioUID);
  console.log(postID);


  // const crearDocUsuarioConFavorito = async (user, postID) => {
  //   await addDoc(favoritosCollection, { usuario: user, favoritos: postID });  // aca pongo donde van a parar los datos
  //   console.log("agregaste un lugar a la db");
  // };

  // const actualizarDocUsuarioConFavoritoNuevo = async (docUser, postID) => {
  //   const favorito = doc(db, dbCollections.Favoritos, docUser);
  //   const nuevoFavorito = docUser.favoritos.push(postID);
  //   await updateDoc(favorito, nuevoFavorito);
  //   console.log("actualizaste los favoritos")
  // };





  //controla el modal
  const [show, setShow] = useState(false);
  const handleModal = () => {
    setShow(!show);
  }


  return (

    <div className="card h-100" style={{ maxWidth: "20rem" }}>
      <div>
        <img className="card-img-top" src={lugares.image.secure_url} alt={lugares.name} style={imgStyle} />
        <div style={{ position: "absolute", top: "0px", right: "0px" }}>
          <div className="stage">
            <div
              className={showCorazonRojo ? "heart is-active" : "heart"}
              onClick={handleClickCorazon}
              id={ lugares.post_id }
            >
            </div>
          </div>
        </div>
      </div>
      <div className="card-body mb-2">
        <h5 className="card-title">{lugares.name}</h5>
        <p className="card-text text-truncate">{lugares.description}</p>
        <button onClick={handleModal} className="btn" id='navBtnInicioSesion'>+ Info</button>
      </div>

      <Modal show={show} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>{lugares.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="card-img-top" src={lugares.image.secure_url} alt={lugares.name} style={imgStyle} />
          <p style={{ marginTop: "1rem" }}>{lugares.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn" id='btnCerrarModal' onClick={handleModal}>
            Cerrar
          </button>
          <button className="btn" id='btnFavoritosModal' onClick={handleModal}>
            Agregar a Favoritos
          </button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}