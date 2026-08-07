import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
    url: import.meta.env.VITE_GHOST_API_URL || 'http://56.124.111.201',
    key: import.meta.env.VITE_GHOST_API_KEY || 'c5939b6b7d8241d11fe7f95211',
    version: "v5.0"
});

export default api;

