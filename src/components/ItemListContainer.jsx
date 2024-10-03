// src/components/ItemListContainer.jsx

import React from 'react';
import './css/itemlistcontainer.css'; // Importamos los estilos

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="item-list-container">
            <h2>{greeting}</h2> {/* Aquí usamos la prop "greeting" */}
            <p>Aquí puedes encontrar los mejores productos de comida internacional.</p>
        </div>
    );
};

export default ItemListContainer;