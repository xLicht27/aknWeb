const express = require('express');
const router = express.Router();
const pool = require('../../config/db');

// GET /api/noticias?page=1&limit=6
router.get('/', async (req, res, next) => {
  try {
    const page  = Math.max(1, parseInt(req.query.page  || '1'));
    const limit = Math.min(20, parseInt(req.query.limit || '6'));
    const offset = (page - 1) * limit;

    const { rows } = await pool.query(
      `SELECT id, slug, titulo, resumen, imagen_url, categoria, autor, fecha_publicacion
       FROM noticias
       WHERE publicado = TRUE
       ORDER BY fecha_publicacion DESC
       LIMIT $1 OFFSET $2`,
      [limit, offset]
    );

    const count = await pool.query(`SELECT COUNT(*) FROM noticias WHERE publicado = TRUE`);
    const total = parseInt(count.rows[0].count);

    res.json({
      data: rows,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) }
    });
  } catch (err) {
    next(err);
  }
});

// GET /api/noticias/:slug
router.get('/:slug', async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      `SELECT * FROM noticias WHERE slug = $1 AND publicado = TRUE`,
      [req.params.slug]
    );
    if (!rows.length) return res.status(404).json({ error: 'Artículo no encontrado' });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
