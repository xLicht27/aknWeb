const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host:   process.env.MAIL_HOST,
  port:   parseInt(process.env.MAIL_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

/**
 * Envía un email HTML
 * @param {object} opts - { to, subject, html }
 */
async function sendMail({ to, subject, html }) {
  try {
    await transporter.sendMail({
      from: `"Corporación AKN" <${process.env.MAIL_FROM}>`,
      to,
      subject,
      html,
    });
  } catch (err) {
    console.error(`❌ Error enviando email a ${to}:`, err.message);
  }
}

// ─── Templates de emails ──────────────────────────────────────

function tplCotizacionCliente(data) {
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#e8751a;padding:24px;text-align:center;">
        <h1 style="color:#fff;margin:0;font-size:22px;">Corporación AKN</h1>
      </div>
      <div style="padding:32px;background:#f8f9fb;">
        <h2 style="color:#111;">Cotización recibida</h2>
        <p>Estimado/a <strong>${data.nombre_contacto}</strong>,</p>
        <p>Hemos recibido su solicitud de cotización para el servicio de <strong>${data.servicio_requerido}</strong>. 
        Nuestro equipo comercial la revisará y le contactará en un plazo máximo de <strong>24 horas hábiles</strong>.</p>
        <div style="background:#fff;border-left:4px solid #e8751a;padding:16px;margin:24px 0;border-radius:4px;">
          <p style="margin:0;color:#4a5568;font-size:14px;">📧 ventas@corporacionakn.com &nbsp;|&nbsp; 📞 (01) 4513488</p>
        </div>
        <p style="color:#4a5568;font-size:13px;">Corporación AKN S.A. · Lima, Perú</p>
      </div>
    </div>`;
}

function tplCotizacionInterna(data) {
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#111;padding:20px;text-align:center;">
        <h1 style="color:#e8751a;margin:0;font-size:18px;">🔔 NUEVA COTIZACIÓN — AKN</h1>
      </div>
      <div style="padding:24px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px;background:#f4f4f4;font-weight:600;width:40%;">Empresa</td><td style="padding:8px;">${data.empresa || '—'}</td></tr>
          <tr><td style="padding:8px;background:#f4f4f4;font-weight:600;">Contacto</td><td style="padding:8px;">${data.nombre_contacto}</td></tr>
          <tr><td style="padding:8px;background:#f4f4f4;font-weight:600;">Email</td><td style="padding:8px;">${data.email}</td></tr>
          <tr><td style="padding:8px;background:#f4f4f4;font-weight:600;">Teléfono</td><td style="padding:8px;">${data.telefono || '—'}</td></tr>
          <tr><td style="padding:8px;background:#f4f4f4;font-weight:600;">Servicio</td><td style="padding:8px;color:#e8751a;font-weight:700;">${data.servicio_requerido}</td></tr>
          <tr><td style="padding:8px;background:#f4f4f4;font-weight:600;">Descripción</td><td style="padding:8px;">${data.descripcion}</td></tr>
        </table>
      </div>
    </div>`;
}

function tplPostulacionCandidato(data) {
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#e8751a;padding:24px;text-align:center;">
        <h1 style="color:#fff;margin:0;font-size:22px;">Corporación AKN</h1>
      </div>
      <div style="padding:32px;background:#f8f9fb;">
        <h2 style="color:#111;">Postulación recibida ✅</h2>
        <p>Hola <strong>${data.nombre}</strong>,</p>
        <p>Hemos recibido tu postulación para el cargo de <strong>${data.cargo_postulado}</strong>. 
        Nuestro equipo de RRHH revisará tu perfil y te contactará en un plazo de <strong>5 días hábiles</strong> si tu perfil es seleccionado.</p>
        <p style="color:#4a5568;font-size:13px;">Corporación AKN S.A. · Lima, Perú</p>
      </div>
    </div>`;
}

function tplPostulacionRRHH(data) {
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#111;padding:20px;text-align:center;">
        <h1 style="color:#e8751a;margin:0;font-size:18px;">👤 NUEVA POSTULACIÓN — RRHH</h1>
      </div>
      <div style="padding:24px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px;background:#f4f4f4;font-weight:600;width:40%;">Nombre</td><td style="padding:8px;">${data.nombre}</td></tr>
          <tr><td style="padding:8px;background:#f4f4f4;font-weight:600;">Email</td><td style="padding:8px;">${data.email}</td></tr>
          <tr><td style="padding:8px;background:#f4f4f4;font-weight:600;">Teléfono</td><td style="padding:8px;">${data.telefono || '—'}</td></tr>
          <tr><td style="padding:8px;background:#f4f4f4;font-weight:600;">Cargo</td><td style="padding:8px;color:#e8751a;font-weight:700;">${data.cargo_postulado}</td></tr>
          <tr><td style="padding:8px;background:#f4f4f4;font-weight:600;">Mensaje</td><td style="padding:8px;">${data.mensaje || '—'}</td></tr>
        </table>
      </div>
    </div>`;
}

function tplReclamacionConsumidor(data) {
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#e8751a;padding:24px;text-align:center;">
        <h1 style="color:#fff;margin:0;font-size:22px;">Corporación AKN</h1>
      </div>
      <div style="padding:32px;background:#f8f9fb;">
        <h2 style="color:#111;">Su ${data.tipo_solicitud} ha sido registrado</h2>
        <p>Estimado/a <strong>${data.nombres} ${data.apellidos}</strong>,</p>
        <p>Hemos registrado su ${data.tipo_solicitud} en nuestro Libro de Reclamaciones Virtual 
        conforme a la Ley N° 29571. Su código de seguimiento es:</p>
        <div style="background:#111;color:#e8751a;padding:20px;text-align:center;border-radius:8px;margin:24px 0;">
          <span style="font-size:28px;font-weight:900;letter-spacing:4px;">${data.codigo_seguimiento}</span>
        </div>
        <p>Tiene derecho a recibir respuesta en un plazo máximo de <strong>30 días calendario</strong> 
        (antes del <strong>${data.fecha_limite}</strong>).</p>
        <p style="color:#4a5568;font-size:13px;">Corporación AKN S.A. · Lima, Perú</p>
      </div>
    </div>`;
}

function tplReclamacionLegal(data) {
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#c0392b;padding:20px;text-align:center;">
        <h1 style="color:#fff;margin:0;font-size:18px;">⚠️ NUEVA RECLAMACIÓN LEGAL</h1>
      </div>
      <div style="padding:24px;">
        <p><strong>Código:</strong> ${data.codigo_seguimiento}</p>
        <p><strong>Tipo:</strong> ${data.tipo_solicitud.toUpperCase()}</p>
        <p><strong>Consumidor:</strong> ${data.nombres} ${data.apellidos}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Teléfono:</strong> ${data.telefono}</p>
        <p><strong>Fecha límite de respuesta:</strong> <span style="color:#c0392b;font-weight:700;">${data.fecha_limite}</span></p>
        <p><strong>Detalle:</strong> ${data.detalle_reclamacion}</p>
        <p><strong>Pedido:</strong> ${data.pedido_consumidor}</p>
      </div>
    </div>`;
}

module.exports = {
  sendMail,
  tplCotizacionCliente,
  tplCotizacionInterna,
  tplPostulacionCandidato,
  tplPostulacionRRHH,
  tplReclamacionConsumidor,
  tplReclamacionLegal,
};
