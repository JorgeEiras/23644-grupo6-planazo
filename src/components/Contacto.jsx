import React from 'react'
import GridContent1 from '../grids/contacto/Content1'
import GridContent2 from '../grids/contacto/Content2'
import GridContent3 from '../grids/contacto/Content3'
import GridContent4 from '../grids/contacto/Content4'
import '../grids/contacto/Contacto.css'

const Contacto = () => {
  return (
    <React.Fragment>
        <section>
            <div className='layoutContact'>
                <div className='content1 centered'>
                    <GridContent1/>
                </div>
                <div className='content2 centered'>
                    <GridContent2/>
                </div>
                <div className='content3 centered'>
                    <GridContent3/>
                </div>
                <div className='content4 centered text-white'>
                    <GridContent4/>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default Contacto