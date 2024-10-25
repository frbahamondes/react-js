// Debería servir para dar forma a cada una de las cards

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'; // Importamos el contador
import './css/item.css'; // Asegúrate de tener el archivo de estilos item.css

function Item({ product, onAddToCart }) {
    const [confirmationMessage, setConfirmationMessage] = useState(''); // Estado para el mensaje

    const handleAdd = (quantity) => {
        onAddToCart(product.id, quantity);

        // Mostrar mensaje de confirmación dentro de la tarjeta
        setConfirmationMessage(`Agregaste ${quantity} unidades de ${product.name} al carrito.`);

        // Limpiar el mensaje después de 3 segundos
        setTimeout(() => setConfirmationMessage(''), 3000);
    };

    return (
        <div className="card">
            <img src={product.image} alt={product.name} className="card-img" />
            <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <p className="card-description">{product.description}</p>
                <p className="card-price">Precio: ${product.price}</p>

                {/* Contador para agregar productos al carrito */}
                <ItemCount stock={10} initial={0} onAdd={handleAdd} />

                {/* Mostrar el mensaje de confirmación dentro de la tarjeta */}
                {confirmationMessage && (
                    <p className="confirmation-message">{confirmationMessage}</p>
                )}

                {/* Link para ver más detalles del producto */}
                <Link to={`/producto/${product.id}`} className="card-details-link">Ver detalles</Link>
            </div>
        </div>
    );
}

export default Item;