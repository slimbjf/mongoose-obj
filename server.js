// Importation des modules nécessaires
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
const contactRoutes = require("./routes/contact");

// Configuration de l'application Express
const app = express();

// Chargement des variables d'environnement
dotenv.config();

// Connexion à la base de données MongoDB
connectDB();

// Middleware pour analyser les requêtes avec du JSON
app.use(express.json());

// Routes
app.use("/api/contacts", contactRoutes);

// Définition du port
const PORT = process.env.PORT || 5000;

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
