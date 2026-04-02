const express = require('express');
const router = express.Router();
const pool = require('../../config/db');
const { sendMail, tplReclamacionConsumidor, tplReclamacionLegal } = require('../../config/mailer');
const { z } = require('zod');

const reclamacionSchema = z.object({
  nombres:              z.string().min(2),
  apellidos:            z.string().min(2),
  tipo_documento:       z.enum(['dni', 'ce', 'pasaporte', 'ruc']),
  numero_documento:     z.string().min(7),
  domicilio:            z.string().min(5),
  telefono:             z.string().min(6),
  email:                z.string().email(),
  es_menor_edad:        z.boolean().default(false),
  representante_legal:  z.string().optional().nullable(),
  tipo_bien:            z.enum(['producto', 'servicio']),
  descripcion_bien:     z.string().min(10),
  monto_reclamado:      z.number().positive().optional().nullable(),
  tipo_solicitud:       z.enum(['reclamo', 'queja']),
  fecha_incidente:      z.string().min(8),
  detalle_reclamacion:  z.string().min(20),
  pedido_consumidor:    z.string().min(10),
  acepto_condiciones:   z.literal(true, { errorMap: () => ({ message: 'Debe aceptar las condiciones' }) }),
});

// POST /api/reclamaciones
router.post('/', async (req, res, next) => {
  try {
    const data = reclamacionSchema.parse({
      ...req.body,
      es_menor_edad:   req.body.es_menor_edad === true || req.body.es_menor_edad === 'true',
      monto_reclamado: req.body.monto_reclamado ? parseFloat(req.body.monto_reclamado) : null,
      acepto_condiciones: req.body.acepto_condiciones === true || req.body.acepto_condiciones === 'true',
    });

    // El trigger de PostgreSQL genera el código y la fecha límite automáticamente
    const result = await pool.query(
      `INSERT INTO reclamaciones (
        nombres, apellidos, tipo_documento, numero_documento,
        domicilio, telefono, email, es_menor_edad, representante_legal,
        tipo_bien, descripcion_bien, monto_reclamado,
        tipo_solicitud, fecha_incidente, detalle_reclamacion,
        pedido_consumidor, acepto_condiciones
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)
      RETURNING id, codigo_seguimiento, fecha_limite_respuesta`,
      [
        data.nombres, data.apellidos, data.tipo_documento, data.numero_documento,
        data.domicilio, data.telefono, data.email, data.es_menor_edad, data.representante_legal,
        data.tipo_bien, data.descripcion_bien, data.monto_reclamado,
        data.tipo_solicitud, data.fecha_incidente, data.detalle_reclamacion,
        data.pedido_consumidor, data.acepto_condiciones,
      ]
    );

    const { codigo_seguimiento, fecha_limite_respuesta } = result.rows[0];
    const fecha_limite = new Date(fecha_limite_respuesta).toLocaleDateString('es-PE', {
      day: '2-digit', month: 'long', year: 'numeric'
    });

    // Emails automáticos
    sendMail({
      to: data.email,
      subject: `Corporación AKN — Código de reclamación ${codigo_seguimiento}`,
      html: tplReclamacionConsumidor({ ...data, codigo_seguimiento, fecha_limite }),
    });

    sendMail({
      to: process.env.MAIL_LEGAL,
      subject: `⚠️ ${data.tipo_solicitud.toUpperCase()} LEGAL: ${codigo_seguimiento}`,
      html: tplReclamacionLegal({ ...data, codigo_seguimiento, fecha_limite }),
    });

    res.status(201).json({
      success: true,
      codigo_seguimiento,
      fecha_limite_respuesta,
      mensaje: `Su ${data.tipo_solicitud} fue registrado con el código ${codigo_seguimiento}. Recibirá respuesta antes del ${fecha_limite}.`,
    });

  } catch (err) {
    next(err);
  }
});

module.exports = router;
