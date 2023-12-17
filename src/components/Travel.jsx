import React, { useContext, useState, useEffect } from 'react';
import { resultadosLugaresContext } from '../grids/inicio/Apilugares';
import Modal from 'react-bootstrap/Modal';

import { collection, addDoc, getDocs, doc, query, where, deleteDoc } from 'firebase/firestore';
import { db } from '../fb';
// import { async } from '@firebase/util';

// import Swal from 'sweetalert2';

// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { usuarioContext } from '../App';
import { favoritosContext } from '../App';


export default function Travel() {

  //recupero la info de resultadosLugaresContext
  const lugares = useContext(resultadosLugaresContext);

  //recupero la info de favoritosContext
  const favoritosEnFirebase = useContext(favoritosContext);
  // const favoritosEnFirebase = [1,2];

  //recupero la info de usuarioContext
  const usuario = useContext(usuarioContext);

  const navigate = useNavigate();

  const imgStyle = {
    height: '200px',
    objectFit: 'cover'
  }

  //variables
  const [showCorazonRojo, setShowCorazonRojo] = useState(false); //variable para cambiar la clase del corazon
  const [usuarioUID, setUsuarioUID] = useState('');
  const [favoritosActualizados, setFavoritosActualizados] = useState([]);


  //ya existe en favoritos?
  const chequeaFavoritos = () => {
    if (usuarioUID != null) {
      if (favoritosEnFirebase.includes(lugares.post_id)) {
        setShowCorazonRojo(true);
      }
    }
  };

  useEffect(() => {
    chequeaFavoritos();
  }, [favoritosEnFirebase]);


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



  const favoritosCollection = collection(db, "Favoritos");

  //asincronismo para crear un doc en la base
  const nuevoDoc = async (postID) => {
    try {
      await addDoc(favoritosCollection, { usuario: usuarioUID, favoritos: [postID] });
      console.log("se esta creando un doc");
      //si es exitoso, se pone rojo el corazon 
      setShowCorazonRojo(true);
      favoritosEnFirebase.push(postID);
    } catch (error) {
      console.log("hubo un error al crear el doc en la db");
    }
  }

  const eliminarFavorito = async (postID) => {
    try {
      const q = query(favoritosCollection, where("usuario", "==", usuarioUID));
      const data = await getDocs(q);
      const docId = data.docs[0].id;
      await deleteDoc(doc(favoritosCollection, docId));
      console.log("se está eliminando el doc");
      // Desmarcar el corazón
      setShowCorazonRojo(false);
      const index = favoritosEnFirebase.indexOf(postID);
      if (index !== -1) {
        // Utilizar splice para eliminar el elemento en la posición index
        favoritosEnFirebase.splice(index, 1);
      };
    } catch (error) {
      console.log("Hubo un error al eliminar el doc en la db", error);
    }
  }



  const handleClickCorazon = (postID) => {
    if (usuario == null) {
      console.log("no iniciaste sesion bolas"); //aca deberia ir un alerta que redirija al inicio de sesion
      navigate("/login");
    } else {
      if ((postID > 0) && (showCorazonRojo === false)) {
        //si el heart esta gris, crea el doc 
        nuevoDoc(postID);
      } else if ((postID > 0) && (showCorazonRojo === true)) {
        //si el heart esta rojo, elimina el doc 
        eliminarFavorito(postID);
      }
    }
  }



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
              onClick={() => { handleClickCorazon(lugares.post_id) }}
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
          {/* <button className="btn" id='btnFavoritosModal' onClick={handleModal}>
            Agregar a Favoritos
          </button> */}
        </Modal.Footer>
      </Modal>


    </div>
  )
}