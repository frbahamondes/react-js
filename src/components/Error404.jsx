// src/components/Error404.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './css/error404.css'; // Asegúrate de tener un archivo de estilos separado para esta página

function Error404() {
    return (
        <div className="error-page">
            <h1>Error 404</h1>
            <p>Lo sentimos, la página que buscas no existe.</p>
            <Link to="/" className="back-home-btn">Volver al inicio</Link>
        </div>
    );
}

export default Error404;