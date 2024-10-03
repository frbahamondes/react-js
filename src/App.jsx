// App.jsx

import React from 'react';
import Navbar from './components/Navbar'; // Importamos el Navbar
import ItemListContainer from './components/ItemListContainer'; // Importamos ItemListContainer
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenido a nuestra tienda gourmet" />
    </div>
  );
}

export default App;