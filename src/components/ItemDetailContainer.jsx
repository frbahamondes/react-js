import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../data/products';
import './css/itemdetailcontainer.css';
import ItemCount from './ItemCount';

function ItemDetailContainer() {
    const { productoId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [addedProducts, setAddedProducts] = useState({});
    const [confirmationMessage, setConfirmationMessage] = useState(''); // Nuevo estado para el mensaje

    useEffect(() => {
        const getProduct = () => {
            const foundProduct = products.find(p => p.id === parseInt(productoId));
            setProduct(foundProduct);
            setLoading(false);
        };

        setLoading(true);
        setTimeout(getProduct, 1000);
    }, [productoId]);

    const handleAddToCart = (quantity) => {
        setAddedProducts((prevState) => ({
            ...prevState,
            [product.id]: quantity,
        }));
        // Actualizar el mensaje de confirmación
        setConfirmationMessage(`Agregaste ${quantity} unidades de ${product.name} al carrito.`);

        // Limpiar el mensaje después de 3 segundos
        setTimeout(() => setConfirmationMessage(''), 3000);
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