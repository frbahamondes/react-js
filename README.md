# Gourmarket - E-commerce Web App

Este proyecto es una Single Page Application (SPA) de e-commerce desarrollada en **React** utilizando **Vite** como entorno de desarrollo. La aplicación permite a los usuarios navegar por un catálogo de productos, agregar productos a un carrito de compras y completar una compra con almacenamiento de órdenes en **Firebase Firestore**.

## Objetivos del Proyecto
- Desarrollar el Front-End de una web app de tipo e-commerce.
- Implementar Firestore como base de datos para gestionar los productos y almacenar las órdenes de compra.

## Características
- **Navegación Dinámica:** Utilización de React Router para la navegación entre el catálogo, categorías, detalle de producto, carrito de compras y checkout.
- **Gestión de Carrito de Compras:** Uso de React Context API para manejar el estado global del carrito.
- **Integración con Firebase Firestore:** Base de datos en la nube para almacenar los productos y órdenes de compra.
- **Interfaz de Usuario Intuitiva:** Componentes visuales con estilos y mensajes de retroalimentación para mejorar la experiencia del usuario.

## Tecnologías Utilizadas
- **React** con **Vite**: Framework de JavaScript para construir la UI.
- **Firebase Firestore**: Base de datos en tiempo real para almacenar los productos y órdenes.
- **CSS**: Estilos personalizados para los componentes.
- **React Context API**: Para la gestión del estado global del carrito de compras.

## Estructura del Proyecto
- **src/**
  - **components/**: Contiene los componentes de la aplicación, divididos en componentes de presentación y contenedores.
  - **context/**: Contiene el contexto para el carrito de compras (`CartContext`).
  - **data/**: Incluye datos mock o configuración inicial de productos.
  - **firebaseConfig.js**: Configuración para inicializar Firebase.

## Instalación y Ejecución

### Requisitos Previos
- Node.js v14 o superior
