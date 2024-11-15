import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Asegúrate de tener db importado desde tu configuración de Firestore
import './css/itemlistcontainer.css';
import ItemList from './ItemList'; // Usamos ItemList

function ItemListContainer({ greeting }) {
    const { categoriaId } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categoryError, setCategoryError] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);

            try {
                const productsCollection = collection(db, "productos");
                
                let productsQuery;
                if (categoriaId) {
                    // Filtra los productos por categoría si `categoriaId` está definido
                    productsQuery = query(productsCollection, where("category", "==", categoriaId));
                } else {
                    // Obtiene todos los productos si `categoriaId` no está definido
                    productsQuery = productsCollection;
                }

                const querySnapshot = await getDocs(productsQuery);
                const productsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setItems(productsData);
                setCategoryError(productsData.length === 0 && categoriaId); // Muestra un error si la categoría está vacía
            } catch (error) {
                console.error("Error al obtener los productos:", error);
                setCategoryError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categoriaId]);

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
            ) : categoryError ? (
                <div>
                    <h2>Error: Categoría no encontrada</h2>
                    <p>Lo sentimos, la categoría que buscas no existe.</p>
                </div>
            ) : (
                <ItemList products={items} />
            )}
        </div>
    );
}

export default ItemListContainer;