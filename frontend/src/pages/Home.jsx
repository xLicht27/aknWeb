import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/ghost';
import '../css/index.css'
import '../css/servicios.css'
import '../css/proyectos.css'
import '../css/nosotros.css'
import '../css/global.css'
import '../css/responsive.css'

const Home = () => {
    const [proyectosDestacados, setProyectosDestacados] = useState([]);
    const [loadingProyectos, setLoadingProyectos] = useState(true);

    useEffect(() => {
        const fetchProyectos = async () => {
            try {
                const res = await api.posts.browse({
                    filter: 'tag:proyecto,tag:proyectos',
                    limit: 3,
                    include: 'tags'
                });
                setProyectosDestacados(res);
            } catch (err) {
                console.error("Error cargando proyectos en Home:", err);
            } finally {
                setLoadingProyectos(false);
            }
        };

        fetchProyectos();
    }, []);

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('es-ES', options);
    };

    useEffect(() => {
        /* ---- Lógica de Contadores (initCounters) ---- */
        const section = document.getElementById('counters');
        let counted = false;
        let countersObs;
        if (section) {
            countersObs = new IntersectionObserver((entries) => {
                entries.forEach(e => {
                    if (e.isIntersecting && !counted) {
                        counted = true;
                        document.querySelectorAll('[data-target]').forEach(counter => {
                            const target = +counter.dataset.target;
                            const duration = 2000;
                            const step = Math.ceil(target / (duration / 16));
                            let current = 0;
                            const timer = setInterval(() => {
                                current += step;
                                if (current >= target) {
                                    current = target;
                                    clearInterval(timer);
                                }
                                counter.textContent = current;
                            }, 16);
                        });
                    }
                });
            }, { threshold: 0.3 });
            countersObs.observe(section);
        }
        /* ---- Lógica de Partículas (initParticles) ---- */
        const canvas = document.getElementById('heroCanvas');
        let animationId;
        let handleResize;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            let w, h, particles = [];
            handleResize = () => {
                w = canvas.width = canvas.parentElement.offsetWidth;
                h = canvas.height = canvas.parentElement.offsetHeight;
            };
            handleResize();
            window.addEventListener('resize', handleResize);
            class Particle {
                constructor() { this.reset(); }
                reset() {
                    this.x = Math.random() * w;
                    this.y = Math.random() * h;
                    this.size = Math.random() * 2 + 0.5;
                    this.speedX = (Math.random() - 0.5) * 0.4;
                    this.speedY = (Math.random() - 0.5) * 0.4;
                    this.opacity = Math.random() * 0.4 + 0.1;
                }
                update() {
                    this.x += this.speedX;
                    this.y += this.speedY;
                    if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) this.reset();
                }
                draw() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(232,117,26,${this.opacity})`;
                    ctx.fill();
                }
            }
            for (let i = 0; i < 80; i++) particles.push(new Particle());
            const animate = () => {
                ctx.clearRect(0, 0, w, h);
                particles.forEach(p => { p.update(); p.draw(); });
                // Lógica de conexión
                for (let a = 0; a < particles.length; a++) {
                    for (let b = a + 1; b < particles.length; b++) {
                        const dx = particles[a].x - particles[b].x;
                        const dy = particles[a].y - particles[b].y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < 120) {
                            ctx.beginPath();
                            ctx.strokeStyle = `rgba(232,117,26,${0.08 * (1 - dist / 120)})`;
                            ctx.lineWidth = 0.5;
                            ctx.moveTo(particles[a].x, particles[a].y);
                            ctx.lineTo(particles[b].x, particles[b].y);
                            ctx.stroke();
                        }
                    }
                }
                animationId = requestAnimationFrame(animate);
            };
            animate();
        }
        // LIMPIEZA: Es vital en React para no dejar procesos corriendo
        return () => {
            if (countersObs) countersObs.disconnect();
            if (handleResize) window.removeEventListener('resize', handleResize);
            if (animationId) cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className="home-page">
            {/* ============ HERO ============ */}
            <section className="hero" id="inicio">
                <div className="hero-bg"></div>
                <canvas className="hero-canvas" id="heroCanvas"></canvas>
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Liderazgo Global en <br />
                            <span className="highlight">Soluciones Eléctricas</span>
                        </h1>
                        <p className="hero-desc">
                            Especialistas en instalación de grupos electrógenos, cableado industrial, tableros
                            eléctricos y mantenimiento preventivo para grandes infraestructuras.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/servicios/tableros-electricos" className="btn-primary">
                                <i className="fas fa-cogs"></i> Nuestros Servicios
                            </Link>
                            <Link to="/contacto" className="btn-outline">
                                <i className="fas fa-envelope"></i> Cotizar Proyecto
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ COUNTERS ============ */}
            <section className="counters" id="counters">
                <div className="container">
                    <div className="counters-grid">
                        <div className="counter-item reveal">
                            <div className="counter-number"><span data-target="10">0</span>+</div>
                            <div className="counter-label">Años de Experiencia</div>
                        </div>
                        <div className="counter-item reveal">
                            <div className="counter-number"><span data-target="350">0</span>+</div>
                            <div className="counter-label">Proyectos Entregados</div>
                        </div>
                        <div className="counter-item reveal">
                            <div className="counter-number"><span data-target="120">0</span>+</div>
                            <div className="counter-label">Clientes Satisfechos</div>
                        </div>
                        <div className="counter-item reveal">
                            <div className="counter-number"><span data-target="80">0</span>+</div>
                            <div className="counter-label">Profesionales</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ SERVICES PREVIEW ============ */}
            <section className="services section-padding" id="servicios-preview">
                <div className="container">
                    <div className="section-header reveal">
                        <div className="section-label">Nuestros Servicios</div>
                        <h2 className="section-title">Soluciones Integrales de<br />Ingeniería y Mantenimiento</h2>
                        <p className="section-subtitle">
                            Brindamos servicios especializados con los más altos estándares de calidad y seguridad industrial.
                        </p>
                    </div>
                    <div className="services-grid reveal-stagger">
                        <Link to="/servicios/grupos-electrogenos" className="service-card">
                            <div className="service-icon"><i className="fas fa-charging-station"></i></div>
                            <h3>Grupos Electrógenos</h3>
                            <p>Venta, instalación, sincronismo y mantenimiento de grupos electrógenos de alta potencia.</p>
                            <span className="learn-more">Más información <i className="fas fa-arrow-right"></i></span>
                        </Link>
                        <Link to="/servicios/tableros-electricos" className="service-card">
                            <div className="service-icon"><i className="fas fa-project-diagram"></i></div>
                            <h3>Tableros Eléctricos</h3>
                            <p>Diseño, fabricación y montaje de tableros de distribución, control y automatización.</p>
                            <span className="learn-more">Más información <i className="fas fa-arrow-right"></i></span>
                        </Link>
                        <Link to="/servicios/sistema-de-media-tension" className="service-card">
                            <div className="service-icon"><i className="fas fa-network-wired"></i></div>
                            <h3>Cableado Industrial</h3>
                            <p>Instalación de bandejas portacables, ductería y tendido de conductores de gran sección.</p>
                            <span className="learn-more">Más información <i className="fas fa-arrow-right"></i></span>
                        </Link>
                        <Link to="/servicios/analisis-sistema-electrico" className="service-card">
                            <div className="service-icon"><i className="fas fa-wrench"></i></div>
                            <h3>Mantenimiento Preventivo</h3>
                            <p>Planes programados para garantizar la continuidad operativa de sus sistemas eléctricos.</p>
                            <span className="learn-more">Más información <i className="fas fa-arrow-right"></i></span>
                        </Link>
                    </div>
                    <div className="text-center mt-48 reveal">
                        <Link to="/servicios/tableros-electricos" className="btn-outline-dark">
                            <i className="fas fa-th-list"></i> Ver Todos los Servicios
                        </Link>
                    </div>
                </div>
            </section>

            {/* ============ ABOUT PREVIEW ============ */}
            <section className="about section-padding">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-image reveal-left">
                            <img src="/img/hero/IMG_0465.webp" alt="Corporación AKN - Ingeniería" />
                            <div className="about-image-badge">10 años<br />de experiencia</div>
                        </div>
                        <div className="about-text reveal-right">
                            <h3>Sobre Nosotros</h3>
                            <h2>Excelencia en Ingeniería Eléctrica e Industrial</h2>
                            <p>
                                Corporación AKN es una empresa líder en ingeniería y mantenimiento, dedicada a brindar soluciones
                                integrales para proyectos industriales, comerciales y de construcción civil a nivel nacional.
                            </p>
                            <p>
                                Nos especializamos en ser el brazo técnico de confianza para empresas que requieren
                                infraestructura eléctrica de alto nivel.
                            </p>
                            <div className="about-features">
                                <div className="about-feature"><i className="fas fa-handshake"></i><span>Confianza</span></div>
                                <div className="about-feature"><i className="fas fa-people-arrows"></i><span>Cooperación</span></div>
                                <div className="about-feature"><i className="fas fa-check-circle"></i><span>Calidad</span></div>
                                <div className="about-feature"><i className="fas fa-leaf"></i><span>Sostenibilidad</span></div>
                            </div>
                            <div className="mt-28">
                                <Link to="/nosotros" className="btn-outline-dark">
                                    <i className="fas fa-arrow-right"></i> Conocer Más
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ VALUES ============ */}
            <section className="values section-padding">
                <div className="container">
                    <div className="section-header reveal">
                        <div className="section-label text-primary-light">Nuestros Pilares</div>
                        <h2 className="section-title section-title-light">Lo que nos Define</h2>
                    </div>
                    <div className="values-grid reveal-stagger">
                        <div className="value-item">
                            <div className="value-icon"><i className="fas fa-handshake"></i></div>
                            <h4>Confianza</h4>
                            <p>Relaciones sólidas basadas en transparencia y cumplimiento</p>
                        </div>
                        <div className="value-item">
                            <div className="value-icon"><i className="fas fa-people-carry"></i></div>
                            <h4>Cooperación</h4>
                            <p>Trabajó en equipo con nuestros clientes y socios estratégicos</p>
                        </div>
                        <div className="value-item">
                            <div className="value-icon"><i className="fas fa-award"></i></div>
                            <h4>Calidad</h4>
                            <p>Estándares internacionales en cada proyecto que ejecutamos</p>
                        </div>
                        <div className="value-item">
                            <div className="value-icon"><i className="fas fa-seedling"></i></div>
                            <h4>Sostenibilidad</h4>
                            <p>Compromiso con el medio ambiente y el desarrollo responsable</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ PROJECTS PREVIEW ============ */}
            <section className="projects section-padding">
                <div className="container">
                    <div className="section-header reveal">
                        <div className="section-label">Portafolio</div>
                        <h2 className="section-title">Proyectos Destacados</h2>
                        <p className="section-subtitle">Algunos de los proyectos más importantes que hemos ejecutado con éxito.</p>
                    </div>
                    <div className="projects-grid reveal-stagger">
                        {loadingProyectos ? (
                            <div className="text-center w-full" style={{ gridColumn: '1 / -1' }}>
                                <div className="loader" style={{ margin: '0 auto 20px' }}></div>
                                <p>Cargando proyectos...</p>
                            </div>
                        ) : proyectosDestacados.length > 0 ? (
                            proyectosDestacados.map((proy) => (
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
                            ))
                        ) : (
                            <div className="text-center w-full" style={{ gridColumn: '1 / -1' }}>
                                <p>Próximamente más proyectos destacados.</p>
                            </div>
                        )}
                    </div>
                    <div className="text-center mt-48 reveal">
                        <Link to="/proyectos" className="btn-outline-dark">
                            <i className="fas fa-images"></i> Ver Todos los Proyectos
                        </Link>
                    </div>
                </div>
            </section>

            {/* ============ CLIENTS MARQUEE ============ */}
            <section className="clients">
                <div className="section-header reveal" style={{ marginBottom: '24px', paddingTop: '20px' }}>
                    <div className="section-label">Confían en Nosotros</div>
                    <h2 className="section-title">Nuestros Clientes</h2>
                </div>
                <div className="clients-marquee-wrap">
                    <div className="clients-track row-1">
                        <img className='client-logo' src='img/clientes/grupo-eulen.png' alt='grupo-eulen'></img>
                        <img className='client-logo' src='img/clientes/UPC.png' alt='UPC'></img>
                        <img className='client-logo' src='img/clientes/mall-aventura.png' alt='mall-aventura'></img>
                        <img className='client-logo' src='img/clientes/alteliza.png' alt='alteliza'></img>
                        <img className='client-logo' src='img/clientes/senati.jpeg' alt='senati'></img>
                        <img className='client-logo' src='img/clientes/pepsico.png' alt='pepsico'></img>
                        <img className='client-logo' src='img/clientes/toyota.svg' alt='toyota'></img>
                        <img className='client-logo' src='img/clientes/air-canada.svg' alt='air-canada'></img>
                        <img className='client-logo' src='img/clientes/latam.svg' alt='latam'></img>
                        <img className='client-logo' src='img/clientes/air-europa.svg' alt='air-europa'></img>
                        {/*Loop*/}
                        <img className='client-logo' src='img/clientes/grupo-eulen.png' alt='grupo-eulen'></img>
                        <img className='client-logo' src='img/clientes/UPC.png' alt='UPC'></img>
                        <img className='client-logo' src='img/clientes/mall-aventura.png' alt='mall-aventura'></img>
                        <img className='client-logo' src='img/clientes/alteliza.png' alt='alteliza'></img>
                        <img className='client-logo' src='img/clientes/senati.jpeg' alt='senati'></img>
                        <img className='client-logo' src='img/clientes/pepsico.png' alt='pepsico'></img>
                        <img className='client-logo' src='img/clientes/toyota.svg' alt='toyota'></img>
                        <img className='client-logo' src='img/clientes/air-canada.svg' alt='air-canada'></img>
                        <img className='client-logo' src='img/clientes/latam.svg' alt='latam'></img>
                        <img className='client-logo' src='img/clientes/air-europa.svg' alt='air-europa'></img>
                    </div>
                    <div className="clients-track row-2">
                        <img className='client-logo' src='img/clientes/cae.svg' alt='cae'></img>
                        <img className='client-logo' src='img/clientes/cibertec.png' alt='cibertec'></img>
                        <img className='client-logo' src='img/clientes/intcomex.jpeg' alt='Intcomex'></img>
                        <img className='client-logo' src='img/clientes/banco-gnb.png' alt='Banco-gnb'></img>
                        <img className='client-logo' src='img/clientes/UPN.png' alt='UPN'></img>
                        <img className='client-logo' src='img/clientes/atento.png' alt='Atento'></img>
                        <img className='client-logo' src='img/clientes/mall-plaza.svg' alt='mall-plaza'></img>
                        <img className='client-logo' src='img/clientes/jockeyplaza.png' alt='jockey-plaza'></img>
                        <img className='client-logo' src='img/clientes/enel.png' alt='enel'></img>
                        {/*Loop*/}
                        <img className='client-logo' src='img/clientes/cae.svg' alt='cae'></img>
                        <img className='client-logo' src='img/clientes/cibertec.png' alt='cibertec'></img>
                        <img className='client-logo' src='img/clientes/intcomex.jpeg' alt='Intcomex'></img>
                        <img className='client-logo' src='img/clientes/banco-gnb.png' alt='Banco-gnb'></img>
                        <img className='client-logo' src='img/clientes/UPN.png' alt='UPN'></img>
                        <img className='client-logo' src='img/clientes/atento.png' alt='Atento'></img>
                        <img className='client-logo' src='img/clientes/mall-plaza.svg' alt='mall-plaza'></img>
                        <img className='client-logo' src='img/clientes/jockeyplaza.png' alt='jockey-plaza'></img>
                        <img className='client-logo' src='img/clientes/enel.png' alt='enel'></img>
                    </div>
                </div>
            </section>

            {/* ============ CTA BANNER ============ */}
            <section className="cta-banner">
                <div className="container reveal">
                    <h2>¿Tiene un proyecto en mente?</h2>
                    <p>Contáctenos para una cotización personalizada. Estamos listos para atender sus requerimientos.</p>
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

export default Home;
