// src/components/ItemDetailContainer.jsx

import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext'; // Importamos el contexto del carrito
import './css/itemdetailcontainer.css';

function ItemDetailContainer() {
    const { productoId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const { addItem } = useContext(CartContext); // Obtenemos la función addItem del contexto

    useEffect(() => {
        const getProduct = async () => {
            const docRef = doc(db, "productos", productoId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setProduct({ id: docSnap.id, ...docSnap.data() });
            } else {
                console.log("No se encontró el producto");
            }
            setLoading(false);
        };

        setLoading(true);
        getProduct();
    }, [productoId]);

    const handleAddToCart = (quantity) => {
        if (product) {
            addItem(product, quantity); // Usamos la función del contexto para agregar el producto

            // Mensaje de confirmación
            setConfirmationMessage(`Agregaste ${quantity} unidades de ${product.name} al carrito.`);
            setTimeout(() => setConfirmationMessage(''), 3000);
        }
    };

    if (loading) {
        return <p>Cargando detalles del producto...</p>;
    }

    if (!product) {
        return <p>Producto no encontrado</p>;
    }

    return (
        <div className="item-detail-container">
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} width="300" />
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>

            {/* Mostramos el contador */}
            <ItemCount 
                stock={10} 
                initial={0} 
                onAdd={handleAddToCart} 
            />

            {/* Mensaje de confirmación */}
            {confirmationMessage && (
                <p className="confirmation-message">{confirmationMessage}</p>
            )}
        </div>
    );
}

export default ItemDetailContainer;