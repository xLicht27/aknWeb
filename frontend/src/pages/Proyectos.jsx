import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/ghost';
import '../css/proyectos.css';
import '../css/index.css'
import '../css/global.css';
import '../css/responsive.css';

const Proyectos = () => {
    const [proyectos, setProyectos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProyectos = async () => {
            try {
                const res = await api.posts.browse({
                    filter: 'tag:proyecto,tag:proyectos',
                    include: 'tags',
                    limit: 'all'
                });
                console.log("Proyectos recibidos de Ghost:", res);
                setProyectos(res);
            } catch (err) {
                console.error("Error cargando proyectos desde Ghost:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProyectos();
    }, []);

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('es-ES', options);
    };

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
                    {loading ? (
                        <div className="loading-container text-center">
                            <div className="loader"></div>
                            <p>Cargando proyectos...</p>
                        </div>
                    ) : proyectos && proyectos.length > 0 ? (
                        <div className="projects-grid">
                            {proyectos.map((proy) => (
                                <div key={proy.id} className="project-card">
                                    <div className="project-card-img">
                                        <img src={proy.feature_image || 'https://i0.wp.com/impactify.io/wp-content/uploads/2024/05/placeholder-5.png?ssl=1'} alt={proy.title} />
                                    </div>
                                    <div className="project-card-body">
                                        <span className="date">
                                            {formatDate(proy.published_at)} · {proy.primary_tag?.name || 'Proyecto'}
                                        </span>
                                        <h3>{proy.title}</h3>
                                        <p>{proy.excerpt}</p>
                                        <Link to={`/proyectos/${proy.slug}`} className="read-more">
                                            Ver proyecto completo <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center">
                            <p>No se encontraron proyectos publicados. Asegúrate de etiquetarlos como 'proyecto' en Ghost.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* STATS */}
            <section className="values section-padding">
                <div className="container">
                    <div className="counters-grid reveal-stagger">
                        <div className="counter-item">
                            <div className="counter-number text-primary-light">350+</div>
                            <div className="counter-label">Proyectos Entregados</div>
                        </div>
                        <div className="counter-item">
                            <div className="counter-number text-primary-light">19+</div>
                            <div className="counter-label">Clientes Corporativos</div>
                        </div>
                        <div className="counter-item">
                            <div className="counter-number text-primary-light">6+</div>
                            <div className="counter-label">Sectores Industriales</div>
                        </div>
                        <div className="counter-item">
                            <div className="counter-number text-primary-light">100%</div>
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

            {/* ============ WHATSAPP FLOAT ============ */}
            <a
                href="https://wa.me/51993024474?text=%9A%A1%20Vengo%20de%20la%20web"
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

export default Proyectos;

