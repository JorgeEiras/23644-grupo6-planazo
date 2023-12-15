import React, { useContext, useState, useEffect } from 'react';
import { resultadosLugaresContext } from '../grids/inicio/Apilugares';
import { usuarioContext } from '../App';
import Modal from 'react-bootstrap/Modal';

import { collection, addDoc, getDocs, updateDoc, doc, query, where } from 'firebase/firestore';
import { db } from '../fb';
import { async } from '@firebase/util';

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

  //variables
  const [showCorazonRojo, setShowCorazonRojo] = useState(false); //variable para cambiar la clase del corazon
  const [usuarioUID, setUsuarioUID] = useState('');
  // const [postID, setPostID] = useState(0);
  const [favoritosExistentes, setFavoritosExistentes] = useState([]);
  const [usuarioExiste, setUsuarioExiste] = useState("");



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



  //segundo busca la data en la db si ya existe un doc para ese usuario
  const favoritosCollection = collection(db, "Favoritos");

  const getFavoritos = async (uid) => {
    // console.log("esta buscando en la db");
    try {
      const q = query(favoritosCollection, where("usuario", "==", uid));  //aca pide que sean del usuario activo

      const data = await getDocs(q);
      const dataDocsFav = data.docs.map((doc) => ({ ...doc.data().favoritos })) //aca trae el array favoritos del doc de corresponde a ese usuarioID
      const favoritosIDs = dataDocsFav.flatMap(obj => Object.values(obj));
      const dataDocsUser = data.docs.map((doc) => ({ ...doc.data().usuario })) //aca trae el string con el UID del usuario
      setFavoritosExistentes(favoritosIDs);
      setUsuarioExiste(dataDocsUser);
    } catch (error) {
      console.log("Error al conseguir los favoritos de la db", error);
    }
  }

  //asincronismo para crear un doc en la base
  const nuevoDoc = async (postID) => {
    try {
      await addDoc(favoritosCollection, { usuario: usuarioUID, favoritos: [postID] });
      console.log("se esta creando un doc");
      //si es exitoso, se pone rojo el corazon (falta el if)
      setShowCorazonRojo(!showCorazonRojo);
    } catch (error) {
      console.log("hubo un error al crear el doc en la db");
    }
  }

  const handleClickCorazon = (postID) => {
    if (usuario == null) {
      console.log("no iniciaste sesion bolas"); //aca deberia ir un alerta que redirija al inicio de sesion
      navigate("/login");
    } else {
      getFavoritos(usuarioUID);
      if ((usuarioExiste == "") && (postID > 0)) {
        //si no existe un doc con ese usuario hay que crear el doc
        nuevoDoc(postID);
      } else {
        //si favExistentes no esta vacio, pushea el post_id
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
          <button className="btn" id='btnFavoritosModal' onClick={handleModal}>
            Agregar a Favoritos
          </button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}