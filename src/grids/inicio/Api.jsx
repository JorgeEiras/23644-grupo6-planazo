import React, { useState, useEffect } from 'react';
import axios from 'axios';

//importar el componente Autocomplete de Geoapify
import Autocomplete from './Autocomplete';


const Content2 = () => {

    const [filtro, setFiltro] = useState(''); //declaro variable de estado para filtro
    const [data, setData] = useState([]); //declaro variable para lo que va a traer la api

    //traigo data de la api 
    // useEffect(() => {
    //     getLugares();
    // }, [] );
    // // getLugares usando FETCH y GEOAPIFY: trae restaurantes de moron a modo de ejemplo
    // async function getLugares() {
    //     let requestOptions = { method: 'GET' };
        
    //     const response = await fetch("https://api.geoapify.com/v2/places?categories=catering.restaurant&filter=place:511a301b253c4f4dc0597861f84b255541c0f00101f9018fbd1e0000000000c002069203064d6f72c3b36e&limit=20&apiKey=43ed30b46e994340bdd785ec8badf0f7", requestOptions);
    //     const data = await response.json(); 
    //     setData(data.features);
    //     // console.log({ data });
    // }
        
    //seteo en la variable el filtro que elige en el radio checkbox
    const seleccionarFiltro = (e) => {
        setFiltro(e.target.value);
        console.log({ filtro });
        console.log(`https://api.geoapify.com/v2/places?categories=${filtro}&filter=place:51a1f4444906681340595f4499441ae64640f00101f9017162010000000000c0020692031043616c756972652d65742d4375697265&limit=20&apiKey=43ed30b46e994340bdd785ec8badf0f7`);
    }

    //hace el fetch al hacer click en el boton Buscar
    async function buscarLugares() {        
        let requestOptions = { method: 'GET' };
        const response = await axios.get(`https://api.geoapify.com/v2/places?categories=${filtro}&filter=place:51a1f4444906681340595f4499441ae64640f00101f9017162010000000000c0020692031043616c756972652d65742d4375697265&limit=20&apiKey=43ed30b46e994340bdd785ec8badf0f7`, requestOptions);
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.features);
        setData(response.data.features);
        console.log({ data });
    }




    return (
        <div className='buscador container'>
            <h2>¿A dónde vamos?</h2>

            <div className="input-group mb-3" style={{ width: '80%'}}>
                <input type="text" className="form-control" id='buscadorInput' placeholder="Bariloche..." aria-label="Lugar" aria-describedby="button-addon2"/>
                <button className="btn" id="buscadorBtn" type="button"><img src="./imagenes/lupa.svg" alt="Buscar" style={{ width: '1.8rem'}}/></button>
            </div>

            <Autocomplete/>

            <div>
                <div className="form-check-inline">
                    <input onClick={seleccionarFiltro} className="form-check-input m-1" type="radio" value="accommodation" id="inlineRadio1" name="inlineRadioOptions"/>
                    <label className="form-check-label" for="inlineRadio1">Hoteles</label>
                </div>
                <div className="form-check-inline">
                    <input onClick={seleccionarFiltro} className="form-check-input m-1" type="radio" value="catering" id="inlineRadio2" name="inlineRadioOptions"/>
                    <label className="form-check-label" for="inlineRadio2">Restaurantes</label>
                </div>
                <div className="form-check-inline">
                    <input onClick={seleccionarFiltro} className="form-check-input m-1" type="radio" value="national_park" id="inlineRadio3" name="inlineRadioOptions"/>
                    <label className="form-check-label" for="inlineRadio3">Parques Nacionales</label>
                </div>
            </div>

           <button className="btn btn-primary" onClick={buscarLugares}>Buscar</button>
        
            
            <main className='d-flex' style={{width: "100%", textAlign:"center"}}>

                <div className='d-flex flex-wrap align-items-start centered' style={{ maxHeigh: "100%"}}>
                    { data.map((lugar) => (
                        <div className="card" style={{width: "18rem", margin: "1rem"}}>
                        <img className="card-img-top" src="./imagenes/avion-card.jpeg" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{ lugar.properties.name }</h5>
                            <p className="card-text">{ lugar.properties.address_line2 }</p>
                            <a href="#" className="btn btn-primary">Visitar</a>
                        </div>  
                        </div>
                    ))
                    }  
                </div>

            </main>
        </div>
    )
}

export default Content2