import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/ghost';
import '../css/noticias.css';
import '../css/global.css';
import '../css/responsive.css';

const Noticias = () => {
    const [noticias, setNoticias] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNoticias = async () => {
            try {
                const res = await api.posts.browse({
                    filter: 'tag:noticia,tag:noticias',
                    include: 'tags,authors',
                    limit: 'all'
                });
                console.log("Noticias recibidas de Ghost:", res);
                setNoticias(res);
            } catch (err) {
                console.error("Error cargando noticias desde Ghost:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchNoticias();
    }, []);

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('es-ES', options);
    };

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
                    {loading ? (
                        <div className="loading-container text-center">
                            <div className="loader"></div>
                            <p>Cargando noticias...</p>
                        </div>
                    ) : noticias && noticias.length > 0 ? (
                        <div className="news-grid">
                            {noticias.map((nota) => (
                                <div key={nota.id} className="news-card">
                                    <div className="news-card-img">
                                        <img src={nota.feature_image || 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&q=80'} alt={nota.title} />
                                    </div>
                                    <div className="news-card-body">
                                        <span className="date">
                                            {formatDate(nota.published_at)} · {nota.primary_tag?.name || 'General'}
                                        </span>
                                        <h3>{nota.title}</h3>
                                        <p>{nota.excerpt}</p>
                                        <Link to={`/noticias/${nota.slug}`} className="read-more">
                                            Leer artículo completo <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center">
                            <p>No hay noticias publicadas en este momento.</p>
                        </div>
                    )}
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

