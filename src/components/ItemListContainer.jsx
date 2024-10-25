import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import { products } from '../../data/products';
import './css/itemlistcontainer.css';
import ItemList from './ItemList'; // Usamos ItemList

function ItemListContainer({ greeting }) {
    const { categoriaId } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addedProducts, setAddedProducts] = useState({});
    const [categoryError, setCategoryError] = useState(false); // Nuevo estado para manejar el error de categoría

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

    // Extraemos las categorías válidas del array de productos
    const validCategories = [...new Set(products.map(product => product.category.toLowerCase()))];

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

        // Verificamos si la categoría es válida
        if (categoriaId && !validCategories.includes(categoriaId.toLowerCase())) {
            setCategoryError(true);
        } else {
            setCategoryError(false);
        }
    }, [categoriaId]);

    // Filtrar los productos por categoría, si hay una seleccionada y la categoría es válida
    const filteredProducts = categoriaId && !categoryError
        ? items.filter(product => product.category.toLowerCase() === categoriaId.toLowerCase())
        : items;

    // Función para manejar cuando se agregan productos
    const handleAddToCart = (productId, quantity) => {
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
            ) : categoryError ? (  // Mostramos un error si la categoría es inválida
                <div>
                    <h2>Error: Categoría no encontrada</h2>
                    <p>Lo sentimos, la categoría que buscas no existe.</p>
                </div>
            ) : (
                <ItemList products={filteredProducts} onAddToCart={handleAddToCart} />
            )}
        </div>
    );
}

export default ItemListContainer;