const express = require('express');
const conn = require('../db');
const app = express();

let cadastro = app.post('/cadastro', (req, res) => {
    
    let nome = req.body.name;
    let email = req.body.email;
    let senha = req.body.password;
    let tel = req.body.tel;

    if(nome && email && senha && tel){
        
        conn.query(`select * from users where email = '${req.body.emai}';`, (err, results) => {

            if(results.length > 0){

                res.send("Usuario já cadastrado.");
                res.redirect('/login');

            }else{

                conn.query(`insert into users(nome, email, senha, telefone, cep) values('${req.body.name}', '${req.body.email}', '${req.body.senha}', '${req.body.tel}', '${req.body.cep}');`, (err, results) => {
                    
                    res.redirect('/login');

                });
            }
        });

    }else{
        
        res.send("Preencha os campos corretamente");
    }
});

module.exports = cadastro;