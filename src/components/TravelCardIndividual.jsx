import React, { useState, useEffect } from 'react'
import { useFetch } from '../grids/inicio/useFetch';

export default function TravelCardIndividual({ showModal, lugarID }) {

    const { data, loading } = useFetch("https://punctualturbodeletion--jeiras2020.repl.co/products/");
    const [unLugar, setUnLugar] = useState({});
    const [renderModal, setRenderModal] = useState(false);

    const imgStyle = {
        height: '200px',
        objectFit: 'cover'
    }

    const buscarUnLugar = (lugarID) => {
        if (!loading) {
            const lugarEncontrado = data.find(lugar => lugar.post_id === lugarID);
            setUnLugar(lugarEncontrado || {})
        }
    };
    console.log({ data });
    console.log(unLugar);
    

    useEffect(() => {
        if (showModal && lugarID > 0) {
            buscarUnLugar(lugarID);
            setRenderModal(true);
        } else { 
            console.log("modal nope")
        }
    },[showModal, lugarID, data ])

    // useEffect(() => {
    //     console.log(unLugar);
    // }, [unLugar]); // hice esto para probar que el useeffect manda a renderizar cuando cambia unLugar pero
    // //cuando hago click en "CUmbrecita" deja de actualizar, dios 
    


    return (

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                     <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">{ unLugar.name }</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body d-flex" style={{ flexDirection: 'column', justifyContent: 'center' }}>
                        <h6>{unLugar.province}</h6>
                        <img src={unLugar.name} alt={unLugar.name} style={imgStyle} />
                        <p style={{ marginTop: '1rem' }}>{unLugar.description}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary">Agregar a favoritos</button>
                    </div>
                </div>
            </div>
        </div>

    )
}