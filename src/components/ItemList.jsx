//Me retorna cada una de las cards por cada uno de los elementos

// src/components/ItemList.jsx
import React from 'react';
import Item from './Item'; // Importamos el componente Item

function ItemList({ products, onAddToCart }) { // Recibimos la función como prop
    return (
        <>
            {products.map((product) => (
                <Item
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart} // Pasamos la función a cada Item
                />
            ))}
        </>
    );
}

export default ItemList;