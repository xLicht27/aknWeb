import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../css/navbar.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Cerrar menús al cambiar de ruta
    useEffect(() => {
        setDropdownOpen(false);
        setMobileMenuOpen(false);
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => {
        setMobileMenuOpen(false);
        setDropdownOpen(false);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="container">
                <Link to="/" className="nav-logo" onClick={closeMenu}>
                    <img src="/img/logo.png" className="nav-logo-icon" alt="Logo" />
                </Link>

                <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`} id="navLinks">
                    <Link to="/" className={isActive('/') ? 'active' : ''} onClick={closeMenu}>Inicio</Link>

                    <div className={`nav-dropdown-container ${dropdownOpen ? 'active' : ''}`}>
                        <div
                            className={`nav-dropdown-trigger ${location.pathname.includes('/servicios') ? 'active' : ''}`}
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            Servicios <i className="fas fa-chevron-down"></i>
                        </div>
                        <div className={`nav-dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                            <Link to="/servicios/tableros-electricos" onClick={closeMenu}>Tableros Eléctricos</Link>
                            <Link to="/servicios/sistema-de-media-tension" onClick={closeMenu}>Media y Baja Tensión</Link>
                            <Link to="/servicios/analisis-sistema-electrico" onClick={closeMenu}>Mantenimiento Eléctrico</Link>
                            <Link to="/servicios/grupos-electrogenos" onClick={closeMenu}>Infraestructura Eléctrica</Link>
                            <Link to="/servicios/equipos-de-proteccion" onClick={closeMenu}>Equipos de Protección</Link>
                            <Link to="/servicios/eficiencia-energetica" onClick={closeMenu}>Eficiencia Energética</Link>
                            <Link to="/servicios/redes-contra-incendios" onClick={closeMenu}>Redes Contra Incendios</Link>
                            <Link to="/servicios/sistemas-de-bombeo" onClick={closeMenu}>Sistemas de Bombeo</Link>
                        </div>
                    </div>

                    <Link to="/nosotros" className={isActive('/nosotros') ? 'active' : ''} onClick={closeMenu}>Nosotros</Link>
                    <Link to="/proyectos" className={isActive('/proyectos') ? 'active' : ''} onClick={closeMenu}>Proyectos</Link>
                    <Link to="/noticias" className={isActive('/noticias') ? 'active' : ''} onClick={closeMenu}>Noticias</Link>
                    <Link to="/trabajaconnosotros" className={isActive('/trabajaconnosotros') ? 'active' : ''} onClick={closeMenu}>Trabaja con Nosotros</Link>
                    <Link to="/contacto" className={`nav-cta ${isActive('/contacto') ? 'active' : ''}`} onClick={closeMenu}>Contacto</Link>
                </div>

                <div
                    className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
                    id="hamburger"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span></span><span></span><span></span>
                </div>
            </div>
        </nav>
    );
}
