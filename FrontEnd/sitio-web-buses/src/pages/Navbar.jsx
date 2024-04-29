import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

export const  Navbar = () => {
    const[menuOpen, setMenuOpen] = useState(false)

    return(
                <nav> 
                    <Link to="/ppal" className='titulos'>ENCUENTRA TU RUTA</Link>
                    <div className="menu" onClick={() => {
                        setMenuOpen(!menuOpen);
                    }}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>                 
                    <ul className={menuOpen ? "open" : ""}>
                        <li>

                            <NavLink to="/cuenta">Cuenta</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacto">Contacto</NavLink>
                        </li>
                        <li>
                            <NavLink to ="/info">Info</NavLink>
                        </li>
                    </ul> 
                </nav>
    );
};