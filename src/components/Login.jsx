import React from 'react'
import Content1 from '../grids/login/Lcontent1'
import Content2 from '../grids/login/Lcontent2'
import Content3 from '../grids/login/Lcontent3'
import '../grids/login/Login.css'


const Login = () => {
  return (
    <React.Fragment>
        <section>
            <div className='layoutLogin'>
                <div className='lContent1 centered'>
                    <Content1/>
                </div>
                <div className='lContent2 centered'>
                    <Content2/>
                </div>
                <div className='lContent3 centered text-white'>
                    <Content3/>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default Login