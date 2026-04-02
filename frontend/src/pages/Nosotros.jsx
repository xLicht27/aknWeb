import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nosotros.css';
import '../css/global.css';
import '../css/responsive.css';

const Nosotros = () => {
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
                        <div className="about-image reveal-left">
                            <img
                                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80"
                                alt="Corporación AKN"
                            />
                            <div className="about-image-badge">10 años<br />de experiencia</div>
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
                            <div style={{ marginTop: '24px' }}>
                                <Link to="/contacto" className="btn-primary">
                                    <i className="fas fa-envelope"></i> Contáctenos
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TIMELINE */}
            <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="section-header reveal">
                        <div className="section-label">Nuestra Trayectoria</div>
                        <h2 className="section-title">Hitos Importantes</h2>
                    </div>
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <div className="timeline reveal">
                            <div className="timeline-item">
                                <span className="year">2010</span>
                                <h4>Fundación de Corporación AKN</h4>
                                <p>Inicio de operaciones enfocados en instalaciones eléctricas residenciales e industriales en Lima.</p>
                            </div>
                            <div className="timeline-item">
                                <span className="year">2013</span>
                                <h4>Expansión a proyectos comerciales</h4>
                                <p>Primeros contratos con centros comerciales y edificios corporativos de gran envergadura.</p>
                            </div>
                            <div className="timeline-item">
                                <span className="year">2016</span>
                                <h4>Certificación ISO 9001:2015</h4>
                                <p>Obtención de la certificación internacional de calidad, consolidando nuestros procesos operativos.</p>
                            </div>
                            <div className="timeline-item">
                                <span className="year">2018</span>
                                <h4>Alianzas con corporaciones internacionales</h4>
                                <p>Inicio de relaciones comerciales con Toyota, Air Canada, LATAM Airlines, Air Europa y CAE.</p>
                            </div>
                            <div className="timeline-item">
                                <span className="year">2021</span>
                                <h4>División de energía renovable</h4>
                                <p>Lanzamiento de nuestra línea de servicios en energía solar e instalaciones fotovoltaicas.</p>
                            </div>
                            <div className="timeline-item">
                                <span className="year">2024</span>
                                <h4>Más de 350 proyectos completados</h4>
                                <p>Hito de 350 proyectos entregados exitosamente con más de 120 clientes activos a nivel nacional.</p>
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
                            <p>Confianza, cooperación, calidad y sostenibilidad. Estos pilares fundamentales guían cada decisión y cada proyecto que ejecutamos como corporación.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUES */}
            <section className="values section-padding">
                <div className="container">
                    <div className="section-header reveal">
                        <div className="section-label" style={{ color: 'var(--primary-light)' }}>Nuestros Pilares</div>
                        <h2 className="section-title section-title-light">Lo que nos Define</h2>
                    </div>
                    <div className="values-grid reveal-stagger">
                        <div className="value-item">
                            <div className="value-icon"><i className="fas fa-handshake"></i></div>
                            <h4>Confianza</h4>
                            <p>Relaciones sólidas basadas en transparencia y cumplimiento de compromisos</p>
                        </div>
                        <div className="value-item">
                            <div className="value-icon"><i className="fas fa-people-carry"></i></div>
                            <h4>Cooperación</h4>
                            <p>Trabajó en equipo con clientes y socios estratégicos para resultados óptimos</p>
                        </div>
                        <div className="value-item">
                            <div className="value-icon"><i className="fas fa-award"></i></div>
                            <h4>Calidad</h4>
                            <p>Estándares internacionales en cada proyecto que ejecutamos sin excepción</p>
                        </div>
                        <div className="value-item">
                            <div className="value-icon"><i className="fas fa-seedling"></i></div>
                            <h4>Sostenibilidad</h4>
                            <p>Compromiso con el medio ambiente y el desarrollo responsable del país</p>
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
        </div>
    );
};

export default Nosotros;
