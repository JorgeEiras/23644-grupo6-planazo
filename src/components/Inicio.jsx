import React, { useState } from 'react'
import Buscador from '../grids/inicio/Buscador'
import Apilugares from '../grids/inicio/Apilugares'
import Apiplaces from '../grids/inicio/Apilugares'
import '../grids/inicio/Inicio.css'


const Inicio = () => {

    //Para manejar la busqueda
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
        console.log("favoritos", term);
        setSearchTerm(term);
    };



    return (
        <React.Fragment>
            <section>
            <br />
            <h6>Tenemos un <b>Planazo</b> para vos!! Sumate a nuestra gran comunidad colavorativa para descubrir juntos los mejores lugares de la Argentina. Es hora de viajar!!!</h6>
                <div className='layoutInicio'>
                
                    <div className='buscadorContainer centered'>
                        <Buscador onSearch={handleSearch} />
                    </div>
                    
                    <div className='apiContainer centered'>
                        {/* <Apilugares searchTerm={searchTerm} /> */}
                        <Apiplaces searchTerm={searchTerm} />
                    </div>

                </div>
            </section>
        </React.Fragment>
    )
}

export default Inicio