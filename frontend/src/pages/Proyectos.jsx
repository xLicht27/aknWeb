import React from 'react';
import { Link } from 'react-router-dom';
import '../css/proyectos.css';
import '../css/index.css'
import '../css/global.css';
import '../css/responsive.css';

const Proyectos = () => {
    return (
        <div className="proyectos-page">
            <section className="page-header">
                <div className="container">
                    <div className="page-header-breadcrumb">
                        <Link to="/">Inicio</Link> / Proyectos
                    </div>
                    <h1>Nuestros Proyectos</h1>
                    <p>
                        Más de 350 proyectos entregados exitosamente en diversos sectores industriales, comerciales y de infraestructura.
                    </p>
                </div>
            </section>

            {/* PROJECTS GALLERY */}
            <section className="projects section-padding">
                <div className="container">
                    <div className="projects-grid reveal-stagger">
                        <div className="project-card">
                            <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80" alt="Planta Industrial" />
                            <div className="project-overlay">
                                <span className="tag">Instalación Eléctrica</span>
                                <h3>Planta Industrial del Sur</h3>
                                <p>Instalación de 5,000m de cableado de alta tensión</p>
                            </div>
                        </div>

                        <div className="project-card">
                            <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80" alt="Centro Comercial" />
                            <div className="project-overlay">
                                <span className="tag">Grupos Electrógenos</span>
                                <h3>Mall Aventura — Lima</h3>
                                <p>3 grupos electrógenos de 500kW en sincronismo</p>
                            </div>
                        </div>

                        <div className="project-card">
                            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" alt="Torre Corporativa" />
                            <div className="project-overlay">
                                <span className="tag">Tableros Eléctricos</span>
                                <h3>Torre Corporativa UPC</h3>
                                <p>Sistema de distribución eléctrica 28 pisos</p>
                            </div>
                        </div>

                        <div className="project-card">
                            <img src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80" alt="Proyecto Minero" />
                            <div className="project-overlay">
                                <span className="tag">Mantenimiento</span>
                                <h3>Complejo Minero Andino</h3>
                                <p>Mantenimiento preventivo integral anual</p>
                            </div>
                        </div>

                        <div className="project-card">
                            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80" alt="Subestación" />
                            <div className="project-overlay">
                                <span className="tag">Subestaciones</span>
                                <h3>Subestación Eléctrica ENEL</h3>
                                <p>Diseño y montaje de subestación 220kV</p>
                            </div>
                        </div>

                        <div className="project-card">
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" alt="Hospital" />
                            <div className="project-overlay">
                                <span className="tag">Instalación Integral</span>
                                <h3>Hospital Regional Central</h3>
                                <p>Sistema eléctrico de emergencia completo</p>
                            </div>
                        </div>

                        <div className="project-card">
                            <img src="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80" alt="Aeropuerto" />
                            <div className="project-overlay">
                                <span className="tag">Infraestructura</span>
                                <h3>Terminal Aeroportuario Alteliza</h3>
                                <p>Red eléctrica y sistemas de emergencia</p>
                            </div>
                        </div>

                        <div className="project-card">
                            <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80" alt="Planta Solar" />
                            <div className="project-overlay">
                                <span className="tag">Energía Renovable</span>
                                <h3>Planta Solar Pepsico</h3>
                                <p>Instalación de 200 paneles fotovoltaicos</p>
                            </div>
                        </div>

                        <div className="project-card">
                            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80" alt="Centro Comercial" />
                            <div className="project-overlay">
                                <span className="tag">Mantenimiento</span>
                                <h3>Jockey Plaza — Lima</h3>
                                <p>Mantenimiento eléctrico integral mensual</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="values section-padding">
                <div className="container">
                    <div className="counters-grid reveal-stagger">
                        <div className="counter-item">
                            <div className="counter-number" style={{ color: 'var(--primary-light)' }}>350+</div>
                            <div className="counter-label">Proyectos Entregados</div>
                        </div>
                        <div className="counter-item">
                            <div className="counter-number" style={{ color: 'var(--primary-light)' }}>19+</div>
                            <div className="counter-label">Clientes Corporativos</div>
                        </div>
                        <div className="counter-item">
                            <div className="counter-number" style={{ color: 'var(--primary-light)' }}>6+</div>
                            <div className="counter-label">Sectores Industriales</div>
                        </div>
                        <div className="counter-item">
                            <div className="counter-number" style={{ color: 'var(--primary-light)' }}>100%</div>
                            <div className="counter-label">Satisfacción</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-banner">
                <div className="container reveal">
                    <h2>¿Tiene un proyecto en mente?</h2>
                    <p>Contáctenos para una evaluación técnica y una cotización a medida.</p>
                    <Link to="/contacto" className="btn-white">
                        <i className="fas fa-paper-plane"></i> Solicitar Cotización
                    </Link>
                </div>
            </section>

            {/* WhatsApp Float */}
            <a
                href="https://wa.me/5114513488?text=Hola%2C%20me%20interesa%20solicitar%20información"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float"
            >
                <i className="fab fa-whatsapp"></i>
                <div className="whatsapp-tooltip">¡Escríbenos por WhatsApp!</div>
            </a>
        </div>
    );
};

export default Proyectos;
