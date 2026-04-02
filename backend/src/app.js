require('dotenv').config();
const express      = require('express');
const cors         = require('cors');
const helmet       = require('helmet');
const morgan       = require('morgan');
const rateLimit    = require('express-rate-limit');

const app = express();

// ─── Seguridad y middleware base ───────────────────────────────
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json({ limit: '2mb' }));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// ─── Rate limiting (anti-spam en formularios) ──────────────────
const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 10,                   // máximo 10 envíos por IP cada 15 min
  message: { error: 'Demasiadas solicitudes. Por favor espera unos minutos.' },
});

// ─── Rutas públicas ──────────────────────────────────────────────
app.use('/api/cotizaciones',  formLimiter, require('./routes/public/cotizaciones.routes'));
app.use('/api/postulaciones', formLimiter, require('./routes/public/postulaciones.routes'));
app.use('/api/reclamaciones', formLimiter, require('./routes/public/reclamaciones.routes'));
app.use('/api/servicios',                 require('./routes/public/servicios.routes'));
app.use('/api/proyectos',                 require('./routes/public/proyectos.routes'));
app.use('/api/noticias',                  require('./routes/public/noticias.routes'));

// ─── Rutas del panel de administración ──────────────────────────
app.use('/api/admin/auth',          require('./routes/admin/auth.routes'));
app.use('/api/admin/dashboard',     require('./routes/admin/dashboard.routes'));
app.use('/api/admin/cotizaciones',  require('./routes/admin/cotizaciones.admin.routes'));
app.use('/api/admin/postulaciones', require('./routes/admin/postulaciones.admin.routes'));
app.use('/api/admin/reclamaciones', require('./routes/admin/reclamaciones.admin.routes'));

// ─── Health check ─────────────────────────────────────────────────
app.get('/health', (req, res) => {
  res.json({ status: 'ok', env: process.env.NODE_ENV, timestamp: new Date() });
});

// ─── 404 ──────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: `Ruta no encontrada: ${req.method} ${req.originalUrl}` });
});

// ─── Manejador global de errores ─────────────────────────────────
app.use(require('./middleware/errorHandler'));

// ─── Iniciar servidor ─────────────────────────────────────────────
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log('\n🚀 ================================');
  console.log(`   API Corporación AKN`);
  console.log(`   http://localhost:${PORT}`);
  console.log(`   Entorno: ${process.env.NODE_ENV}`);
  console.log('🚀 ================================\n');
});
