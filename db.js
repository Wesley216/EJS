const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "hamburgueria"
});

conn.connect((err) => {
    if (err) throw err;
    console.log("Conectado com sucesso.");
});

module.exports = conn;