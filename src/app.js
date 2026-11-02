const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const userRoutes = require('./routes/userRoutes');

// Crée l'application Express
const app = express();

// Middlewares : s'exécutent sur chaque requête, avant les routes
app.use(cors({ origin: config.corsOrigin }));
app.use(express.json());

// Route d'accueil : GET /
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the API' });
});

// Toutes les routes qui commencent par /api/users
app.use('/api/users', userRoutes);

module.exports = app;