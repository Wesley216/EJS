const express = require('express');
const path = require('path');
const routes = require('./routes');
const login_delivery = require('./controllers/login_delivery');
const login = require('./controllers/login');
const cadastro_delivery = require('./controllers/cadastro_delivery');
const cadastro = require('./controllers/cadastro');
const produto = require('./controllers/produto');
const show = require('./controllers/result');

const app = express();
const port = 8080;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.use(login_delivery, login, cadastro_delivery, cadastro, produto, show);

app.listen(
    port,() => 
        console.log(`Iniciando o servidor em: http://localhost:${port}`)
)