// Charge les variables du fichier .env dans process.env
require('dotenv').config();

// Regroupe toute la configuration de l'API au même endroit
const config = {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development',
    corsOrigin: process.env.CORS_ORIGIN || '*',
};

// Rend cet objet utilisable dans les autres fichiers
module.exports = config;