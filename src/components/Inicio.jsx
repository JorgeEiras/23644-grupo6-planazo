import React from 'react'
import Content1 from '../grids/inicio/Content1'
import Content2 from '../grids/inicio/Content2'
import Content3 from '../grids/inicio/Content3'
import Content4 from '../grids/inicio/Content4'
import '../grids/inicio/Inicio.css'


const Inicio = () => {
  return (
    <React.Fragment>
        <section>
            <div className='layoutInicio'>
                <div className='content1 centered'>
                    <Content1/>
                </div>
                <div className='content2 centered'>
                    <Content2/>
                </div>
                <div className='content3 centered'>
                    <Content3/>
                </div>
                <div className='content4 centered text-white'>
                    <Content4/>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default Inicio