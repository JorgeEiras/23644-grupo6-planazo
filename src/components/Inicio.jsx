import React from 'react'

import Buscador from '../grids/inicio/Buscador'
import Apilugares from '../grids/inicio/Apilugares'
import FavoritosInicio from '../grids/inicio/FavoritosInicio'

import '../grids/inicio/Inicio.css'


const Inicio = () => {

  return (
    <React.Fragment>
        <section>
            <div className='layoutInicio'>
                  
                <div className='buscadorContainer centered'>
                    <Buscador/>
                </div>
                <div className='apiContainer centered'>
                    <Apilugares/>
                </div>
                <div className='favoritosContainer centered text-white'>
                    <FavoritosInicio/>
                </div>

            </div>
        </section>
    </React.Fragment>
  )
}

export default Inicio