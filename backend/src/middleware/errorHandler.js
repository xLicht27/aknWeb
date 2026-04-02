module.exports = function errorHandler(err, req, res, next) {
  console.error('❌ Error:', err.message);

  // Error de validación Zod
  if (err.name === 'ZodError') {
    return res.status(400).json({
      error: 'Datos inválidos',
      detalles: err.errors.map(e => ({ campo: e.path.join('.'), mensaje: e.message }))
    });
  }

  // Error de base de datos PostgreSQL
  if (err.code && err.code.startsWith('23')) {
    if (err.code === '23505') {
      return res.status(409).json({ error: 'Ya existe un registro con esos datos.' });
    }
    return res.status(400).json({ error: 'Error de integridad de datos.' });
  }

  // Error genérico
  res.status(err.status || 500).json({
    error: err.message || 'Error interno del servidor.'
  });
};
