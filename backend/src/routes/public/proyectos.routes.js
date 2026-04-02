const express = require('express');
const router = express.Router();
const pool = require('../../config/db');

// GET /api/proyectos?destacado=true&categoria=Instalación
router.get('/', async (req, res, next) => {
  try {
    const { destacado, categoria } = req.query;
    let query = `SELECT id, titulo, cliente_nombre, categoria, descripcion, imagen_url, anio_ejecucion, destacado
                 FROM proyectos WHERE activo = TRUE`;
    const params = [];

    if (destacado === 'true') {
      params.push(true);
      query += ` AND destacado = $${params.length}`;
    }

    if (categoria) {
      params.push(categoria);
      query += ` AND categoria ILIKE $${params.length}`;
    }

    query += ` ORDER BY orden ASC, anio_ejecucion DESC`;

    const { rows } = await pool.query(query, params);
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
