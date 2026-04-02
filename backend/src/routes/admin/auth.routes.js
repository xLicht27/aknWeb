const express = require('express');
const router = express.Router();
const pool = require('../../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// POST /api/admin/auth/login
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email y contraseña son requeridos.' });
    }

    // Buscar usuario
    const { rows } = await pool.query(
      `SELECT id, nombre, email, password_hash, rol FROM admin_usuarios WHERE email = $1 AND activo = TRUE`,
      [email]
    );

    if (!rows.length) {
      return res.status(401).json({ error: 'Credenciales incorrectas.' });
    }

    const usuario = rows[0];

    // Verificar contraseña
    const passwordOk = await bcrypt.compare(password, usuario.password_hash);
    if (!passwordOk) {
      return res.status(401).json({ error: 'Credenciales incorrectas.' });
    }

    // Actualizar último acceso
    await pool.query(
      `UPDATE admin_usuarios SET ultimo_acceso = NOW() WHERE id = $1`,
      [usuario.id]
    );

    // Generar JWT
    const token = jwt.sign(
      { id: usuario.id, email: usuario.email, nombre: usuario.nombre, rol: usuario.rol },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '8h' }
    );

    res.json({
      token,
      usuario: { id: usuario.id, nombre: usuario.nombre, email: usuario.email, rol: usuario.rol }
    });

  } catch (err) {
    next(err);
  }
});

// GET /api/admin/auth/me  — verifica el token activo
const auth = require('../../middleware/auth');
router.get('/me', auth, async (req, res) => {
  res.json({ usuario: req.usuario });
});

module.exports = router;
