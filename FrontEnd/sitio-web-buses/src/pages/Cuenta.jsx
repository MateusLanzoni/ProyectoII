import React, {useState, useEffect} from 'react'
import { Navbar } from './Navbar.jsx'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer.jsx'
import './Cuenta.css'
import axios from 'axios';
import { RiUser3Fill } from "react-icons/ri";
import { FaRegAddressCard } from "react-icons/fa6";





export const Cuenta = () => {

    const [auth , setAuth] = useState(false);
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [identification, setIdentification] = useState('');
    
    

    let contenido;

    const navigate=useNavigate();

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get('http://localhost:4000/cuenta')
        .then(res => {
            if(res.data.Status === "Success"){
                setAuth(true);
                setName(res.data.name);
                setUsername(res.data.username);
                setIdentification(res.data.identification);
                
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
    const handleDelete = () => {
        axios.get('http://localhost:4000/logout')
        .then(res =>{
            location.reload(true);
        }).catch(err => console.log(err));
    }

    if(auth){
       contenido = 
       <>
       <div className='barra-cuenta'>
            <Navbar></Navbar>
       </div>
       <div className='cuerpo-cuenta'>
            <div className='info-cuenta'>
                <div className='info-arriba'>
                    <div className='texto-info'>
                        <p className='titulo-info'>Identificacion</p>
                        
                        <p className='informacion'>
                            <FaRegAddressCard className='card-icon'></FaRegAddressCard>{identification}
                        </p>
                    </div>
                </div>
                <div className='info-abajo'>
                    <div className='texto-info'>
                        <p className='titulo-info'>Nombre</p> 
                        <p className='informacion'>
                            <RiUser3Fill className='user-icon'></RiUser3Fill>{name}
                        </p>
                    </div>
                    <div className='texto-info'>
                        <p className='titulo-info'>Usuario</p>
                        <p className='informacion'>
                            <RiUser3Fill className='user-icon'></RiUser3Fill>{username}
                        </p>
                    </div>

                </div>
                
            </div>
            <button className='cerrar-cesion' onClick={handleDelete}>Cerrar Sesión</button>
            <Footer></Footer>
       </div>
       </>
    }
    else {
        contenido = <p>Sin autenticar</p>
    }


  return (
    <div className='layout-cuenta'>
        {contenido}
       
    </div>
  )
}
