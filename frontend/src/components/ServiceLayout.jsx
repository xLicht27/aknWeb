import React from 'react';
import '../css/servicios.css';

const ServiceLayout = ({ title, subtitle, description, highlights, benefits, image }) => {
  return (
    <div className="service-page-container">
      <div className="service-page-header">
        <h1 className="service-title" dangerouslySetInnerHTML={{ __html: title }}></h1>
        <p className="service-subtitle">{subtitle}</p>
        <p className="service-description">{description}</p>
      </div>

      <div className="container">
        <div className="service-highlights">
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

        {benefits && benefits.length > 0 && (
          <div className="service-benefits-grid">
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

        <div className="service-excellence-section">
          <div className="excellence-image-wrapper">
             <img src={image || "/img/placeholder.jpg"} alt="Excelencia Técnica" />
             <div className="support-badge">
                <strong>24/7</strong>
                <span>SOPORTE TÉCNICO ESPECIALIZADO</span>
             </div>
          </div>
          <div className="excellence-content">
             <h2>Excelencia en <span>Ingeniería Energética</span></h2>
             <p>Nuestra metodología de trabajo prioriza la seguridad y la eficiencia. Entendemos que un sistema de respaldo no es un lujo, sino una necesidad vital para la protección de activos y la continuidad de su negocio.</p>
             <ul className="excellence-list">
               <li><i className="fas fa-check-circle"></i> Ingeniería de detalle en cada instalación.</li>
               <li><i className="fas fa-check-circle"></i> Cumplimiento estricto de normativas de seguridad eléctrica.</li>
               <li><i className="fas fa-check-circle"></i> Repuestos originales y soporte de fábrica.</li>
             </ul>
          </div>
        </div>

        <div className="service-cta">
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
