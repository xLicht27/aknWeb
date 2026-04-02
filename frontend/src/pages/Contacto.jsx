import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { enviarCotizacion } from '../api';
import '../css/contacto.css';
import '../css/global.css';
import '../css/responsive.css';

const SERVICIOS = [
  'Grupos Electrógenos',
  'Tableros Eléctricos',
  'Cableado Industrial',
  'Mantenimiento Preventivo',
  'Mantenimiento Correctivo',
  'Instalaciones Eléctricas',
  'Energía Renovable',
  'Ingeniería de Proyectos',
];

const Contacto = () => {
  // ----------------------------------------
  // LÓGICA DEL FORMULARIO
  // ----------------------------------------
  const [form, setForm] = useState({
    empresa: '',
    nombre_contacto: '',
    email: '',
    telefono: '',
    servicio_requerido: '',
    descripcion: '',
  });
  const [estado, setEstado] = useState('idle'); // idle | loading | success | error
  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstado('loading');

    try {
      const res = await enviarCotizacion(form);
      setMensaje(res.data.mensaje);
      setEstado('success');
      // Limpiar formulario tras éxito
      setForm({ empresa: '', nombre_contacto: '', email: '', telefono: '', servicio_requerido: '', descripcion: '' });
    } catch (err) {
      const errMsg = err.response?.data?.error || 'Ocurrió un error. Por favor intente de nuevo.';
      setMensaje(errMsg);
      setEstado('error');
    }
  };

  // ----------------------------------------
  // VISTA
  // ----------------------------------------
  return (
    <div className="contacto-page">
      <section className="page-header">
        <div className="container">
          <div className="page-header-breadcrumb">
            <Link to="/">Inicio</Link> / Contacto
          </div>
          <h1>Contáctenos</h1>
          <p>Estamos listos para atender sus requerimientos técnicos con la calidad y rapidez que su proyecto necesita.</p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact section-padding">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info reveal-left">
              <h3>Información de Contacto</h3>
              <p>Contáctenos para una cotización o asesoría técnica personalizada. Nuestro equipo comercial está disponible para atenderle.</p>

              <div className="contact-item">
                <div className="contact-item-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div className="contact-item-text">
                  <h4>Oficina Principal</h4>
                  <p>Lima, Perú</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon"><i className="fas fa-phone-alt"></i></div>
                <div className="contact-item-text">
                  <h4>Teléfono</h4>
                  <p>(01) 4513488</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon"><i className="fas fa-envelope"></i></div>
                <div className="contact-item-text">
                  <h4>Email</h4>
                  <p>ventas@corporacionakn.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon"><i className="fab fa-whatsapp"></i></div>
                <div className="contact-item-text">
                  <h4>WhatsApp</h4>
                  <p>
                    <a href="https://wa.me/5114513488" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>
                      Iniciar conversación →
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon"><i className="fas fa-clock"></i></div>
                <div className="contact-item-text">
                  <h4>Horario de Atención</h4>
                  <p>Lunes a Viernes: 8:00 AM — 6:00 PM<br />Emergencias: 24/7</p>
                </div>
              </div>

              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.6508210373!2d-77.0326!3d-12.0464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAyJzQ3LjAiUyA3N8KwMDEnNTcuNCJX!5e0!3m2!1ses!2spe!4v1620000000000"
                  allowFullScreen=""
                  loading="lazy"
                  title="Ubicación AKN"
                ></iframe>
              </div>
            </div>

            {/* FORMULARIO DE CONTACTO */}
            <div className="form-card-light reveal-right">
              <h3>Solicitar Cotización</h3>

              {estado === 'success' && (
                <div style={{ background: '#d4edda', border: '1px solid #28a745', borderRadius: 8, padding: '16px', marginBottom: 20, color: '#155724' }}>
                  <i className="fas fa-check-circle" style={{ marginRight: 8 }}></i>
                  {mensaje}
                </div>
              )}

              {estado === 'error' && (
                <div style={{ background: '#f8d7da', border: '1px solid #dc3545', borderRadius: 8, padding: '16px', marginBottom: 20, color: '#721c24' }}>
                  <i className="fas fa-exclamation-circle" style={{ marginRight: 8 }}></i>
                  {mensaje}
                </div>
              )}

              {estado !== 'success' && (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Empresa</label>
                    <input type="text" name="empresa" value={form.empresa} onChange={handleChange} placeholder="Nombre de su empresa" />
                  </div>
                  <div className="form-group">
                    <label>Nombre de contacto *</label>
                    <input type="text" name="nombre_contacto" value={form.nombre_contacto} onChange={handleChange} placeholder="Nombre completo" required />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="correo@empresa.com" required />
                  </div>
                  <div className="form-group">
                    <label>Teléfono</label>
                    <input type="tel" name="telefono" value={form.telefono} onChange={handleChange} placeholder="+51 900 000 000" />
                  </div>
                  <div className="form-group">
                    <label>Servicio requerido *</label>
                    <select name="servicio_requerido" value={form.servicio_requerido} onChange={handleChange} required>
                      <option value="">Seleccione un servicio</option>
                      {SERVICIOS.map((s) => <option key={s} value={s}>{s}</option>)}
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Descripción del proyecto *</label>
                    <textarea name="descripcion" value={form.descripcion} onChange={handleChange} required placeholder="Cuéntenos sobre el servicio que necesita..."></textarea>
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={estado === 'loading'}>
                    {estado === 'loading'
                      ? <><i className="fas fa-spinner fa-spin"></i> Enviando...</>
                      : <><i className="fas fa-paper-plane"></i> Enviar Solicitud</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA WHATSAPP */}
      <section className="cta-banner">
        <div className="container reveal">
          <h2>¿Prefiere comunicarse por WhatsApp?</h2>
          <p>Escríbenos directamente y le atenderemos de inmediato.</p>
          <a href="https://wa.me/5114513488?text=Hola%2C%20me%20interesa%20solicitar%20una%20cotización" target="_blank" rel="noreferrer" className="btn-white">
            <i className="fab fa-whatsapp"></i> Escribir por WhatsApp
          </a>
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
        <div className="whatsapp-tooltip">¡Escríbenos por WhatsApp!</div>
      </a>
    </div>
  );
};

export default Contacto;
