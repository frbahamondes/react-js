import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import { products } from '../../data/products';
import './css/itemlistcontainer.css';
import ItemList from './ItemList'; // Usamos ItemList

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
                <div className="product-list">  {/* Asegúrate de que este div tenga la clase product-list */}
                    <ItemList products={filteredProducts} onAddToCart={handleAddToCart} /> 
                </div>
            )}
        </div>
    );
}

export default ItemListContainer;