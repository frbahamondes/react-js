// App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer'; 
import Error404 from './components/Error404';
import Cart from './components/Cart'; 
import CheckoutForm from './components/CheckoutForm'; // Importa el componente CheckoutForm
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a nuestra tienda gourmet" />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting="Productos por categoría" />} />
        <Route path="/producto/:productoId" element={<ItemDetailContainer />} /> {/* Ruta para el detalle del producto */}
        <Route path="/contador" element={<ItemCount />} />
        <Route path="/cart" element={<Cart />} /> {/* Ruta para el carrito */}
        <Route path="/checkout" element={<CheckoutForm />} /> {/* Nueva ruta para el checkout */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;