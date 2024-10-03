// src/components/CartWidget.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './css/carwidget.css'; // Asegúrate que el nombre sea "carwidget.css" (como lo tienes en la captura)

const CartWidget = () => {
    const cartItemCount = 0; // Número de artículos en el carrito

    return (
        <div className="cart-container">
            <FontAwesomeIcon icon={faCartShopping} /> {/* Ícono de Font Awesome */}
            <span className="cart-count">{cartItemCount}</span>
        </div>
    );
};

export default CartWidget;