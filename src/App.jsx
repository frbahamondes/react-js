// App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Importamos el Navbar
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import Error404 from './components/Error404'; // Importamos el componente Error404
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a nuestra tienda gourmet" />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting="Productos por categoría" />} />
        <Route path="/contador" element={<ItemCount />} />

        {/* Ruta para manejar cualquier URL no existente */}
        <Route path="*" element={<Error404 />} /> {/* Captura rutas no encontradas */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;