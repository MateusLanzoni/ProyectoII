import React, {useState, useEffect} from 'react'
import './Info.css'
import Footer from './Footer.jsx';
import { Navbar } from './Navbar.jsx'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Info = () => {
  const [auth , setAuth] = useState(false);
  const navigate=useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
        axios.get('http://localhost:4000/info')
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
    contenido=
    <>
      <div className='cuerpoInf'>
      <Navbar></Navbar>
      <div className='presentacion'>
        <div className='tarjeta'>
          <img className= 'ima'src="https://via.placeholder.com/150" alt='presentacion'></img>
          <h2 className='nombre'>Mateo Ávalos</h2>
          <p className='descripcion'>Hardware de localización</p>
          <p className='descripcion'>mateo.avalos@eia.edu.co</p>
        </div>
        <div className='tarjeta'>
          <img className= 'ima'src="https://via.placeholder.com/150" alt='presentacion'></img>
          <h2 className='nombre'>Mateus Lanzoni </h2>
          <p className='descripcion'>Desarrollo Backend</p>
          <p className='descripcion'>mateus.trejos@gmail.com</p>
        </div>
        <div className='tarjeta'>
          <img className= 'ima'src="https://via.placeholder.com/150" alt='presentacion'></img>
          <h2 className='nombre'>Juan Miguel L</h2>
          <p className='descripcion'>Desarrollo Frontend</p>
          <p className='descripcion'>juan.lopez79@eia.edu.co</p>
        </div>
      </div>
    </div>
    <Footer></Footer> 
    </>
  }
  else{
    contenido =
    <>
    </>
  }
  return (
    <>
    {contenido} 
    </>
  );
};