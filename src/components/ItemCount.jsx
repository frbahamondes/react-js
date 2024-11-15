// src/components/ItemCount.jsx
import { useState } from 'react';
import './css/itemcount.css';  

function ItemCount({ stock = 10, initial = 0, onAdd }) {  
    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleSub = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="item-count-container">
            {/* Mostrar el número */}
            <p className="count-display">{count}</p>

            {/* Botones de incrementar y decrementar */}
            <div className="controls-container">
                <button className="button-count" onClick={handleSub}>-</button>
                <button className="add-to-cart-btn" onClick={() => onAdd(count)}>Agregar al carrito</button>
                <button className="button-count" onClick={handleAdd}>+</button>
            </div>
        </div>
    );
}

export default ItemCount;