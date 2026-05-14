import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
    url: 'http://18.230.6.29', // La URL de tu Ghost
    key: 'c5939b6b7d8241d11fe7f95211',    // La clave que copiaste
    version: "v5.0"
});

export default api;
