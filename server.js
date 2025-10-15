const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connexion à MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // change selon ta config
  database: "insecure_demo"
});

db.connect(err => {
  if (err) throw err;
  console.log("Connecté à la base MySQL");
});

// Route de login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // ❌ Mauvaise pratique volontaire : enregistrer mot de passe en clair
  const sql = "INSERT INTO users (email, password) VALUES (?, ?)";
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error("Erreur MySQL :", err);
      return res.status(500).send("Erreur serveur");
    }
    console.log("Utilisateur inséré :", result.insertId);
    res.status(200).send("OK");
  });
});

app.listen(3000, () => {
  console.log("Serveur en cours sur http://localhost:3000");
});
