// src/components/ItemList.jsx
import React from 'react';
import Item from './Item'; 
import './css/itemlist.css'; 

function ItemList({ products, onAddToCart }) { 
    return (
        <div className="product-list">
            {products.map((product) => (
                <Item
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart} 
                />
            ))}
        </div>
    );
}

export default ItemList;