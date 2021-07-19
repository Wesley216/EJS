const express = require('express');
const conn = require('../db');
const app = express();

let show = app.post('/delivery/cardapio', (req, res) => {

    conn.query(`select nome from items;`, (err, results) => {

        if (err) throw err;
        console.log(results);
    });
});

module.exports = show;