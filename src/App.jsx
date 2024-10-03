// App.jsx

import React from 'react';
import Navbar from './components/Navbar'; // Importamos el Navbar
import './App.css'; // Mantén este si tienes algunos estilos globales

function App() {
  return (
    <div>
      {/* Usamos el componente Navbar */}
      <Navbar />
      
      <main>
        <h2>Bienvenido a nuestra tienda gourmet</h2>
        <p>Aquí puedes encontrar los mejores productos de comida internacional.</p>
      </main>
    </div>
  );
}

export default App;