import React from 'react'

import Content2 from '../grids/contacto/Content2'
import Content3 from '../grids/contacto/Content3'
import '../grids/contacto/Contacto.css'

const Contacto = () => {
  return (
    <React.Fragment>
        <section>
            <div className='layoutContact'>
                
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

export default Contacto