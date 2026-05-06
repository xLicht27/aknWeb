import { useState } from 'react'
import { enviarReclamacion } from '../api'
import { Link } from 'react-router-dom'
import '../css/global.css'
import '../css/responsive.css'
import '../css/reclamaciones.css'


export default function Reclamaciones() {
  const [form, setForm] = useState({
    nombres: '', apellidos: '', tipo_documento: '', numero_documento: '',
    domicilio: '', telefono: '', email: '', es_menor_edad: false,
    representante_legal: '', tipo_bien: '', descripcion_bien: '',
    monto_reclamado: '', tipo_solicitud: '', fecha_incidente: '',
    detalle_reclamacion: '', pedido_consumidor: '', acepto_condiciones: false,
  })
  const [estado, setEstado] = useState('idle')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.acepto_condiciones) {
      setError('Debe aceptar las condiciones para continuar.')
      return
    }
    setEstado('loading')
    setError('')
    try {
      const payload = {
        ...form,
        monto_reclamado: form.monto_reclamado ? parseFloat(form.monto_reclamado) : null,
        acepto_condiciones: true,
      }
      const res = await enviarReclamacion(payload)
      setResultado(res.data)
      setEstado('success')
    } catch (err) {
      setError(err.response?.data?.error || 'Error al enviar. Intente de nuevo.')
      setEstado('error')
    }
  }

  if (estado === 'success' && resultado) {
    return (
      <section className="reclamaciones-form-section section-padding">
        <div className="container">
          <div className="reclamaciones-form" style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center', padding: 40 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
            <h2 style={{ color: 'var(--primary)', marginBottom: 12 }}>Reclamación Registrada</h2>
            <p style={{ color: 'var(--text-white)', marginBottom: 24 }}>
              Su {resultado.codigo_seguimiento.includes('-') ? form.tipo_solicitud : 'solicitud'} fue registrada exitosamente.
            </p>
            <div style={{ background: '#111', color: 'var(--primary)', padding: '24px', borderRadius: 12, marginBottom: 24 }}>
              <div style={{ fontSize: 13, color: '#999', marginBottom: 8 }}>CÓDIGO DE SEGUIMIENTO</div>
              <div style={{ fontSize: 32, fontWeight: 900, letterSpacing: 4 }}>{resultado.codigo_seguimiento}</div>
            </div>
            <p style={{ color: 'var(--text-white)', fontSize: 14 }}>{resultado.mensaje}</p>
            <p style={{ color: '#999', fontSize: 13, marginTop: 8 }}>
              Recibirá una copia en su correo electrónico.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (


    <section className="reclamaciones-form-section section-padding">
      <div className="container">

        <div className="section-header reveal">
          <div className="section-label">Formulario</div>
          <h2 className="section-title section-title-light">Hoja de Reclamación</h2>
          <p className="section-subtitle section-subtitle-light">Complete todos los campos obligatorios (*) para registrar su reclamo o queja.</p>
        </div>



        <div className="reclamaciones-form reveal">
          <form onSubmit={handleSubmit}>

            {/* SECCIÓN 1 */}
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1 }}>
              <i className="fas fa-user"></i> 1. Identificación del Consumidor
            </h3>

            <div className="form-row">
              <div className="form-group"><label>Nombres *</label>
                <input type="text" name="nombres" value={form.nombres} onChange={handleChange} placeholder="Sus nombres" required /></div>
              <div className="form-group"><label>Apellidos *</label>
                <input type="text" name="apellidos" value={form.apellidos} onChange={handleChange} placeholder="Sus apellidos" required /></div>
            </div>

            <div className="form-row">
              <div className="form-group"><label>Tipo de Documento *</label>
                <select name="tipo_documento" value={form.tipo_documento} onChange={handleChange} required>
                  <option value="">Seleccione</option>
                  <option value="dni">DNI</option>
                  <option value="ce">Carné de Extranjería</option>
                  <option value="pasaporte">Pasaporte</option>
                  <option value="ruc">RUC</option>
                </select></div>
              <div className="form-group"><label>N° de Documento *</label>
                <input type="text" name="numero_documento" value={form.numero_documento} onChange={handleChange} placeholder="N° de documento" required /></div>
            </div>

            <div className="form-group"><label>Domicilio *</label>
              <input type="text" name="domicilio" value={form.domicilio} onChange={handleChange} placeholder="Dirección completa" required /></div>

            <div className="form-row">
              <div className="form-group"><label>Teléfono *</label>
                <input type="tel" name="telefono" value={form.telefono} onChange={handleChange} placeholder="+51 900 000 000" required /></div>
              <div className="form-group"><label>Correo Electrónico *</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="correo@ejemplo.com" required /></div>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.1)', margin: '32px 0' }} />

            {/* SECCIÓN 2 */}
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1 }}>
              <i className="fas fa-box"></i> 2. Identificación del Bien Contratado
            </h3>

            <div className="form-row">
              <div className="form-group"><label>Tipo *</label>
                <select name="tipo_bien" value={form.tipo_bien} onChange={handleChange} required>
                  <option value="">Seleccione</option>
                  <option value="producto">Producto</option>
                  <option value="servicio">Servicio</option>
                </select></div>
              <div className="form-group"><label>Monto Reclamado (S/.)</label>
                <input type="number" name="monto_reclamado" value={form.monto_reclamado} onChange={handleChange} placeholder="Ej: 5000.00" min="0" /></div>
            </div>

            <div className="form-group"><label>Descripción del producto o servicio contratado *</label>
              <textarea name="descripcion_bien" value={form.descripcion_bien} onChange={handleChange}
                placeholder="Describa el producto o servicio que adquirió..." required /></div>

            <hr style={{ border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.1)', margin: '32px 0' }} />

            {/* SECCIÓN 3 */}
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1 }}>
              <i className="fas fa-exclamation-triangle"></i> 3. Detalle de la Reclamación
            </h3>

            <div className="form-row">
              <div className="form-group"><label>Tipo de solicitud *</label>
                <select name="tipo_solicitud" value={form.tipo_solicitud} onChange={handleChange} required>
                  <option value="">Seleccione</option>
                  <option value="reclamo">Reclamo (disconformidad con el producto/servicio)</option>
                  <option value="queja">Queja (disconformidad con la atención)</option>
                </select></div>
              <div className="form-group"><label>Fecha del incidente *</label>
                <input type="date" name="fecha_incidente" value={form.fecha_incidente} onChange={handleChange} required /></div>
            </div>

            <div className="form-group"><label>Detalle de la reclamación *</label>
              <textarea name="detalle_reclamacion" value={form.detalle_reclamacion} onChange={handleChange}
                style={{ minHeight: 140, background: 'rgba(255, 255, 255, 0.05)', color: '#fff' }} required
                placeholder="Describa los hechos que motivan su reclamo o queja..." /></div>

            <div className="form-group"><label>Pedido del consumidor *</label>
              <textarea name="pedido_consumidor" value={form.pedido_consumidor} onChange={handleChange} required
                placeholder="¿Qué solución espera de Corporación AKN?" /></div>

            <hr style={{ border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.1)', margin: '32px 0' }} />

            {error && (
              <div style={{ background: '#f8d7da', border: '1px solid #dc3545', borderRadius: 8, padding: '12px 16px', marginBottom: 16, color: '#721c24' }}>
                <i className="fas fa-exclamation-circle" style={{ marginRight: 8 }}></i>{error}
              </div>
            )}

            <div className="form-group">
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer' }}>
                <input type="checkbox" name="acepto_condiciones" checked={form.acepto_condiciones}
                  onChange={handleChange} style={{ marginTop: 4, width: 18, height: 18, accentColor: 'var(--primary)', cursor: 'pointer' }} />
                <span style={{ color: 'var(--text-white)' }}>Declaro que la información proporcionada es veraz y acepto que Corporación AKN S.A.
                  procese mis datos personales conforme a la Ley N° 29733. *</span>
              </label>
            </div>

            <button type="submit" className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: 16 }}
              disabled={estado === 'loading'}>
              {estado === 'loading'
                ? <><i className="fas fa-spinner fa-spin"></i> Enviando...</>
                : <><i className="fas fa-paper-plane"></i> Enviar Reclamación</>}
            </button>

          </form>
        </div>
      </div>

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
    </section>
  )
}
