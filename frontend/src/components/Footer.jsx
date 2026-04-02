import { useState } from 'react'
import '../css/footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="nav-logo" style={{ marginBottom: '4px' }}>
                            <img src='../public/img/logo.png' className='nav-logo-icon' href='/'></img>
                        </div>
                        <p>
                            Liderazgo global en soluciones eléctricas. Más de 10 años construyendo
                            la infraestructura que mueve al país.
                        </p>
                        <div className="footer-social">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Servicios</h4>
                        <Link to="/servicios">Grupos Electrógenos</Link>
                        <Link to="/servicios">Tableros Eléctricos</Link>
                        <Link to="/servicios">Cableado Industrial</Link>
                        <Link to="/servicios">Mantenimiento</Link>
                        <Link to="/servicios">Energía Renovable</Link>
                    </div>

                    <div className="footer-col">
                        <h4>Empresa</h4>
                        <Link to="/nosotros">Sobre Nosotros</Link>
                        <Link to="/nosotros#cultura">Misión y Visión</Link>
                        <Link to="/proyectos">Proyectos</Link>
                        <Link to="/noticias">Noticias</Link>
                        <Link to="/trabaja">Trabaja con Nosotros</Link>
                    </div>

                    <div className="footer-col">
                        <h4>Contacto</h4>
                        <Link to="/contacto">
                            <i className="fas fa-map-marker-alt" style={{ marginRight: '6px', color: 'var(--primary)' }}></i>
                            Lima, Perú
                        </Link>
                        <a href="tel:+5114513488">
                            <i className="fas fa-phone-alt" style={{ marginRight: '6px', color: 'var(--primary)' }}></i>
                            (01) 4513488
                        </a>
                        <a href="mailto:ventas@corporacionakn.com">
                            <i className="fas fa-envelope" style={{ marginRight: '6px', color: 'var(--primary)' }}></i>
                            ventas@corporacionakn.com
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>&copy; 2026 Corporación AKN S.A. Todos los derechos reservados.</span>
                    <Link to="/reclamaciones" className="footer-reclamaciones">
                        <i className="fas fa-book"></i> Libro de Reclamaciones
                    </Link>
                    <span>www.corporacionakn.com</span>
                </div>
            </div>
        </footer>
    )
}
