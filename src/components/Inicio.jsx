import React from 'react'
//import Content1 from '../grids/inicio/Icontent1'
import Content2 from '../grids/inicio/Icontent2'
import Content3 from '../grids/favoritos/Content3'
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
                <div className='favoritosContainer centered text-white'>
                    <FavoritosInicio/>
                </div>

            </div>
        </section>
    </React.Fragment>
  )
}

export default Inicio