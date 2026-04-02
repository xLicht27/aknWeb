const express = require('express');
const router = express.Router();
const pool = require('../../config/db');
const { sendMail, tplPostulacionCandidato, tplPostulacionRRHH } = require('../../config/mailer');
const { z } = require('zod');

const postulacionSchema = z.object({
  nombre:          z.string().min(2, 'El nombre es requerido'),
  email:           z.string().email('Email inválido'),
  telefono:        z.string().optional(),
  cargo_postulado: z.string().min(2, 'El cargo es requerido'),
  vacante_id:      z.number().int().positive().optional().nullable(),
  mensaje:         z.string().optional(),
});

// POST /api/postulaciones
router.post('/', async (req, res, next) => {
  try {
    const data = postulacionSchema.parse({
      ...req.body,
      vacante_id: req.body.vacante_id ? parseInt(req.body.vacante_id) : null,
    });

    const result = await pool.query(
      `INSERT INTO postulaciones 
        (nombre, email, telefono, cargo_postulado, vacante_id, mensaje, fuente)
       VALUES ($1, $2, $3, $4, $5, $6, 'web')
       RETURNING id, creado_en`,
      [data.nombre, data.email, data.telefono, data.cargo_postulado, data.vacante_id, data.mensaje]
    );

    // Emails automáticos
    sendMail({
      to: data.email,
      subject: 'Corporación AKN — Tu postulación fue recibida',
      html: tplPostulacionCandidato(data),
    });

    sendMail({
      to: process.env.MAIL_RRHH,
      subject: `👤 Nueva postulación: ${data.cargo_postulado} — ${data.nombre}`,
      html: tplPostulacionRRHH(data),
    });

    res.status(201).json({
      success: true,
      id: result.rows[0].id,
      mensaje: 'Tu postulación fue recibida. Revisaremos tu perfil en los próximos 5 días hábiles.',
    });

  } catch (err) {
    next(err);
  }
});

// GET /api/postulaciones/vacantes  — lista las vacantes activas para el formulario
router.get('/vacantes', async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      `SELECT id, titulo, area, modalidad FROM vacantes WHERE activa = TRUE ORDER BY creado_en DESC`
    );
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
