

const express = require('express');
const routes = express.Router();





const cadastroController = require('./controller/cadastroController');



routes.post('/cadastro', cadastroController.create);
routes.get('/cadastro', cadastroController.index);



module.exports = routes;