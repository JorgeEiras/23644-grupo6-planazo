import React from 'react'
import Content1 from '../grids/registro/Rcontent1'
import Content2 from '../grids/registro/Rcontent2'
import Content3 from '../grids/registro/Rcontent3'
import '../grids/registro/Registro.css'



const Registro = () => {
  return (
    <React.Fragment>
        <section>
            <div className='layoutRegistro'>
                <div className='rContent1 centered'>
                    <Content1/>
                </div>
                <div className='rContent2 centered'>
                    <Content2/>
                </div>
                <div className='rContent3 centered text-white'>
                    <Content3/>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default Registro
