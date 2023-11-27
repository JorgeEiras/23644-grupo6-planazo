import React from 'react'

import FormContacto from '../grids/contacto/FormContacto'

import '../grids/contacto/Contacto.css'

const Contacto = () => {
  return (
    <React.Fragment>
      <section>
        <div className='layoutContact'>

          <div className='formContacto centered'>
            <FormContacto />
          </div>

        </div>
      </section>
    </React.Fragment>
  )
}

export default Contacto