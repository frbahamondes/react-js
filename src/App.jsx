// App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importamos BrowserRouter y Routes
import Navbar from './components/Navbar'; // Importamos el Navbar
import ItemListContainer from './components/ItemListContainer'; // Importamos ItemListContainer
import ItemCount from './components/ItemCount';
import './App.css';

function App() {
  return (
    <BrowserRouter> {/* Envolvemos toda la aplicación en BrowserRouter */}
      <Navbar /> {/* Este componente estará visible en todas las rutas */}
      
      <Routes> {/* Definimos las rutas de la aplicación */}
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a nuestra tienda gourmet" />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting="Productos por categoría" />} />
        <Route path="/contador" element={<ItemCount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;