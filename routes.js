const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('pages/index');
})

router.get('/cardapio', (req, res)=>{
    res.render('pages/cardapio');
})

router.get('/login', (req, res)=>{
    res.render('pages/cadastro/cardapio/login');
})

router.get('/cadastro', (req, res)=>{
    res.render('pages/cadastro/cardapio/cadastro');
})

router.get('/cardapio/hamburguerpicanha', (req, res)=>{
    res.render('pages/cardapio/hamburguer_picanha');
})

router.get('/cardapio/hamburguerfrango', (req, res)=>{
    res.render('pages/cardapio/hamburguer_frango');
})

router.get('/cardapio/hamburguerbovino', (req, res)=>{
    res.render('pages/cardapio/hamburguer_bovino');
})

router.get('/cardapio/acompanhamento', (req, res)=>{
    res.render('pages/cardapio/acompanhamento');
})

router.get('/cardapio/sobremesa', (req, res)=>{
    res.render('pages/cardapio/sobremesa');
})

router.get('/cardapio/bebidas', (req, res)=>{
    res.render('pages/cardapio/bebidas');
})

router.get('/delivery', (req, res)=>{
    res.render('pages/delivery');
})

router.get('/delivery/cadastro', (req, res)=>{
    res.render('pages/cadastro/delivery_cadastro');
})

router.get('/delivery/cardapio', (req, res)=>{
    res.render('pages/delivery/cardapio');
})

router.get('/contatos', (req, res)=>{
    res.render('pages/contatos');
})

router.get('/carrinho', (req, res)=>{
    res.render('pages/carrinho');
})

router.get('/mypedidos', (req, res)=>{
    res.render('pages/result_compra');
})

module.exports = router;