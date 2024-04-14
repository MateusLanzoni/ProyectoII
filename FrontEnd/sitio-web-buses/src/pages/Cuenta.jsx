import React from 'react'
import { Navbar } from './Navbar.jsx'
import './Cuenta.css'



export const Cuenta = () => {
  return (
    <div className='layout-cuenta'>
        
       
       <div className='barra-cuenta'>
            <Navbar></Navbar>
       </div>
       <div className='cuerpo-cuenta'>
            <div className='info-cuenta'>
                <div className='info-arriba'>
                    <div className='texto-info'>
                        <p className='titulo-info'>Identificacion</p>
                    </div>
                </div>
                <div className='info-abajo'>
                    <div className='texto-info'>
                        <p className='titulo-info'>Nombre</p> 
                    </div>
                    <div className='texto-info'>
                        <p className='titulo-info'>Usuario</p>
                    </div>

                </div>
                
            </div>
       </div>
        
       
    </div>
  )
}
