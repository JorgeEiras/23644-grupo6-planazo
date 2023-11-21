import React from 'react'

import Content2 from '../grids/contacto/Content2'

import '../grids/contacto/Contacto.css'
import '../grids/footer/Footer.css'

const Contacto = () => {
  return (
    <React.Fragment>
        <section>
            <div className='layoutContact'>
                
                <div className='content2 centered'>
                    <Content2/>
                </div>
                
            </div>
        </section>
    </React.Fragment>
  )
}

export default Contacto