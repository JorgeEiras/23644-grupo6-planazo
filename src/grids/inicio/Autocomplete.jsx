import React, { useState } from 'react'
//importar la libreria de Geoapify para automcomplete
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'

//importar el css de la libreria de Geoapify para que muestre bien el input y las sugerencias
import '@geoapify/geocoder-autocomplete/styles/round-borders.css'
 
const Autocomplete = () => {

    const [ciudadId, setCiudadId] = useState([]);

 
    function onPlaceSelect(value) {
        
        console.log(value);
    }
    
    function onSuggectionChange(value) {
        console.log(value);
    }

       

    //en el return va a salir el input del buscador, limite 5 sugerencias
    return(
    
        <GeoapifyContext apiKey="43ed30b46e994340bdd785ec8badf0f7">
            <GeoapifyGeocoderAutocomplete
                placeholder="Ingresá una ciudad"
                limit={5}
                placeSelect={onPlaceSelect}
                suggestionsChange={onSuggectionChange}
                />
        </GeoapifyContext>
    )
}
 
export default Autocomplete