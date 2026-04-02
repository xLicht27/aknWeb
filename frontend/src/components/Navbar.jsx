import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/navbar.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setMobileMenuOpen(false);

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="container">
                <Link to="/" className="nav-logo" onClick={closeMenu}>
                    <img src='../public/img/logo.png' className='nav-logo-icon'></img>
                </Link>

                <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`} id="navLinks">
                    <Link to="/" className={isActive('/') ? 'active' : ''} onClick={closeMenu}>Inicio</Link>
                    <Link to="/servicios" className={isActive('/servicios') ? 'active' : ''} onClick={closeMenu}>Servicios</Link>
                    <Link to="/nosotros" className={isActive('/nosotros') ? 'active' : ''} onClick={closeMenu}>Nosotros</Link>
                    <Link to="/proyectos" className={isActive('/proyectos') ? 'active' : ''} onClick={closeMenu}>Proyectos</Link>
                    <Link to="/noticias" className={isActive('/noticias') ? 'active' : ''} onClick={closeMenu}>Noticias</Link>
                    <Link to="/trabajaconnosotros" className={isActive('/trabaja') ? 'active' : ''} onClick={closeMenu}>Trabaja con Nosotros</Link>
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
