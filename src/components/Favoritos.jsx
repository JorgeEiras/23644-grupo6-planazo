import React from 'react'
import Content1 from '../grids/favoritos/Content1'
import Content2 from '../grids/favoritos/Content2'
import Content3 from '../grids/favoritos/Content3'
import '../grids/favoritos/Favoritos.css'


const Favoritos = () => {
  return (
    <React.Fragment>
        <section>
            <div className='layoutFavoritos'>
                <div className='content1 centered'>
                    <Content1/>
                </div>
                <div className='content2 centered'>
                    <Content2/>
                </div>
                <div className='content3 centered text-white'>
                    <Content3/>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default Favoritos