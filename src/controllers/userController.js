// Données de test (plus tard elles viendront d'une base de données)
const users = [
    { id: 1, name: 'Alice' },
];

// Renvoie la liste de tous les utilisateurs
const getAllUsers = (req, res) => {
    res.status(200).json(users);
};

module.exports = { getAllUsers };