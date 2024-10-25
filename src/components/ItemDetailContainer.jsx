// src/components/ItemDetailContainer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../data/products'; // Importamos los productos
import './css/itemdetailcontainer.css'; // Estilos

function ItemDetailContainer() {
    const { productoId } = useParams(); // Obtenemos el productoId desde la URL
    const [product, setProduct] = useState(null); // Estado para almacenar el producto
    const [loading, setLoading] = useState(true); // Estado de carga

    // Simulamos una llamada para obtener el producto por su ID
    useEffect(() => {
        const getProduct = () => {
            const foundProduct = products.find(p => p.id === parseInt(productoId)); // Buscamos el producto
            setProduct(foundProduct);
            setLoading(false);
        };

        setLoading(true);
        setTimeout(getProduct, 1000); // Simulamos un pequeño retraso de carga
    }, [productoId]);

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
        </div>
    );
}

export default ItemDetailContainer;