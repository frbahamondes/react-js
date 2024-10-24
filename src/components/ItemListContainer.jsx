import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../data/products';
import './css/itemlistcontainer.css';
import ItemCount from './ItemCount'; // Importamos el componente ItemCount

function ItemListContainer({ greeting }) {
    const { categoriaId } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addedProducts, setAddedProducts] = useState({}); // Estado para manejar los productos agregados

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            if (products.length === 0) {
                reject('El array de productos está vacío');
            }
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
    };

    useEffect(() => {
        setLoading(true);
        getProducts()
            .then((response) => {
                setItems(response);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    // Filtrar los productos por categoría, si hay una seleccionada
    const filteredProducts = categoriaId
        ? items.filter(product => product.category.toLowerCase() === categoriaId.toLowerCase())
        : items;

    // Función para manejar cuando se agregan productos
    const handleAddToCart = (productId, quantity) => {
        // Actualizamos el estado con el producto agregado y la cantidad seleccionada
        setAddedProducts((prevState) => ({
            ...prevState,
            [productId]: quantity,
        }));
        alert(`Agregaste ${quantity} unidades al carrito del producto con ID: ${productId}`);
    };

    return (
        <div className="item-list-container">
            {!categoriaId && (
                <>
                    <h2>{greeting}</h2>
                    <p>Aquí puedes encontrar los mejores productos de comida internacional.</p>
                </>
            )}

            {loading ? (
                <p>Cargando productos...</p>
            ) : (
                <div className="product-list">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div key={product.id} className="product-item">
                                <h3>{product.name}</h3>
                                <img src={product.image} alt={product.name} width="200" />
                                <p>{product.description}</p>
                                <p>Precio: ${product.price}</p>

                                {/* Aquí usamos el contador y pasamos la función onAdd */}
                                <ItemCount
                                    stock={10}
                                    initial={0}
                                    onAdd={(quantity) => handleAddToCart(product.id, quantity)}
                                />
                            </div>
                        ))
                    ) : (
                        <p>No hay productos disponibles en esta categoría.</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default ItemListContainer;