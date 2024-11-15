// src/components/CartWidget.jsx

import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './css/carwidget.css';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const { getCartItemCount } = useContext(CartContext);
    const cartItemCount = getCartItemCount();

    return (
        <div className="cart-widget">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="cart-count">{cartItemCount}</span>
        </div>
    );
};

export default CartWidget;