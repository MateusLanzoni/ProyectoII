import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'  
import "./Login.css"

export const Login = () =>{
    const [values, setValues] = useState({
        username:'',
        password:'',
    })
    const navigate = useNavigate();
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:4000/login', values)
        .then(res => {
            if(res.data.Status === "Success"){
                navigate('/ppal');
            }
            else{
                alert(res.data.Error);
            }
        })
        .then(err => console.log(err));
    }
    return(
        <div className="pagina">
            <div className="container">
                <form className='form' onSubmit={handleSubmit}>
                    <div className="header">
                        <p className="text">Login</p>
                        <div className="separador"></div>
                    </div>
                    <div className="inputs">
                        <div className="input">
                            <input type="text" placeholder="Nombre de Usuario" required 
                            onChange={e => setValues({...values, username: e.target.value})}/>
                        </div>
                        <div className="input">
                            <input type="password"  placeholder="Contraseña" required
                            onChange={e => setValues({...values, password: e.target.value})}/>
                        </div>
                

                    </div>
                    <div className="contBoton">
                        <button className="boton-submit"type="submit">Login</button>
                    </div>
                </form>
                <div className="link-registro">
                    <p>No tiene una cuenta? <a href='/registro'> Registrarse </a></p>
                </div>
                
            




             </div>
        </div>
        
    );
}