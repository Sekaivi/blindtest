const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "toto",
    password: "chef",
    database: "testdb"
});

db.connect(err => {
    if (err) {
        console.error("Erreur de connexion à la database", err);
    } else {
        console.log("Connecté à la database")
    }
})

module.exports = db;