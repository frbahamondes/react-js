// src/components/Item.jsx

import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import './css/item.css';
import { CartContext } from '../context/CartContext'; // Importamos el contexto del carrito

function Item({ product }) {
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const { addItem } = useContext(CartContext); // Obtenemos la función addItem del contexto

    const handleAdd = (quantity) => {
        addItem(product, quantity); // Usamos la función del contexto para agregar el producto

        // Mostrar mensaje de confirmación dentro de la tarjeta
        setConfirmationMessage(`Agregaste ${quantity} unidades de ${product.name} al carrito.`);

        // Limpiar el mensaje después de 3 segundos
        setTimeout(() => setConfirmationMessage(''), 3000);
    };

    return (
        <div className="card">
            <img src={product.image} alt={product.name} className="card-img" />
            <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <p className="card-description">{product.description}</p>
                <p className="card-price">Precio: ${product.price}</p>

                {/* Contador para agregar productos al carrito */}
                <ItemCount stock={10} initial={0} onAdd={handleAdd} />

                {/* Mostrar el mensaje de confirmación dentro de la tarjeta */}
                {confirmationMessage && (
                    <p className="confirmation-message">{confirmationMessage}</p>
                )}

                {/* Link para ver más detalles del producto */}
                <Link to={`/producto/${product.id}`} className="card-details-link">Ver detalles</Link>
            </div>
        </div>
    );
}

export default Item;