//const cepPromise = require('cep-promise');
const express = require('express');
const conn = require('../db');
const app = express();

let cad = app.post('/delivery/cadastro', (req, res) => {

    let nome = req.body.name;
    let email = req.body.email;
    let senha = req.body.password;
    let tel = req.body.tel;

    if(nome && email && senha && tel){

        conn.query(`select * from users where email = '${req.body.email}';`, (err, results) => {
            
            if(results.length > 0){

                res.send("Usuario já cadastrado.");
            
            }else{

                conn.query(`insert into users(nome, email, senha, telefone, cep) values('${req.body.name}', '${req.body.email}', '${req.body.password}', '${req.body.tel}', '${req.body.cep}')`, (err, results) => {

                    res.redirect('/delivery');

                });
            }
        });

    }else{

        console.log("Preencha os campos corretamente!");
    }
    /*
    cepPromise(req.body.cep).then(console.log);
    res.redirect('/delivery');
    */
});

module.exports = cad;