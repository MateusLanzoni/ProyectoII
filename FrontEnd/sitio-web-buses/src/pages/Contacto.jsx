import React from 'react'
import './Contacto.css'
import Footer from './Footer.jsx'
import { Navbar } from './Navbar.jsx'

export const Contacto = () => {
  return (
    <>
      <div className='paginaCont'>
        <Navbar></Navbar>
        <div className='contact'>
          <div className='titulo'>
            <div className='linea'></div>
            <h2 className='tituloContacto'>Contáctanos</h2>
            <div className='linea'></div>
          </div>
          <div className='textoCont'>
            <p className='informacion'>Ante cualquier duda o inquietud no dude en ponerse en contacto con el siguiente número:
            43746161
            </p>
            <br></br>
            <p className='informacion'>O contactar al servicio desde su página web: https://seditrans.com</p>
          </div>
          
        </div>
        <Footer></Footer>

      </div>
    
    
    </>
  );
};
