// src/App.jsx

import React from 'react';
import Navbar from './components/Navbar'; // Importamos el Navbar
import ItemListContainer from './components/ItemListContainer'; // Importamos el nuevo componente
import './App.css'; // Mantén este si tienes algunos estilos globales

function App() {
  return (
    <div>
      {/* Usamos el componente Navbar */}
      <Navbar />

      {/* Usamos el nuevo componente ItemListContainer */}
      <ItemListContainer />
    </div>
  );
}

export default App;