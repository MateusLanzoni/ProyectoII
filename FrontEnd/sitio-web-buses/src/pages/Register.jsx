import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'
import axios from 'axios'

export const Register = () =>{
    const [values, setValues] = useState({
        name:'',
        username:'',
        password:'',
        identification: ''
    })
    const navigate = useNavigate();
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:4000/registro', values)
        .then(res => {
            if(res.data.Status === "Success"){
                navigate('/login')
            }
            else{
                alert(res.data.Error)
            }
        })
        .then(err => console.log(err));
    }
    return(
        <div className="pagina">
            <div className="container">
                <form className='form'onSubmit={handleSubmit}> 
                 <div className="header">
                    <p className="text">Registro</p>
                 <div className="separador"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <input type="text" placeholder="Nombre" required 
                        onChange={e => setValues({...values, name: e.target.value})}/>
                    </div>
                    <div className="input">
                        <input type="text"  placeholder="Nombre de usuario" required
                        onChange={e => setValues({...values, username: e.target.value})}/>
                    </div>
                    <div className="input">
                        <input type="password"  placeholder="Contraseña" required
                        onChange={e => setValues({...values, password: e.target.value})}/>
                    </div>
                    <div className="input">
                        <input type="text"  placeholder="Identificacion" required
                        onChange={e => setValues({...values, identification: e.target.value})}/>
                    </div>
                    
                </div>
                <div className="contBoton">
                    <button className="boton-submit"type="submit">Registrarse</button>
                </div>
                </form>
                <div className="link-login">
                    <p>Ya tiene una cuenta? <a href='/login'> Login </a></p>
                </div>
             </div>
        </div>
    );
}