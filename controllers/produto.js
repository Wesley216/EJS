const express = require('express');
const conn = require('../db');
const app = express();

let produto = app.post('/delivery/cardapio', (req, res) => {

   conn.query(`insert into items(nome, id_users) values('${req.body.product}', '${req.session.id}');`, (err, results) => {

       if(err) throw err;
       console.log("Comprado com sucesso.");
   });

   res.redirect('/mypedidos');
});

module.exports = produto;