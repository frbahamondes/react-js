// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import './css/navbar.css'; 
import CartWidget from './CartWidget'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Link para llevar al home */}
            <Link to="/" className="brand">
                <h1>Gourmarket</h1>
            </Link>
            
            <ul className="nav-links">
                {/* Links para navegar a las categorías */}
                <li><Link to="/categoria/Condimentos" className="nav-link">Condimentos</Link></li>
                <li><Link to="/categoria/Ingredientes%20Internacionales" className="nav-link">Ingredientes Internacionales</Link></li>
                <li><Link to="/categoria/Dulces%20Gourmet" className="nav-link">Dulces Gourmet</Link></li>
            </ul>

            {/* Link al carrito */}
            <Link to="/cart" className="cart-link">
                <CartWidget /> {/* Muestra el icono del carrito con la cantidad de productos */}
            </Link>
        </nav>
    );
};

export default Navbar;