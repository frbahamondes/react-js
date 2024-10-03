import React from 'react';
import './css/Navbar.css'; // Estilos del Navbar
import CartWidget from './CartWidget'; // Importamos el CartWidget


const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="brand">Gourmarket</h1>
            <ul className="nav-links">
                <li><a href="#condimentos" className="nav-link">Condimentos</a></li>
                <li><a href="#ingredientes" className="nav-link">Ingredientes Internacionales</a></li>
                <li><a href="#dulces" className="nav-link">Dulces Gourmet</a></li>
            </ul>
            <CartWidget /> {/* Aquí añadimos el CartWidget */}
        </nav>
    );
};

export default Navbar;
