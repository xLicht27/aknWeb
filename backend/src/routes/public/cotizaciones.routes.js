const express = require('express');
const router = express.Router();
const pool = require('../../config/db');
const { sendMail, tplCotizacionCliente, tplCotizacionInterna } = require('../../config/mailer');
const { z } = require('zod');

// Schema de validación
const cotizacionSchema = z.object({
  empresa:           z.string().optional(),
  nombre_contacto:   z.string().min(2, 'El nombre es requerido'),
  email:             z.string().email('Email inválido'),
  telefono:          z.string().optional(),
  servicio_requerido: z.string().min(2, 'El servicio es requerido'),
  descripcion:       z.string().min(10, 'La descripción debe tener al menos 10 caracteres'),
});

// POST /api/cotizaciones
router.post('/', async (req, res, next) => {
  try {
    // 1. Validar datos
    const data = cotizacionSchema.parse(req.body);

    // 2. Guardar en la base de datos
    const result = await pool.query(
      `INSERT INTO cotizaciones 
        (empresa, nombre_contacto, email, telefono, servicio_requerido, descripcion, fuente)
       VALUES ($1, $2, $3, $4, $5, $6, 'web')
       RETURNING id, creado_en`,
      [data.empresa, data.nombre_contacto, data.email, data.telefono, data.servicio_requerido, data.descripcion]
    );

    const cotizacion = result.rows[0];

    // 3. Enviar emails (sin bloquear la respuesta)
    sendMail({
      to: data.email,
      subject: 'Corporación AKN — Cotización recibida',
      html: tplCotizacionCliente(data),
    });

    sendMail({
      to: process.env.MAIL_COMERCIAL,
      subject: `🔔 Nueva cotización: ${data.servicio_requerido} — ${data.empresa || data.nombre_contacto}`,
      html: tplCotizacionInterna(data),
    });

    // 4. Responder al frontend
    res.status(201).json({
      success: true,
      id: cotizacion.id,
      mensaje: 'Su solicitud fue recibida. Le contactaremos en menos de 24 horas hábiles.',
    });

  } catch (err) {
    next(err);
  }
});

module.exports = router;
