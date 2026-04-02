const express = require('express');
const router = express.Router();
const pool = require('../../config/db');
const auth = require('../../middleware/auth');

router.use(auth);

// GET /api/admin/cotizaciones?estado=nueva&page=1
router.get('/', async (req, res, next) => {
  try {
    const { estado, page = 1, limit = 20 } = req.query;
    const offset = (parseInt(page) - 1) * parseInt(limit);
    const params = [];
    let where = 'WHERE 1=1';

    if (estado) {
      params.push(estado);
      where += ` AND c.estado = $${params.length}`;
    }

    params.push(parseInt(limit));
    params.push(offset);

    const { rows } = await pool.query(
      `SELECT c.id, c.empresa, c.nombre_contacto, c.email, c.telefono,
              c.servicio_requerido, c.estado, c.prioridad, c.fuente,
              c.atendido_por, c.creado_en
       FROM cotizaciones c
       ${where}
       ORDER BY c.creado_en DESC
       LIMIT $${params.length - 1} OFFSET $${params.length}`,
      params
    );

    const countParams = estado ? [estado] : [];
    const countWhere = estado ? `WHERE estado = $1` : '';
    const count = await pool.query(
      `SELECT COUNT(*) FROM cotizaciones ${countWhere}`,
      countParams
    );

    res.json({
      data: rows,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: parseInt(count.rows[0].count),
      }
    });
  } catch (err) {
    next(err);
  }
});

// GET /api/admin/cotizaciones/:id  — detalle completo
router.get('/:id', async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      `SELECT c.*, 
              json_agg(DISTINCT h.*) FILTER (WHERE h.id IS NOT NULL) AS historial
       FROM cotizaciones c
       LEFT JOIN historial_cotizacion h ON h.cotizacion_id = c.id
       WHERE c.id = $1
       GROUP BY c.id`,
      [req.params.id]
    );
    if (!rows.length) return res.status(404).json({ error: 'Cotización no encontrada' });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// PATCH /api/admin/cotizaciones/:id  — actualizar estado y notas
router.patch('/:id', async (req, res, next) => {
  try {
    const { estado, notas_internas, atendido_por, prioridad } = req.body;
    const id = req.params.id;

    // Obtener estado actual para historial
    const actual = await pool.query(`SELECT estado FROM cotizaciones WHERE id = $1`, [id]);
    if (!actual.rows.length) return res.status(404).json({ error: 'Cotización no encontrada' });

    const estadoAnterior = actual.rows[0].estado;

    // Actualizar
    await pool.query(
      `UPDATE cotizaciones
       SET estado = COALESCE($1, estado),
           notas_internas = COALESCE($2, notas_internas),
           atendido_por = COALESCE($3, atendido_por),
           prioridad = COALESCE($4, prioridad),
           fecha_respuesta = CASE WHEN $1 IN ('cotizada','aceptada','rechazada') THEN NOW() ELSE fecha_respuesta END
       WHERE id = $5`,
      [estado, notas_internas, atendido_por, prioridad, id]
    );

    // Registrar en historial si cambió el estado
    if (estado && estado !== estadoAnterior) {
      await pool.query(
        `INSERT INTO historial_cotizacion (cotizacion_id, estado_anterior, estado_nuevo, usuario)
         VALUES ($1, $2, $3, $4)`,
        [id, estadoAnterior, estado, req.usuario.nombre]
      );
    }

    res.json({ success: true, mensaje: 'Cotización actualizada.' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
