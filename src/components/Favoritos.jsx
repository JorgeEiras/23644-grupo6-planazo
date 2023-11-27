import React, { useState } from 'react'

import FavoritosUno from '../grids/favoritos/FavoritosUno'
import FavoritosDos from '../grids/favoritos/FavoritosDos'

import '../grids/favoritos/Favoritos.css'


const Favoritos = () => {

    return (
        <React.Fragment>
            <section>
                <div className='layoutFavoritos'>

                    <div className='favoritosUnoContainer centered'>
                        <FavoritosUno />
                    </div>
                    <div className='favoritosDosContainer centered'>
                        <FavoritosDos />
                    </div>

                </div>
            </section>
        </React.Fragment>

    )
}

export default Favoritos