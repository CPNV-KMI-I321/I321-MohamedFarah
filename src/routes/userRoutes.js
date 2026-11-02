const express = require('express');
const { getAllUsers } = require('../controllers/userController');

// Crée un "mini-routeur" dédié aux utilisateurs
const router = express.Router();

// GET /api/users -> renvoie la liste des utilisateurs
router.get('/', getAllUsers);

module.exports = router;