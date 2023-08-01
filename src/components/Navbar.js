// importiamo Link dalla libreria
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>React-ive Blog</h1>

            <div className="links">
                {/* nei link tags c'è una funz speciale che previene la richiesta al server */}
                {/* tramite il router, inietta nel browser il percorso al singolo componente */}
                <Link to="/">Home</Link>
                <Link to="/create">New Article</Link>
            </div>
        </nav>
    );
}

export default Navbar;