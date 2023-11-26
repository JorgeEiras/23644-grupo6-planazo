import React, {useState} from 'react'

import Content2 from '../grids/favoritos/Content2'
import Content3 from '../grids/favoritos/Content3'

import '../grids/favoritos/Favoritos.css'


const Favoritos = () => {

    //Para manejar la busqueda
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term)=>{
        console.log("favoritos",term);
        setSearchTerm(term);
    };
  return (
    <React.Fragment>
        <section>
            <div className='layoutFavoritos'>
                
                <div className='content2 centered'>
                    <Content2 onSearch={handleSearch}/>
                </div>
                <div className='content3 centered'>
                    <Content3 searchTerm={searchTerm}/>
                </div>
    
            </div>
        </section>
    </React.Fragment>
  )
}

export default Favoritos