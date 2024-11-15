// src/context/CartContext.js
import React, { createContext, useState } from 'react';

// 1. Creamos el contexto
export const CartContext = createContext();

// 2. Definimos el proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); // Estado del carrito, un array de productos

    // 3. Función para agregar un producto al carrito
    const addItem = (product, quantity) => {
        // Buscamos si el producto ya está en el carrito
        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            // Si el producto ya está en el carrito, actualizamos la cantidad
            setCart(cart.map(item => 
                item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
            ));
        } else {
            // Si no está en el carrito, lo agregamos
            setCart([...cart, { ...product, quantity }]);
        }
    };

    // 4. Función para eliminar un producto del carrito
    const removeItem = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    // 5. Función para vaciar el carrito
    const clearCart = () => {
        setCart([]);
    };

    // 6. Función para obtener la cantidad total de productos en el carrito
    const getCartItemCount = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    // 7. Proveemos el contexto con el carrito y las funciones
    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            clearCart,
            getCartItemCount
        }}>
            {children}
        </CartContext.Provider>
    );
};