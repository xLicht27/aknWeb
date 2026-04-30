import React from 'react';
import { Link } from 'react-router-dom';
import '../css/noticias.css';
import '../css/global.css';
import '../css/responsive.css';

const Noticias = () => {
    return (
        <div className="noticias-page">
            <section className="page-header">
                <div className="container">
                    <div className="page-header-breadcrumb">
                        <Link to="/">Inicio</Link> / Noticias
                    </div>
                    <h1>Noticias y Artículos</h1>
                    <p>
                        Mantente informado sobre nuestros últimos proyectos, novedades del sector eléctrico y artículos técnicos especializados.
                    </p>
                </div>
            </section>

            {/* NEWS */}
            <section className="news section-padding">
                <div className="container">
                    <div className="news-grid">
                        <div className="news-card reveal">
                            <div className="news-card-img">
                                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&q=80" alt="Proyecto completado" />
                            </div>
                            <div className="news-card-body">
                                <span className="date">15 Feb 2026 · Proyectos</span>
                                <h3>Finalización exitosa del proyecto Planta Industrial Sur</h3>
                                <p>
                                    Completamos la instalación de más de 5,000 metros de cableado de alta tensión en tiempo récord, superando las expectativas del cliente y cumpliendo con todos los estándares de seguridad requeridos.
                                </p>
                                <Link to="/noticias/1" className="read-more">
                                    Leer artículo completo <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="news-card reveal">
                            <div className="news-card-img">
                                <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=500&q=80" alt="Mantenimiento" />
                            </div>
                            <div className="news-card-body">
                                <span className="date">02 Feb 2026 · Técnico</span>
                                <h3>Importancia del mantenimiento preventivo de transformadores</h3>
                                <p>
                                    Análisis detallado sobre por qué las pruebas de aislamiento y el análisis de aceite dieléctrico son fundamentales para la vida útil de los transformadores de potencia.
                                </p>
                                <Link to="/noticias/2" className="read-more">
                                    Leer artículo completo <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="news-card reveal">
                            <div className="news-card-img">
                                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80" alt="Certificación ISO" />
                            </div>
                            <div className="news-card-body">
                                <span className="date">20 Ene 2026 · Corporativo</span>
                                <h3>Corporación AKN renueva su certificación ISO 9001:2015</h3>
                                <p>
                                    Reafirmamos nuestro compromiso con la calidad y mejora continua en todos nuestros procesos operativos y de gestión tras una auditoría exitosa.
                                </p>
                                <Link to="/noticias/3" className="read-more">
                                    Leer artículo completo <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="news-card reveal">
                            <div className="news-card-img">
                                <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&q=80" alt="Energía Solar" />
                            </div>
                            <div className="news-card-body">
                                <span className="date">10 Ene 2026 · Innovación</span>
                                <h3>Tendencias en energía renovable para el sector industrial peruano</h3>
                                <p>
                                    El panorama energético está cambiando. Exploramos las oportunidades que ofrecen los sistemas fotovoltaicos para reducir costos operativos en la industria peruana.
                                </p>
                                <Link to="/noticias/4" className="read-more">
                                    Leer artículo completo <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="news-card reveal">
                            <div className="news-card-img">
                                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&q=80" alt="Seguridad eléctrica" />
                            </div>
                            <div className="news-card-body">
                                <span className="date">28 Dic 2025 · Seguridad</span>
                                <h3>Protocolos de seguridad eléctrica: claves para prevenir accidentes</h3>
                                <p>
                                    Revisamos las mejores prácticas en seguridad eléctrica industrial y los protocolos que toda empresa debe implementar según las normas NFPA 70E.
                                </p>
                                <Link to="/noticias/5" className="read-more">
                                    Leer artículo completo <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="news-card reveal">
                            <div className="news-card-img">
                                <img src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&q=80" alt="Alianza" />
                            </div>
                            <div className="news-card-body">
                                <span className="date">15 Dic 2025 · Corporativo</span>
                                <h3>Nueva alianza estratégica con LATAM Airlines para mantenimiento eléctrico</h3>
                                <p>
                                    Firmamos un acuerdo de servicios de mantenimiento eléctrico preventivo con LATAM Airlines para sus instalaciones en el Aeropuerto Jorge Chávez.
                                </p>
                                <Link to="/noticias/6" className="read-more">
                                    Leer artículo completo <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="container reveal">
                    <h2>¿Desea recibir nuestras novedades?</h2>
                    <p>Suscríbase a nuestro boletín para recibir las últimas noticias y artículos técnicos.</p>
                    <Link to="/contacto" className="btn-white">
                        <i className="fas fa-envelope"></i> Contactar
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
                <div className="whatsapp-tooltip">¡Escríbenos!</div>
            </a>
        </div>
    );
};

export default Noticias;
