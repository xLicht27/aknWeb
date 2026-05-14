import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/ghost';
import '../css/global.css';
import '../css/ghost-content.css';

const ProyectoDetalle = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await api.posts.read({
                    slug: slug
                }, {
                    include: 'tags'
                });
                setPost(res);
            } catch (err) {
                console.error("Error cargando el proyecto desde Ghost:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('es-ES', options);
    };

    if (loading) {
        return (
            <div className="section-padding text-center">
                <div className="loader"></div>
                <p>Cargando proyecto...</p>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="section-padding text-center">
                <div className="container">
                    <h2>Proyecto no encontrado</h2>
                    <p>El proyecto que buscas no existe o ha sido eliminado.</p>
                    <Link to="/proyectos" className="btn-primary mt-24">Volver a Proyectos</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="post-detail-page">
            <section className="page-header" style={{ padding: '120px 0 60px' }}>
                <div className="container">
                    <div className="page-header-breadcrumb">
                        <Link to="/">Inicio</Link> / <Link to="/proyectos">Proyectos</Link> / {post.title}
                    </div>
                    <h1 style={{ maxWidth: '800px', margin: '0 auto', fontSize: 'clamp(2rem, 3vw, 2.5rem)' }}>{post.title}</h1>
                </div>
            </section>

            <section className="section-padding" style={{ background: '#fff' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ marginBottom: '20px', color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <i className="far fa-calendar-alt"></i> Proyecto culminado el {formatDate(post.published_at)}
                    </div>
                    {post.feature_image && (
                        <div style={{ marginBottom: '40px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
                            <img src={post.feature_image} alt={post.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                    )}
                    
                    <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />

                    <div style={{ marginTop: '60px', borderTop: '1px solid #e2e8f0', paddingTop: '30px', textAlign: 'center' }}>
                        <Link to="/proyectos" className="btn-outline-dark">
                            <i className="fas fa-arrow-left"></i> Volver a Proyectos
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProyectoDetalle;
