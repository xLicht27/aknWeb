const express = require('express');
const router = express.Router();
const pool = require('../../config/db');
const auth = require('../../middleware/auth');

// Todas las rutas requieren autenticación
router.use(auth);

// GET /api/admin/dashboard
router.get('/', async (req, res, next) => {
  try {
    const { rows } = await pool.query(`SELECT * FROM v_dashboard_resumen`);
    const { rows: urgentes } = await pool.query(
      `SELECT codigo_seguimiento, consumidor, tipo_solicitud, dias_restantes
       FROM v_reclamaciones_por_vencer
       WHERE dias_restantes <= 7
       ORDER BY dias_restantes ASC
       LIMIT 5`
    );
    res.json({ resumen: rows[0], alertas_reclamaciones: urgentes });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
