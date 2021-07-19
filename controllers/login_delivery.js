const express = require('express');
const session = require('express-session');
const conn = require('../db');
const app = express();

app.use(session({
    secret: 'name',
    resave: false,
    saveUninitialized: true
}));

let login = app.post('/delivery', (req, res) => {
    //console.log(req.body);
    let email = req.body.email;
    let password = req.body.password;

    if (email && password) {
        
        conn.query(`select * from users where email = '${email}' and senha = '${password}';`, (err, results) => {
    
          if (results.length > 0) {
            
            req.session.email = email;

            res.redirect('/delivery/cardapio');

          }else{

              console.log("Email ou senha inválidos!");
          }

        });
    
    }else{

        console.log("Preencha os campos corretamente!");
    }
});

module.exports = login;

/*app.post('/delivery', (req, res) => {
    console.log(req.body);
})*/