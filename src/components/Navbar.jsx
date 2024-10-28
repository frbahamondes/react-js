import React from 'react';
import { Link } from 'react-router-dom'; // Usamos Link para la navegación interna con React Router
import './css/navbar.css'; // Estilos del Navbar
import CartWidget from './CartWidget'; // Importamos el CartWidget

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Cambiamos el <h1> por un <Link> para que lleve al home (/) */}
            <Link to="/" className="brand">
                <h1>Gourmarket</h1>
            </Link>
            <ul className="nav-links">
                {/* Usamos el componente Link para la navegación interna con las categorías exactas */}
                <li><Link to="/categoria/Condimentos" className="nav-link">Condimentos</Link></li>
                <li><Link to="/categoria/Ingredientes%20Internacionales" className="nav-link">Ingredientes Internacionales</Link></li>
                <li><Link to="/categoria/Dulces%20Gourmet" className="nav-link">Dulces Gourmet</Link></li>
            </ul>
            <CartWidget /> {/* Aquí añadimos el CartWidget */}
        </nav>
    );
};

export default Navbar;