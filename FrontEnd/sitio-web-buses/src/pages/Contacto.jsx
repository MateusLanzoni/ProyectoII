import React, {useState, useEffect} from 'react'
import './Contacto.css'
import Footer from './Footer.jsx'
import { Navbar } from './Navbar.jsx'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Contacto = () => {
  const [auth , setAuth] = useState(false);
  const navigate=useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
        axios.get('http://localhost:4000/contacto')
        .then(res => {
            if(res.data.Status === "Success"){
                setAuth(true);
            }
            else{
                setAuth(false);
                navigate('/login');
            }
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
            setAuth(false);
            navigate('/login');
        });
  },[])
    let contenido;
    if(auth){
      contenido =
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
    }
    else{
      contenido =
      <></>
    }
  return (
    <>
    {contenido} 
    </>
  );
};
