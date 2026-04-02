const express = require('express');
const router = express.Router();
const pool = require('../../config/db');

// GET /api/servicios
router.get('/', async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      `SELECT id, slug, titulo, icono, descripcion, caracteristicas, orden
       FROM servicios WHERE activo = TRUE ORDER BY orden ASC`
    );
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

// GET /api/servicios/:slug
router.get('/:slug', async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      `SELECT * FROM servicios WHERE slug = $1 AND activo = TRUE`,
      [req.params.slug]
    );
    if (!rows.length) return res.status(404).json({ error: 'Servicio no encontrado' });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
