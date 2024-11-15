// src/context/CartContext.jsx
import React, { createContext, useState } from 'react';

// Creamos el contexto
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); 

    // Función para agregar un producto al carrito
    const addItem = (product, quantity) => {
        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            setCart(cart.map(item => 
                item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity }]);
        }
    };

    // Función para eliminar un producto del carrito
    const removeItem = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    // Función para vaciar el carrito
    const clearCart = () => {
        setCart([]);
    };

    // Función para obtener la cantidad total de productos en el carrito
    const getCartItemCount = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    // Función para incrementar la cantidad de un producto en el carrito
    const incrementItem = (productId) => {
        setCart(cart.map(item => 
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    // Función para decrementar la cantidad de un producto en el carrito
    const decrementItem = (productId) => {
        setCart(cart.map(item => 
            item.id === productId && item.quantity > 1 
            ? { ...item, quantity: item.quantity - 1 } 
            : item
        ));
    };

    // Proveemos el contexto con el carrito y las funciones
    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            clearCart,
            getCartItemCount,
            incrementItem,   // Exportamos incrementItem
            decrementItem    // Exportamos decrementItem
        }}>
            {children}
        </CartContext.Provider>
    );
};