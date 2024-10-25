// Debería servir para dar forma a cada una de las cards

// src/components/Item.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'; // Importamos el contador
import './css/item.css'; // Asegúrate de tener el archivo de estilos item.css

function Item({ product, onAddToCart }) { // Añadimos la prop onAddToCart para manejar la adición al carrito
    return (
        <div className="card">
            <img src={product.image} alt={product.name} className="card-img" />
            <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <p className="card-description">{product.description}</p>
                <p className="card-price">Precio: ${product.price}</p>

                {/* Contador para agregar productos al carrito */}
                <ItemCount
                    stock={10}
                    initial={0}
                    onAdd={(quantity) => onAddToCart(product.id, quantity)} // Llamamos a la función cuando se agregan productos
                />

                {/* Link para ver más detalles del producto */}
                <Link to={`/producto/${product.id}`} className="card-details-link">Ver detalles</Link>
            </div>
        </div>
    );
}

export default Item;