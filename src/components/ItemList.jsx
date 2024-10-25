// src/components/ItemList.jsx
import React from 'react';
import Item from './Item'; // Importamos el componente Item
import './css/itemlist.css'; // Asegúrate de tener este archivo CSS

function ItemList({ products, onAddToCart }) { // Recibimos la función como prop
    return (
        <div className="product-list">
            {products.map((product) => (
                <Item
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart} // Pasamos la función a cada Item
                />
            ))}
        </div>
    );
}

export default ItemList;