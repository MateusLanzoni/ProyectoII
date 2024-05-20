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
import RutaPredeterminada from './Ubicaciones/Predertminada.jsx';

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
  const[ruta, setRuta] = useState("preder");
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
            <option className='opcion'value='preder'>Rutas</option>
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
              ruta == 'preder' && (<RutaPredeterminada></RutaPredeterminada>)
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
                   <> <h3 className='nombreBus'>Ruta Clinica</h3>
                     <article className='tiempo'>
                      <h3 className='horario-bus'>4:55 am</h3>
                      <br></br>
                      <h3 className='horario-bus'>6:20 am</h3>
                      <br></br>
                      <h3 className='horario-bus'>6:45 am</h3>
                      <br></br>
                      <h3 className='horario-bus'>8:45 am</h3>
                      <br></br>
                      <h3 className='horario-bus'>12:45 am</h3>
                      </article> 
                   </>
                  )
                }
                {
                  ruta === 'preder' && (
                    <><h3 className='nombreBus'>Mapa Principal</h3>
                    <article className='tiempo'>
                      <h3 className='titulo-clinica'>Ruta Clinica</h3>
                      <br></br>
                      <h3 className='titulo-exito'>Ruta Exito</h3>
                      <br></br>
                      <h3 className='titulo-mayorca'>Ruta Mayorca</h3>
                      <br></br>
                      <h3 className='titulo-rionegro'>Ruta Rionegro</h3>
                      <br></br>
                      <h3 className='titulo-san'>Ruta San Antonio</h3>
                      <br></br>
                      <h3 className='titulo-sofasa'>Ruta Sofasa</h3>
                    </article></>
                  )
                }
                {
                  ruta === 'exito' && (
                   <><h3 className='nombreBus'>Ruta Exito-Robledo</h3>
                    
                        <article className='tiempo'>
                          <h3 className='horario-bus'>6:20 am</h3>
                        </article> 
                   </>
                  )
                }
                {
                  ruta === 'mayorca' && (
                    <> 
                    <h3 className='nombreBus'>Ruta Mayorca</h3>
                      <article className='tiempo'>
                        <h3 className='horario-bus'>4:55 am</h3>
                        <br></br>
                        <h3 className='horario-bus'>6:20 am</h3>
                        <br></br>
                        <h3 className='horario-bus'>6:45 am</h3>
                        <br></br>
                        <h3 className='horario-bus'>8:45 am</h3>
                      </article> 
                   </>
                  )
                }
                {
                  ruta === 'rionegro' && (
                    <>
                    <h3 className='nombreBus'>Ruta Rionegro</h3>
                    <article className='tiempo'>
                        <h3 className='horario-bus'>5:00 am</h3>
                        <br></br>
                        <h3 className='horario-bus'>6:10 am</h3>
                    </article> 
                    </>
                  )
                }
                {
                  ruta === 'sanAntonio' && (
                   <> 
                   <h3 className='nombreBus'>Ruta San Antonio</h3>
                   <article className='tiempo'>
                        <h3 className='horario-bus'>6:30 am</h3>
                   </article> 
                   </>
                  ) 
                }
                {
                  ruta === 'sofasa' && (
                    <> 
                    <h3 className='nombreBus'>Ruta Sofasa</h3>
                      <article className='tiempo'>
                        <h3 className='horario-bus'>4:55 am</h3>
                        <br></br>
                        <h3 className='horario-bus'>6:20 am</h3>
                        <br></br>
                        <h3 className='horario-bus'>6:45 am</h3>
                        <br></br>
                        <h3 className='horario-bus'>8:45 am</h3>
                    </article> 
                   </>
                  ) 
                }
              
            </article>
           
            {ruta === 'clinica' ? <RutaExitoRo /> : (ruta !== 'preder' && ruta !== 'rionegro' && <RutaClinica />)}

            
            {ruta !== 'preder' && ruta !== 'rionegro' && (
            <article className='tiempo'>
              <h3 className='nombreBus'>Ruta Alternativa</h3>
              <br></br>
             
            </article>
            )}
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