import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/nosotros.css';
import '../css/global.css';
import '../css/responsive.css';

const Nosotros = () => {
    const [aboutImgIndex, setAboutImgIndex] = useState(0);
    const aboutImages = ['/img/hero/IMG_6014.webp', '/img/hero/IMG_4624.webp', '/img/hero/IMG_0898.webp', '/img/hero/IMG_5833.webp', '/img/hero/IMG_3298', '/img/hero/IMG_5478', '/img/hero/IMG_9812'];

    useEffect(() => {
        const timer = setInterval(() => {
            setAboutImgIndex((prev) => (prev + 1) % aboutImages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="nosotros-page">
            {/* PAGE HEADER */}
            <section className="page-header">
                <div className="container">
                    <div className="page-header-breadcrumb">
                        <Link to="/">Inicio</Link> / Nosotros
                    </div>
                    <h1>Sobre Nosotros</h1>
                    <p>
                        Liderazgo global en soluciones eléctricas con más de 10 años de experiencia en ingeniería y mantenimiento industrial.
                    </p>
                </div>
            </section>

            {/* ABOUT */}
            <section className="about section-padding">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-image reveal-left" style={{ position: 'relative', height: '450px', overflow: 'hidden' }}>
                            {aboutImages.map((imgSrc, index) => (
                                <img
                                    key={index}
                                    src={imgSrc}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        opacity: index === aboutImgIndex ? 1 : 0,
                                        transform: index === aboutImgIndex ? 'scale(1)' : 'scale(1.08)',
                                        transition: 'opacity 1.2s ease-in-out, transform 1.5s ease-in-out',
                                        zIndex: index === aboutImgIndex ? 2 : 1
                                    }}
                                    alt="Corporación AKN"
                                />
                            ))}
                            <div className="about-image-badge" style={{ zIndex: 10 }}>10 años<br />de experiencia</div>
                        </div>
                        <div className="about-text reveal-right">
                            <h3>Nuestra Historia</h3>
                            <h2>Corporación AKN S.A.</h2>
                            <p>
                                Corporación AKN es una empresa líder en el sector de ingeniería y mantenimiento eléctrico, fundada con la misión de brindar soluciones integrales de alta calidad para proyectos industriales, comerciales y de construcción civil a nivel nacional e internacional.
                            </p>
                            <p>
                                Con más de 10 años de trayectoria, nos hemos consolidado como el socio estratégico de confianza para empresas de diversos sectores, desde centros comerciales y aerolíneas hasta entidades financieras y universidades.
                            </p>
                            <p>
                                Nuestro equipo multidisciplinario de ingenieros y técnicos especializados trabaja bajo los más estrictos estándares de seguridad y calidad, garantizando la continuidad operativa de cada uno de nuestros clientes.
                            </p>
                            <div className="mt-24">
                                <Link to="/contacto" className="btn-primary">
                                    <i className="fas fa-envelope"></i> Contáctenos
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TIMELINE */}
            <section className="section-padding bg-light-section">
                <div className="container">
                    <div className="section-header reveal">
                        <div className="section-label">Nuestra Trayectoria</div>
                        <h2 className="section-title">Hitos Importantes</h2>
                    </div>
                    <div className="max-w-700 mx-auto">
                        <div className="timeline reveal">
                            <div className="timeline-item">
                                <span className="year">2016</span>
                                <h4>Inicio de operaciones de Corporación AKN</h4>
                                <p>Comenzamos brindando servicios eléctricos especializados en Lima Metropolitana.</p>
                            </div>
                            <div className="timeline-item">
                                <span className="year">2018</span>
                                <h4>Expansión a proyectos corporativos</h4>
                                <p>Iniciamos atención a empresas, centros comerciales e infraestructura industrial.</p>
                            </div>
                            <div className="timeline-item">
                                <span className="year">2020</span>
                                <h4>Desarrollo de servicios en Media Tensión</h4>
                                <p>Ampliamos nuestras capacidades en subestaciones y sistemas eléctricos críticos.</p>
                            </div>
                            <div className="timeline-item">
                                <span className="year">2022</span>
                                <h4>Ingreso al sector aeroportuario</h4>
                                <p>Participación en proyectos y mantenimientos para operaciones aeroportuarias y aeronáuticas.</p>
                            </div>
                            <div className="timeline-item">
                                <span className="year">2024</span>
                                <h4>Expansión de operaciones a nivel nacional</h4>
                                <p>Ejecución de servicios técnicos en distintas regiones del país.</p>
                            </div>
                            <div className="timeline-item">
                                <span className="year">2026</span>
                                <h4>Consolidación en infraestructura eléctrica industrial</h4>
                                <p>Fortalecimiento de nuestras líneas de mantenimiento, tableros eléctricos y continuidad operativa.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CULTURE */}
            <section className="culture section-padding" id="cultura">
                <div className="container">
                    <div className="section-header reveal">
                        <div className="section-label">Identidad Corporativa</div>
                        <h2 className="section-title">Misión, Visión y Valores</h2>
                    </div>
                    <div className="culture-grid">
                        <div className="culture-card reveal">
                            <div className="culture-card-icon"><i className="fas fa-bullseye"></i></div>
                            <h3>Misión</h3>
                            <p>Garantizar la continuidad operativa de nuestros clientes mediante soluciones de ingeniería y mantenimiento seguras, eficientes y con los más altos estándares de calidad técnica.</p>
                        </div>
                        <div className="culture-card reveal">
                            <div className="culture-card-icon"><i className="fas fa-eye"></i></div>
                            <h3>Visión</h3>
                            <p>Ser la empresa de ingeniería y mantenimiento referente a nivel nacional e internacional, reconocida por nuestra innovación tecnológica, excelencia operativa y compromiso con el desarrollo sostenible.</p>
                        </div>
                        <div className="culture-card reveal">
                            <div className="culture-card-icon"><i className="fas fa-gem"></i></div>
                            <h3>Valores</h3>
                            <p>Ingeniería, seguridad, confiabilidad y calidad. Estos pilares fundamentales guían cada decisión y cada proyecto que ejecutamos como corporación.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUES */}
            <section className="values section-padding">
                <div className="container">
                    <div className="section-header reveal">
                        <div className="section-label text-primary-light">Nuestros Pilares</div>
                        <h2 className="section-title section-title-light">Lo que nos Define</h2>
                    </div>
                    <div className="values-grid reveal-stagger">
                        <div className="value-item">
                            <div className="value-icon"><i className="fas fa-cogs"></i></div>
                            <h4>Ingeniería</h4>
                            <p>Soluciones diseñadas con criterio técnico y enfoque en continuidad operativa.</p>
                        </div>
                        <div className="value-item">
                            <div className="value-icon"><i className="fas fa-shield-alt"></i></div>
                            <h4>Seguridad</h4>
                            <p>Procesos seguros orientados a proteger personas, equipos e infraestructura.</p>
                        </div>
                        <div className="value-item">
                            <div className="value-icon"><i className="fas fa-check-circle"></i></div>
                            <h4>Confiabilidad</h4>
                            <p>Respuesta técnica eficiente para operaciones críticas y sistemas eléctricos industriales.</p>
                        </div>
                        <div className="value-item">
                            <div className="value-icon"><i className="fas fa-award"></i></div>
                            <h4>Calidad</h4>
                            <p>Servicios ejecutados bajo altos estándares técnicos y operativos.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CERTIFICATIONS */}
            <section className="certifications section-padding">
                <div className="container">
                    <div className="section-header reveal">
                        <div className="section-label">Certificaciones</div>
                        <h2 className="section-title">Normas y Estándares</h2>
                        <p className="section-subtitle">Operamos bajo los más estrictos estándares y normativas internacionales.</p>
                    </div>
                    <div className="certs-grid reveal-stagger">
                        <div className="cert-card">
                            <i className="fas fa-award"></i>
                            <h4>ISO 9001:2015</h4>
                            <p>Sistema de Gestión de Calidad certificado internacionalmente</p>
                        </div>
                        <div className="cert-card">
                            <i className="fas fa-hard-hat"></i>
                            <h4>ISO 45001</h4>
                            <p>Seguridad y Salud Ocupacional en el Trabajo</p>
                        </div>
                        <div className="cert-card">
                            <i className="fas fa-leaf"></i>
                            <h4>ISO 14001</h4>
                            <p>Sistema de Gestión Ambiental</p>
                        </div>
                        <div className="cert-card">
                            <i className="fas fa-check-double"></i>
                            <h4>NTP / CNE</h4>
                            <p>Norma Técnica Peruana y Código Nacional Eléctrico</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-banner">
                <div className="container reveal">
                    <h2>¿Listo para trabajar con nosotros?</h2>
                    <p>Descubra cómo podemos ser su socio estratégico en ingeniería y mantenimiento.</p>
                    <Link to="/contacto" className="btn-white">
                        <i className="fas fa-paper-plane"></i> Contáctenos
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

export default Nosotros;
