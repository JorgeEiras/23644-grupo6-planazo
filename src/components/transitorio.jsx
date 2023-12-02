// import React, { useEffect } from 'react'

// export default function TravelCardIndividual({ currentPlace, currentPlaceImg, isOpen }) {

//     const imgStyle = {
//         height: '200px',
//         objectFit: 'cover'
//     }

//     useEffect(() => { 
//         if (isOpen = true) {
//             console.log(isOpen);
//             console.log(currentPlace);
//             console.log(currentPlace.name);
//             console.log(currentPlace.description);

//         };
//     },[isOpen]);
    
    
//     return (
//         <div>
//             { isOpen ? (
//                 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                     <div class="modal-dialog">
//                         <div class="modal-content">
//                             <div class="modal-header">
//                                 <h1 class="modal-title fs-5" id="exampleModalLabel">{currentPlace.name}</h1>
//                                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                             </div>
//                             <div class="modal-body d-flex" style={{ flexDirection: 'column', justifyContent: 'center' }}>
//                                 <h6>{currentPlace.province}</h6>
//                                 <img src={currentPlaceImg} alt={currentPlace.name} style={imgStyle} />
//                                 <p style={{ marginTop: '1rem' }}>{currentPlace.description}</p>
//                             </div>
//                             <div class="modal-footer">
//                                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
//                                 <button type="button" class="btn btn-primary">Agregar a favoritos</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             ) : (
//                 <div className="modal fade" id='#exampleModal' tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
//                     <div class="modal-dialog">
//                         <div class="modal-content">
//                             <div class="modal-header">
//                                 <h1 class="modal-title fs-5" id="exampleModalLabel">Cargando...</h1>
//                                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                             </div>
//                             <div class="modal-body d-flex" style={{ flexDirection: 'column', justifyContent: 'center' }}>
//                                     <h6>Cargando...</h6>
//                                     <p style={{ marginTop: '1rem' }}>Cargando...</p>
//                             </div>
//                             <div class="modal-footer">
//                                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
//                                 <button type="button" class="btn btn-primary">Agregar a favoritos</button>
//                             </div>
//                         </div>
//                     </div>
//                     {console.log("modal nope")}
//                 </div>
//             )
//             }
//         </div>

//     )
// }


// ///----




// import React, { useContext, useEffect, useState } from 'react';
// import { resultadosLugaresContext } from '../grids/inicio/Apilugares';
// import TravelCardIndividual from './TravelCardIndividual';


// export default function Travel() {

//     //recupero la info de resultadosLugaresContext
//     const lugares = useContext(resultadosLugaresContext);

//     const imgStyle = {
//         height: '200px',
//         objectFit: 'cover'
//     }


//     //controla el corazon
//     const [showCorazonRojo, setShowCorazonRojo] = useState(false); //variable para cambiar la clase del corazon
//     const [favoritePlace, setFavoritePlace] = useState(''); // variable para obtener el nombre del lugar favorito

//     const handleClick = () => {
//         setShowCorazonRojo(!showCorazonRojo);
//         setFavoritePlace(lugares.name);
//     }
//     // console.log({ favoritePlace });


//     //controla el modal
//     const [showModal, setShowModal] = useState(false);
//     const [currentPlace, setCurrentPlace] = useState({});
//     const [currentPlaceImg, setCurrentPlaceImg] = useState('');

//     const handleModal = () => {
//         setShowModal(true);
//         setCurrentPlace(lugares);
//         setCurrentPlaceImg(lugares.image.secure_url);
//     }


//     console.log(showModal);
//     console.log(currentPlace);


//     return (

//         <div className="card h-100" style={{ maxWidth: "20rem" }}>
//             <div>
//                 <img className="card-img-top" src={lugares.image.secure_url} alt={lugares.name} style={imgStyle} />
//                 <div style={{ position: "absolute", top: "0px", right: "0px" }}>
//                     <div className="stage">
//                         <div
//                             className={showCorazonRojo ? "heart is-active" : "heart"}
//                             onClick={handleClick}
//                         >
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="card-body mb-2">
//                 <h5 className="card-title">{lugares.name}</h5>
//                 <p className="card-text text-truncate">{lugares.description}</p>
//                 <button onClick={handleModal} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//                     + Info
//                 </button>
//                 <TravelCardIndividual currentPlace={currentPlace} currentPlaceImg={currentPlaceImg} isOpen={showModal} />

//             </div>

//         </div>

//     )
// }

// // name = { lugares.name } img = { lugares.image.secure_url } province = { lugares.province } description = { lugares.description }