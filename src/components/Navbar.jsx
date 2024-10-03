import './css/Navbar.css'; // Importamos los estilos desde el archivo CSS

// 1. Crear función que será el componente Navbar
const Navbar = () => {
    return (
        // 2. Colocar el contenido de la barra de navegación
        <nav className="navbar"> {/* Aplicamos la clase CSS "navbar" */}
            <h1 className="brand">Gourmarket</h1> {/* Aplicamos la clase "brand" */}
            <ul className="nav-links"> {/* Aplicamos la clase "nav-links" */}
                <li><a href="#condimentos" className="nav-link">Condimentos</a></li> {/* Aplicamos la clase "nav-link" */}
                <li><a href="#ingredientes" className="nav-link">Ingredientes Internacionales</a></li>
                <li><a href="#dulces" className="nav-link">Dulces Gourmet</a></li>
            </ul>
            {/* Aquí más adelante colocaremos el Cart Widget */}
        </nav>
    );
};

// 3. Exportar el componente para usarlo en otros archivos
export default Navbar;
