import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { enviarPostulacion } from '../api';
import '../css/trabaja.css';
import '../css/global.css';
import '../css/responsive.css';

const TrabajaConNosotros = () => {
  return (
    <div className="trabaja-page">
      <section className="page-header">
        <div className="container">
          <div className="page-header-breadcrumb">
            <Link to="/">Inicio</Link> / Trabaja con Nosotros
          </div>
          <h1>Trabaja con Nosotros</h1>
          <p>
            Únete a un equipo de profesionales apasionados por la ingeniería y el mantenimiento industrial de clase mundial.
          </p>
        </div>
      </section>

      {/* WHY JOIN US */}
      <section className="section-padding bg-light-section">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">¿Por qué AKN?</div>
            <h2 className="section-title">Beneficios de ser parte del equipo</h2>
          </div>
          <div className="services-grid reveal-stagger">
            <div className="service-card cursor-default">
              <div className="service-icon"><i className="fas fa-chart-line"></i></div>
              <h3>Crecimiento Profesional</h3>
              <p>Plan de carrera estructurado con oportunidades de ascenso basadas en mérito y desempeño.</p>
            </div>
            <div className="service-card cursor-default">
              <div className="service-icon"><i className="fas fa-graduation-cap"></i></div>
              <h3>Capacitación Continua</h3>
              <p>Programas de formación técnica, certificaciones industriales y acceso a eventos especializados.</p>
            </div>
            <div className="service-card cursor-default">
              <div className="service-icon"><i className="fas fa-hand-holding-usd"></i></div>
              <h3>Remuneración Competitiva</h3>
              <p>Salarios por encima del mercado, bonos por desempeño y beneficios de ley completos.</p>
            </div>
            <div className="service-card cursor-default">
              <div className="service-icon"><i className="fas fa-shield-alt"></i></div>
              <h3>Seguridad y Bienestar</h3>
              <p>Cultura de seguridad primero. Equipos de protección de última generación y seguros médicos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="careers section-padding">
        <div className="container">
          <div className="careers-content">
            <div className="careers-info reveal-left">
              <h3>Únete al Equipo</h3>
              <h2>Envía tu Candidatura</h2>
              <p>Si no encuentras una vacante que se ajuste a tu perfil, envíanos tu CV y lo tendremos en cuenta para futuras oportunidades.</p>
              <div className="careers-perks">
                <div className="perk"><i className="fas fa-check-circle"></i><span>Proceso de selección transparente</span></div>
                <div className="perk"><i className="fas fa-check-circle"></i><span>Respuesta en máximo 5 días hábiles</span></div>
                <div className="perk"><i className="fas fa-check-circle"></i><span>Entrevistas técnicas presenciales o virtuales</span></div>
                <div className="perk"><i className="fas fa-check-circle"></i><span>Incorporación con programa de inducción</span></div>
              </div>
            </div>

            <div className="form-card reveal-right text-center">
              <h3>Portales de Empleo</h3>
              <p style={{ color: 'var(--text-gray)', marginBottom: '24px' }}>
                Encuentra nuestras vacantes actuales y postula a través de nuestros canales oficiales:
              </p>
              
              <div className="job-portals">
                <a href="https://www.linkedin.com/company/corporacion-akn/" target="_blank" rel="noopener noreferrer" className="btn-portal btn-linkedin">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="https://pe.computrabajo.com/" target="_blank" rel="noopener noreferrer" className="btn-portal btn-computrabajo">
                  <i className="fas fa-briefcase"></i> CompuTrabajo
                </a>
              </div>
            </div>
          </div>
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

export default TrabajaConNosotros;
