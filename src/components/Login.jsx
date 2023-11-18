import React from 'react'

import Content2 from '../grids/login/Lcontent2'

import '../grids/login/Login.css'


const Login = () => {
  return (
    <React.Fragment>
        <section>
            <div className='layoutLogin'>
                
                <div className='lContent2 centered'>
                    <Content2/>
                </div>
                
            </div>
        </section>
    </React.Fragment>
  )
}

export default Login