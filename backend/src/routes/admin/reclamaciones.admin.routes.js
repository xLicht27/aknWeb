const express = require('express');
const router = express.Router();
const pool = require('../../config/db');
const auth = require('../../middleware/auth');

router.use(auth);

// GET /api/admin/reclamaciones?tipo=reclamo&estado=recibida
router.get('/', async (req, res, next) => {
  try {
    const { estado, tipo_solicitud, page = 1, limit = 20 } = req.query;
    const offset = (parseInt(page) - 1) * parseInt(limit);
    const params = [];
    let where = 'WHERE 1=1';

    if (estado) {
      params.push(estado);
      where += ` AND estado = $${params.length}`;
    }
    if (tipo_solicitud) {
      params.push(tipo_solicitud);
      where += ` AND tipo_solicitud = $${params.length}`;
    }

    params.push(parseInt(limit));
    params.push(offset);

    const { rows } = await pool.query(
      `SELECT id, codigo_seguimiento, nombres || ' ' || apellidos AS consumidor,
              email, tipo_solicitud, estado,
              fecha_limite_respuesta,
              (fecha_limite_respuesta - CURRENT_DATE) AS dias_restantes,
              creado_en
       FROM reclamaciones
       ${where}
       ORDER BY creado_en DESC
       LIMIT $${params.length - 1} OFFSET $${params.length}`,
      params
    );

    res.json({ data: rows });
  } catch (err) {
    next(err);
  }
});

// GET /api/admin/reclamaciones/:id
router.get('/:id', async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      `SELECT * FROM reclamaciones WHERE id = $1`,
      [req.params.id]
    );
    if (!rows.length) return res.status(404).json({ error: 'Reclamación no encontrada' });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// PATCH /api/admin/reclamaciones/:id  — responder y cambiar estado
router.patch('/:id', async (req, res, next) => {
  try {
    const { estado, respuesta_empresa, atendido_por } = req.body;
    const id = req.params.id;

    await pool.query(
      `UPDATE reclamaciones
       SET estado = COALESCE($1, estado),
           respuesta_empresa = COALESCE($2, respuesta_empresa),
           atendido_por = COALESCE($3, atendido_por),
           fecha_respuesta = CASE WHEN $1 = 'respondida' THEN CURRENT_DATE ELSE fecha_respuesta END
       WHERE id = $4`,
      [estado, respuesta_empresa, atendido_por, id]
    );

    res.json({ success: true, mensaje: 'Reclamación actualizada.' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
