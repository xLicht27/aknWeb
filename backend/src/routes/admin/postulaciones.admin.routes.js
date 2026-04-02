const express = require('express');
const router = express.Router();
const pool = require('../../config/db');
const auth = require('../../middleware/auth');

router.use(auth);

// GET /api/admin/postulaciones?estado=recibida
router.get('/', async (req, res, next) => {
  try {
    const { estado, page = 1, limit = 20 } = req.query;
    const offset = (parseInt(page) - 1) * parseInt(limit);
    const params = [];
    let where = 'WHERE 1=1';

    if (estado) {
      params.push(estado);
      where += ` AND estado = $${params.length}`;
    }

    params.push(parseInt(limit));
    params.push(offset);

    const { rows } = await pool.query(
      `SELECT id, nombre, email, telefono, cargo_postulado, estado,
              puntuacion, evaluado_por, creado_en
       FROM postulaciones
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

// GET /api/admin/postulaciones/:id
router.get('/:id', async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      `SELECT p.*,
              json_agg(DISTINCT h.*) FILTER (WHERE h.id IS NOT NULL) AS historial
       FROM postulaciones p
       LEFT JOIN historial_postulacion h ON h.postulacion_id = p.id
       WHERE p.id = $1
       GROUP BY p.id`,
      [req.params.id]
    );
    if (!rows.length) return res.status(404).json({ error: 'Postulación no encontrada' });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// PATCH /api/admin/postulaciones/:id
router.patch('/:id', async (req, res, next) => {
  try {
    const { estado, notas_rrhh, evaluado_por, puntuacion } = req.body;
    const id = req.params.id;

    const actual = await pool.query(`SELECT estado FROM postulaciones WHERE id = $1`, [id]);
    if (!actual.rows.length) return res.status(404).json({ error: 'No encontrada' });

    const estadoAnterior = actual.rows[0].estado;

    await pool.query(
      `UPDATE postulaciones
       SET estado = COALESCE($1, estado),
           notas_rrhh = COALESCE($2, notas_rrhh),
           evaluado_por = COALESCE($3, evaluado_por),
           puntuacion = COALESCE($4, puntuacion)
       WHERE id = $5`,
      [estado, notas_rrhh, evaluado_por, puntuacion, id]
    );

    if (estado && estado !== estadoAnterior) {
      await pool.query(
        `INSERT INTO historial_postulacion (postulacion_id, estado_anterior, estado_nuevo, usuario)
         VALUES ($1, $2, $3, $4)`,
        [id, estadoAnterior, estado, req.usuario.nombre]
      );
    }

    res.json({ success: true, mensaje: 'Postulación actualizada.' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
