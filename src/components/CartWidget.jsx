// src/components/CartWidget.jsx
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './css/carwidget.css';
import { CartContext } from '../context/CartContext';  // Importa el contexto

const CartWidget = () => {
    const { getCartItemCount } = useContext(CartContext);  // Obtén la cantidad de productos en el carrito
    const cartItemCount = getCartItemCount();  // Llama a la función para obtener la cantidad

    return (
        <div className="cart-container">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="cart-count">{cartItemCount}</span>  {/* Muestra la cantidad */}
        </div>
    );
};

export default CartWidget;