import React from 'react'
import Buscador from '../grids/inicio/Buscador'
import Apilugares from '../grids/inicio/Apilugares'
import Content5 from '../grids/inicio/Icontent5'

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
                <div className='iContent5 centered text-white'>
                    <Content5/>
                </div>

            </div>
        </section>
    </React.Fragment>
  )
}

export default Inicio