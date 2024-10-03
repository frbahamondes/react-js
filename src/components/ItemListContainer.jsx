// src/components/ItemListContainer.jsx

import React from 'react';
import './css/itemlistcontainer.css'; // Importamos los estilos

const ItemListContainer = () => {
    return (
        <section className="item-list-container">
            <h2>Bienvenido a nuestra tienda gourmet</h2>
            <p>Aquí puedes encontrar los mejores productos de comida internacional.</p>
        </section>
    );
};

export default ItemListContainer;