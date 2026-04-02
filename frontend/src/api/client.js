import axios from 'axios'

// En desarrollo usa el proxy de Vite, en producción usa la URL real del backend
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
})

// Interceptor: agrega el token JWT en cada petición si existe
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('akn_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

// Interceptor de respuesta: si el token expiró, desloguea automáticamente
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 403) {
      localStorage.removeItem('akn_token')
      window.location.href = '/admin/login'
    }
    return Promise.reject(error)
  }
)

export default api
