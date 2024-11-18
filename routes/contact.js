const express = require("express");
const router = express.Router();

// Exemple de route GET
router.get("/", (req, res) => {
  res.send("Contact API - All Contacts");
});

// Exemple de route POST
router.post("/", (req, res) => {
  const { name, email } = req.body;
  res.send(`Contact ajouté : ${name}, ${email}`);
});

module.exports = router;
