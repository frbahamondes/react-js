// src/components/CheckoutForm.jsx
import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './css/checkoutform.css';

const CheckoutForm = () => {
    const { cart, clearCart, getCartItemCount } = useContext(CartContext);
    const [buyerInfo, setBuyerInfo] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [orderSent, setOrderSent] = useState(false);

    const handleInputChange = (e) => {
        setBuyerInfo({
            ...buyerInfo,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log("Order Info:", { buyer: buyerInfo, items: cart });
        
        clearCart();
        setOrderSent(true);
    };

    return (
        <div className="checkout-form-container">
            {orderSent ? (
                <p>¡Gracias por tu compra, {buyerInfo.name}! Te enviaremos un correo de confirmación.</p>
            ) : (
                <form onSubmit={handleSubmit} className="checkout-form">
                    <h2>Completar Pedido</h2>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            name="name"
                            value={buyerInfo.name}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Correo electrónico:
                        <input
                            type="email"
                            name="email"
                            value={buyerInfo.email}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Teléfono:
                        <input
                            type="tel"
                            name="phone"
                            value={buyerInfo.phone}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <button type="submit" className="submit-btn">
                        Finalizar Compra
                    </button>
                </form>
            )}
        </div>
    );
};

export default CheckoutForm;