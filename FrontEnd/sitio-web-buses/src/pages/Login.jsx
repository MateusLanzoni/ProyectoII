import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Login.css";

export const Login = () => {
    const [auth, setAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [values, setValues] = useState({
        username: '',
        password: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        axios.defaults.withCredentials = true;  
        axios.get('http://localhost:4000/verify-token')
            .then(response => {
                if (response.data.Status === "Token valido") {
                    navigate('/ppal');  
                } else {
                    setIsLoading(false);  
                }
            })
            .catch(error => {
                console.error('Error verifying token: ', error);
                setIsLoading(false);
            });
    }, [navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:4000/login', values)
            .then(res => {
                if (res.data.Status === "Success") {
                    navigate('/ppal');
                } else {
                    alert(res.data.Error);
                }
            })
            .then(err => console.log(err));
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
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
                    <p>No tiene una cuenta? <Link to="/registro">Registrarse</Link></p>
                </div>
            </div>
        </div>
    );
};
