import React, { useState } from 'react'

import FavoritosUno from '../grids/favoritos/FavoritosUno'
import FavoritosDos from '../grids/favoritos/FavoritosDos'

import '../grids/favoritos/Favoritos.css'


const Favoritos = () => {


    //Para manejar la busqueda
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
        console.log("favoritos", term);
        setSearchTerm(term);
    };



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

    //     <React.Fragment>
    //     <section>
    //         <div className='layoutFavoritos'>
                
    //             <div className='content2 centered'>
    //                 <Content2 onSearch={handleSearch}/>
    //             </div>
    //             <div className='content3 centered'>
    //                 <Content3 searchTerm={searchTerm}/>
    //             </div>
    
    //         </div>
    //     </section>
    // </React.Fragment>
    )
}

export default Favoritos