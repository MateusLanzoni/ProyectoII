import React, {useState, useEffect} from 'react'
import { Navbar } from './Navbar.jsx'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Home.css'
import './Footer.jsx'
import Footer from './Footer.jsx';
import RutaClinica from './Ubicaciones/RCLinica.jsx'
import RutaExitoRo from './Ubicaciones/RExitoRo.jsx'
import RutaMayorca from './Ubicaciones/RMAyorca.jsx'
import RutaRionegro from './Ubicaciones/RRionegro.jsx'
import RutaSanAn from './Ubicaciones/RSanAntonio.jsx'
import RutaSOABosq from './Ubicaciones/RSOABosque.jsx'

export const Home = () => {
  const [auth , setAuth] = useState(false);

  const navigate=useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
        axios.get('http://localhost:4000/ppal')
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
  const[ruta, setRuta] = useState("Ruta predeterminada");
  const handleOnChange =(e) =>{
    const seleccionado= e.target.value;
    console.log(seleccionado);
    setRuta(seleccionado);
  }
  let contenido;
  if(auth){
    contenido=
    <>
      <div className='cuerpo'>
        <Navbar className='A'></Navbar>
        <div className='barra' >
          <select  className='opciones' value={ruta} onChange={(e)=>(handleOnChange(e))}>
            <option className='opcion'value='preder'>Ruta Predeterminada</option>
            <option className='opcion' value='clinica'>Ruta Clinica</option>
            <option className='opcion' value='exito'>Ruta Exito-Robledo</option>
            <option className='opcion' value='mayorca'>Ruta Mayorca</option>
            <option className='opcion' value='rionegro'>Ruta Rionegro</option>
            <option className='opcion' value='sanAntonio'>Ruta San Antonio</option>
            <option className='opcion' value='sofasa'>Ruta Sofasa-Bosques</option>
          </select>
        </div>
        <div className='rectangulo'>
            {
              ruta == 'preder' && (<p>Prederterminada</p>)
            }
            {
              ruta == 'clinica' && (<RutaClinica></RutaClinica>)
            }
            {
              ruta == 'exito' && (<RutaExitoRo></RutaExitoRo>)
            }
            {
              ruta == 'mayorca' && (<RutaMayorca></RutaMayorca>)
            }
            {
              ruta == 'rionegro' && (<RutaRionegro></RutaRionegro>)
            }
            {
              ruta == 'sanAntonio' && (<RutaSanAn></RutaSanAn>)
            }
            {
              ruta == 'sofasa' && (<RutaSOABosq></RutaSOABosq>)
            }
            <article className='tiempo'>
                {
                  ruta === 'clinica' && (
                    <h3 className='nombreBus'>Ruta Clinica</h3>
                  )
                }
                {
                  ruta === 'exito' && (
                    <h3 className='nombreBus'>Ruta Exito-Robledo</h3>
                  )
                }
                {
                  ruta === 'mayorca' && (
                    <h3 className='nombreBus'>Ruta Mayorca</h3>
                  )
                }
                {
                  ruta === 'rionegro' && (
                    <h3 className='nombreBus'>Ruta Rionegro</h3>
                  )
                }
                {
                  ruta === 'sanAntonio' && (
                    <h3 className='nombreBus'>Ruta San Antonio</h3>
                  ) 
                }
                {
                  ruta === 'sofasa' && (
                    <h3 className='nombreBus'>Ruta Sofasa</h3>
                  ) 
                }
              <br></br>
              <p>hora de llegada</p>
            </article>
            <div className='ubiSec'></div>
            <article className='tiempo'>
              <h3 className='nombreBus'>
                  Ruta alternativa
              </h3>
              <br></br>
              <p>hora de llegada</p>
            </article>
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