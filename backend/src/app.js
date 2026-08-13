require('dotenv').config();
const express      = require('express');
const cors         = require('cors');
const helmet       = require('helmet');
const morgan       = require('morgan');
const rateLimit    = require('express-rate-limit');

const app = express();

// ─── Seguridad y middleware base ───────────────────────────────
app.use(helmet());

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://akn-web.vercel.app'
];
if (process.env.FRONTEND_URL) {
  allowedOrigins.push(process.env.FRONTEND_URL);
}

app.use(cors({
  origin: (origin, callback) => {
    // Permitir peticiones sin origen (como curl o servidores)
    if (!origin) return callback(null, true);
    
    const isAllowed = allowedOrigins.includes(origin) || 
                      origin.endsWith('.vercel.app') || 
                      origin.endsWith('corporacionakn.com');
                      
    if (isAllowed) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  },
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
app.use(['/api/cotizaciones', '/cotizaciones'],   formLimiter, require('./routes/public/cotizaciones.routes'));
app.use(['/api/postulaciones', '/postulaciones'], formLimiter, require('./routes/public/postulaciones.routes'));
app.use(['/api/reclamaciones', '/reclamaciones'], formLimiter, require('./routes/public/reclamaciones.routes'));
app.use(['/api/servicios', '/servicios'],                      require('./routes/public/servicios.routes'));
app.use(['/api/proyectos', '/proyectos'],                      require('./routes/public/proyectos.routes'));
app.use(['/api/noticias', '/noticias'],                        require('./routes/public/noticias.routes'));

// ─── Rutas del panel de administración ──────────────────────────
app.use(['/api/admin/auth', '/admin/auth'],                   require('./routes/admin/auth.routes'));
app.use(['/api/admin/dashboard', '/admin/dashboard'],             require('./routes/admin/dashboard.routes'));
app.use(['/api/admin/cotizaciones', '/admin/cotizaciones'],   require('./routes/admin/cotizaciones.admin.routes'));
app.use(['/api/admin/postulaciones', '/admin/postulaciones'], require('./routes/admin/postulaciones.admin.routes'));
app.use(['/api/admin/reclamaciones', '/admin/reclamaciones'], require('./routes/admin/reclamaciones.admin.routes'));

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

// ─── Iniciar servidor o Exportar para Serverless ──────────────────
module.exports = app;

if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log('\n🚀 ================================');
    console.log(`   API Corporación AKN`);
    console.log(`   http://localhost:${PORT}`);
    console.log(`   Entorno: ${process.env.NODE_ENV}`);
    console.log('🚀 ================================\n');
  });
}

