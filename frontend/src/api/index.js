import api from './client'

// ─── Formularios públicos ──────────────────────────────────────

export const enviarCotizacion = (data) =>
  api.post('/cotizaciones', data)

export const enviarPostulacion = (data) =>
  api.post('/postulaciones', data)

export const enviarReclamacion = (data) =>
  api.post('/reclamaciones', data)

export const getVacantes = () =>
  api.get('/postulaciones/vacantes')

// ─── Contenido público ────────────────────────────────────────

export const getServicios = () =>
  api.get('/servicios')

export const getServicio = (slug) =>
  api.get(`/servicios/${slug}`)

export const getProyectos = (params = {}) =>
  api.get('/proyectos', { params })

export const getNoticias = (page = 1, limit = 6) =>
  api.get('/noticias', { params: { page, limit } })

export const getNoticia = (slug) =>
  api.get(`/noticias/${slug}`)

// ─── Admin ───────────────────────────────────────────────────

export const loginAdmin = (email, password) =>
  api.post('/admin/auth/login', { email, password })

export const getDashboard = () =>
  api.get('/admin/dashboard')

export const getCotizacionesAdmin = (params = {}) =>
  api.get('/admin/cotizaciones', { params })

export const updateCotizacion = (id, data) =>
  api.patch(`/admin/cotizaciones/${id}`, data)

export const getPostulacionesAdmin = (params = {}) =>
  api.get('/admin/postulaciones', { params })

export const updatePostulacion = (id, data) =>
  api.patch(`/admin/postulaciones/${id}`, data)

export const getReclamacionesAdmin = (params = {}) =>
  api.get('/admin/reclamaciones', { params })

export const updateReclamacion = (id, data) =>
  api.patch(`/admin/reclamaciones/${id}`, data)
