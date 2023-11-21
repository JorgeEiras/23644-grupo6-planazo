import React from 'react'

import Content2 from '../grids/favoritos/Content2'

import '../grids/favoritos/Favoritos.css'
import '../grids/footer/Footer.css'


const Favoritos = () => {
  return (
    <React.Fragment>
        <section>
            <div className='layoutFavoritos'>
                
                <div className='content2 centered'>
                    <Content2/>
                </div>
    
            </div>
        </section>
    </React.Fragment>
  )
}

export default Favoritos