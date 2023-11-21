import React from 'react'
//import Content1 from '../grids/inicio/Icontent1'
import Content2 from '../grids/inicio/Icontent2'
import Content3 from '../grids/inicio/Icontent3'
// import Content4 from '../grids/inicio/Icontent4'
import Api from '../grids/inicio/Api'
import '../grids/inicio/Inicio.css'
import '../grids/footer/Footer.css'


const Inicio = () => {
  return (
    <React.Fragment>
        <section>
            <div className='layoutInicio'>
                {/* <div className='iContent2 centered'>
                    <Content2/>
                </div>
                <div className='iContent3 centered'>
                    <Content3/>
                </div> */}
                <div className='iContent3 centered'>
                    <Api/>
                </div>
                  
            </div>
        </section>
    </React.Fragment>
  )
}

export default Inicio