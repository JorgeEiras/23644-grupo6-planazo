import React from 'react'

import FavoritosUno from '../grids/favoritos/FavoritosUno'

import '../grids/favoritos/Favoritos.css'


const Favoritos = () => {

    return (
        <React.Fragment>
            <section>

                <div className='layoutFavoritos'>

                    <div className='favoritosContainer'>
                        <FavoritosUno />
                    </div>

                </div>
            </section>
        </React.Fragment>

    )
}

export default Favoritos