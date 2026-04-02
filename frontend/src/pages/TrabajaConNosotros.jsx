import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { enviarPostulacion, getVacantes } from '../api';
import '../css/trabaja.css';
import '../css/global.css';
import '../css/responsive.css';

const TrabajaConNosotros = () => {
  // ----------------------------------------
  // LÓGICA DE REACT (HOOKS Y API)
  // ----------------------------------------
  const [vacantes, setVacantes] = useState([]);
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    cargo_postulado: '',
    vacante_id: '',
    mensaje: '',
  });
  const [estado, setEstado] = useState('idle');
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    getVacantes()
      .then((res) => setVacantes(res.data))
      .catch(() => { });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
      // Si cambia la vacante, actualiza también el cargo_postulado
      ...(name === 'vacante_id'
        ? { cargo_postulado: vacantes.find((v) => v.id === parseInt(value))?.titulo || '' }
        : {}),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstado('loading');
    try {
      const payload = {
        ...form,
        vacante_id: form.vacante_id ? parseInt(form.vacante_id) : null,
      };
      const res = await enviarPostulacion(payload);
      setMensaje(res.data.mensaje);
      setEstado('success');
    } catch (err) {
      setMensaje(err.response?.data?.error || 'Error al enviar. Intente de nuevo.');
      setEstado('error');
    }
  };

  // ----------------------------------------
  // VISTA (INTERFAZ DE USUARIO)
  // ----------------------------------------
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
      <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">¿Por qué AKN?</div>
            <h2 className="section-title">Beneficios de ser parte del equipo</h2>
          </div>
          <div className="services-grid reveal-stagger">
            <div className="service-card" style={{ cursor: 'default' }}>
              <div className="service-icon"><i className="fas fa-chart-line"></i></div>
              <h3>Crecimiento Profesional</h3>
              <p>Plan de carrera estructurado con oportunidades de ascenso basadas en mérito y desempeño. Proyectos que desafían tu capacidad técnica.</p>
            </div>
            <div className="service-card" style={{ cursor: 'default' }}>
              <div className="service-icon"><i className="fas fa-graduation-cap"></i></div>
              <h3>Capacitación Continua</h3>
              <p>Programas de formación técnica, certificaciones industriales y acceso a eventos especializados del sector eléctrico y de ingeniería.</p>
            </div>
            <div className="service-card" style={{ cursor: 'default' }}>
              <div className="service-icon"><i className="fas fa-hand-holding-usd"></i></div>
              <h3>Remuneración Competitiva</h3>
              <p>Salarios por encima del mercado, bonos por desempeño, beneficios de ley completos y programas de incentivos para nuestro personal.</p>
            </div>
            <div className="service-card" style={{ cursor: 'default' }}>
              <div className="service-icon"><i className="fas fa-shield-alt"></i></div>
              <h3>Seguridad y Bienestar</h3>
              <p>Cultura de seguridad primero. Equipos de protección de última generación, seguros médicos y programas de bienestar integral.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="section-padding" style={{ background: '#fff' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Vacantes</div>
            <h2 className="section-title">Posiciones Abiertas</h2>
            <p className="section-subtitle">Consulta nuestras vacantes actuales y postula al cargo que mejor se adapte a tu perfil.</p>
          </div>
          <div className="detail-grid reveal-stagger">
            <div className="detail-card">
              <div className="icon-wrap"><i className="fas fa-bolt"></i></div>
              <h3>Ingeniero Eléctrico Senior</h3>
              <p>Responsable del diseño e ingeniería de proyectos eléctricos en media y baja tensión para el sector industrial.</p>
              <ul>
                <li>Experiencia mínima de 5 años en proyectos eléctricos</li>
                <li>Colegiado y habilitado por el CIP</li>
                <li>Conocimiento de AutoCAD, ETAP y Revit</li>
                <li>Disponibilidad para viajar a obra</li>
              </ul>
            </div>
            <div className="detail-card">
              <div className="icon-wrap"><i className="fas fa-hard-hat"></i></div>
              <h3>Técnico Electricista Industrial</h3>
              <p>Ejecución de trabajos de instalación y mantenimiento eléctrico en proyectos industriales y comerciales.</p>
              <ul>
                <li>Experiencia mínima de 3 años en instalaciones industriales</li>
                <li>Certificación SENATI o institución equivalente</li>
                <li>Conocimiento en tableros de distribución y fuerza</li>
                <li>Certificaciones de trabajo en altura y espacios confinados</li>
              </ul>
            </div>
            <div className="detail-card">
              <div className="icon-wrap"><i className="fas fa-clipboard-check"></i></div>
              <h3>Supervisor de Seguridad SST</h3>
              <p>Supervisión y control de protocolos de seguridad y salud ocupacional en obra y campo.</p>
              <ul>
                <li>Ingeniero de Seguridad o carreras afines</li>
                <li>Experiencia en el sector eléctrico/industrial</li>
                <li>Conocimiento de normas OSHA y DS 024</li>
                <li>Capacidad de liderazgo y gestión de equipos</li>
              </ul>
            </div>
            <div className="detail-card">
              <div className="icon-wrap"><i className="fas fa-drafting-compass"></i></div>
              <h3>Ingeniero de Proyectos</h3>
              <p>Planificación, coordinación y supervisión técnica de proyectos de ingeniería eléctrica desde la fase de diseño.</p>
              <ul>
                <li>Ingeniero Eléctrico o Mecánico-Eléctrico</li>
                <li>Experiencia en gestión de proyectos (PMI)</li>
                <li>Dominio de MS Project y herramientas BIM</li>
                <li>Habilidades de comunicación y negociación</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM CON LÓGICA DE REACT */}
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

            <div className="form-card reveal-right">
              <h3>Formulario de Postulación</h3>

              {/* MENSAJES DE ESTADO */}
              {estado === 'success' && (
                <div style={{ background: '#1a3a2a', border: '1px solid #28a745', borderRadius: 8, padding: '16px', marginBottom: 20, color: '#5cb85c' }}>
                  <i className="fas fa-check-circle" style={{ marginRight: 8 }}></i>
                  {mensaje}
                </div>
              )}

              {estado === 'error' && (
                <div style={{ background: '#3a1a1a', border: '1px solid #dc3545', borderRadius: 8, padding: '16px', marginBottom: 20, color: '#e57373' }}>
                  <i className="fas fa-exclamation-circle" style={{ marginRight: 8 }}></i>
                  {mensaje}
                </div>
              )}

              {estado !== 'success' && (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Nombre completo *</label>
                    <input type="text" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre" required />
                  </div>
                  <div className="form-group">
                    <label>Correo electrónico *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="correo@ejemplo.com" required />
                  </div>
                  <div className="form-group">
                    <label>Teléfono</label>
                    <input type="tel" name="telefono" value={form.telefono} onChange={handleChange} placeholder="+51 900 000 000" />
                  </div>
                  <div className="form-group">
                    <label>Cargo al que postula *</label>
                    <select name="vacante_id" value={form.vacante_id} onChange={handleChange}>
                      <option value="">Selecciona una posición</option>
                      {/* Carga dinámica desde la API */}
                      {vacantes.map((v) => (
                        <option key={v.id} value={v.id}>{v.titulo}</option>
                      ))}
                      <option value="">Otro (especificar en mensaje)</option>
                    </select>
                  </div>
                  {!form.vacante_id && (
                    <div className="form-group">
                      <label>Especifica el cargo *</label>
                      <input type="text" name="cargo_postulado" value={form.cargo_postulado} onChange={handleChange} placeholder="Nombre del cargo" required />
                    </div>
                  )}
                  <div className="form-group">
                    <label>Mensaje / Experiencia</label>
                    <textarea name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Cuéntanos brevemente tu experiencia profesional..."></textarea>
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={estado === 'loading'}>
                    {estado === 'loading'
                      ? <><i className="fas fa-spinner fa-spin"></i> Enviando...</>
                      : <><i className="fas fa-paper-plane"></i> Enviar Postulación</>}
                  </button>
                </form>
              )}
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
        <div className="whatsapp-tooltip">¡Escríbenos por WhatsApp!</div>
      </a>
    </div>
  );
};

export default TrabajaConNosotros;
