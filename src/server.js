const app = require('./app');
const config = require('./config/config');

// Démarre le serveur et écoute sur le port défini dans le .env
app.listen(config.port, () => {
    console.log(`API démarrée sur http://localhost:${config.port} (${config.env})`);
});