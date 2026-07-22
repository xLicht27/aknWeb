import React from 'react';
import { Link } from 'react-router-dom';
import '../css/servicios.css';

const ServiceLayout = ({ title, subtitle, description, points = [], images = [], image, highlights = [], benefits = [] }) => {
  // Support both arrays of images and single image string for backward compatibility
  let finalImages = [...images];
  if (finalImages.length === 0 && image) {
    const parts = image.split('/');
    const fileName = parts[parts.length - 1];
    finalImages = [fileName];
  }

  // Distribute the images across the layout
  const heroImage = finalImages[0] || null;
  const sectionImage = finalImages[1] || null;
  const extraImages = finalImages.slice(2);

  return (
    <div className="service-page-container">
      <div className="noticias-page">
        <section className="page-header">
          <div className="container">
            <div className="page-header-breadcrumb">
              <Link to="/">Inicio</Link> / <span className="breadcrumb-current">Servicios</span>
            </div>
            <h1 dangerouslySetInnerHTML={{ __html: title || "Nuestros Servicios" }}></h1>
            <p>{subtitle || "Ofrecemos soluciones integrales en ingeniería eléctrica y mantenimiento."}</p>
          </div>
        </section>
      </div>

      <div className="container">
        <div style={{ height: '50px' }}></div>
        
        {/* Main Service Card / Section with Split Layout */}
        <div className="service-detail-section reveal">
          <div className="service-detail-grid-layout">
            <div className="service-detail-text">
              <h2 className="service-detail-title">{title ? title.replace(/<span>|<\/span>/g, '') : "Detalle de Servicio"}</h2>
              <p className="service-detail-description">{description}</p>
              
              {points.length > 0 && (
                <div className="service-points-container">
                  <h3>Puntos de Servicio</h3>
                  <ul className="service-points-list">
                    {points.map((point, index) => (
                      <li key={index}>
                        <i className="fas fa-check-circle"></i> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {heroImage && (
              <div className="featured-image-container">
                <img 
                  src={`/img/hero/${heroImage}`} 
                  alt={`Servicio AKN - ${title ? title.replace(/<span>|<\/span>/g, '') : "Servicio"}`}
                  className="featured-full-image"
                  loading="lazy" 
                />
              </div>
            )}
          </div>
        </div>

        {highlights && highlights.length > 0 && (
          <div className="service-highlights" style={{ marginTop: '50px' }}>
            {highlights.map((highlight, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">
                  <i className={highlight.icon || "fas fa-bolt"}></i>
                </div>
                <h3>{highlight.title}</h3>
                {highlight.text && <p>{highlight.text}</p>}
                {highlight.items && (
                  <div className="service-card-badges">
                    {highlight.items.map((item, i) => (
                      <span key={i} className="service-badge">{item}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Asymmetric Alternating Extra Section with Image 2 */}
        <div className="asymmetric-extra-section reveal">
          {sectionImage && (
            <div className="featured-image-container">
              <img 
                src={`/img/hero/${sectionImage}`} 
                alt={`Detalle de trabajo - ${title ? title.replace(/<span>|<\/span>/g, '') : "Servicio"}`} 
                className="featured-full-image" 
                loading="lazy"
              />
            </div>
          )}
          <div className="asymmetric-section-text">
            <h2>Compromiso de <span>Calidad AKN</span></h2>
            <p>Nuestros ingenieros y técnicos altamente especializados realizan cada trabajo bajo estrictas normativas nacionales e internacionales. Garantizamos soluciones eficientes que minimizan riesgos y costos operativos en su empresa.</p>
            <ul className="excellence-list">
              <li><i className="fas fa-shield-alt"></i> Seguridad y salud en el trabajo como máxima prioridad.</li>
              <li><i className="fas fa-check-double"></i> Equipamiento de diagnóstico calibrado y de última generación.</li>
              <li><i className="fas fa-file-invoice"></i> Informes técnicos detallados respaldados por ingenieros colegiados.</li>
            </ul>
          </div>
        </div>

        {benefits && benefits.length > 0 && (
          <div className="service-benefits-grid" style={{ marginTop: '50px' }}>
            {benefits.map((benefit, index) => (
              <div className={`benefit-card ${benefit.dark ? 'dark' : ''}`} key={index}>
                <div className="icon-wrap">
                  <i className={benefit.icon || "fas fa-check-circle"}></i>
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
        )}

        {/* Remaining Images distributed at the bottom in Polaroid cards */}
        {extraImages.length > 0 && (
          <div className="scattered-images-container reveal">
            <div className="scattered-images-row">
              {extraImages.map((imgName, index) => (
                <div className="scattered-image-card" key={index}>
                  <img 
                    src={`/img/hero/${imgName}`} 
                    alt={`Trabajo AKN - ${title ? title.replace(/<span>|<\/span>/g, '') : "Servicio"}`} 
                    className="crisp-service-image"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="service-cta" style={{ marginTop: '55px' }}>
          <div className="service-cta-content">
            <h2>Contacte a un especialista para su proyecto de energía</h2>
            <p>Evaluamos su requerimiento y diseñamos una solución a medida sin compromiso.</p>
          </div>
          <a href="/contacto" className="btn-cotizar">Cotizar</a>
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;
