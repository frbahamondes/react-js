// src/components/Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './css/cart.css';

const Cart = () => {
    const { cart, removeItem, clearCart, getCartItemCount, incrementItem, decrementItem } = useContext(CartContext);

    // Calculamos el total del carrito
    const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <div>
                    <ul className="cart-items">
                        {cart.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div>
                                    <h3>{item.name}</h3>
                                    <div className="quantity-controls">
                                        <button onClick={() => decrementItem(item.id)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => incrementItem(item.id)}>+</button>
                                    </div>
                                    <p>Precio: ${item.price}</p>
                                    <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                                    <button onClick={() => removeItem(item.id)} className="remove-item-btn">Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                        <h3>Total de artículos: {getCartItemCount()}</h3>
                        <h3>Total a pagar: ${cartTotal.toFixed(2)}</h3>
                        <button onClick={clearCart} className="clear-cart-btn">Vaciar Carrito</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;