/*

UTILIZEI o MULTER para conseguir trabalhar com Uploads de arquivos, na linha 24, será a rota que será realizado o upload

passei o multer como SINGLE, pois será executado um arquivo por vez.

utilizei o Celebrate e o Joi, para caso nao seja preenchido os campos mandados pro validador, de um erro.

*/

const express = require('express');
const routes = express.Router();

const multer  = require('multer');

const { celebrate, Joi } = require('celebrate');

const multerCfg = require('./config/multer');

const cadastroController = require('./controller/cadastroController');
const dashboardController = require('./controller/dashboardController');        
const loginController = require('./controller/loginController');
const profileController = require('./controller/profileController');


routes.post('/cadastro', 
celebrate({
    body: Joi.object().keys({
        nome: Joi.string().required(),
        email: Joi.string().required().email(),
        rg: Joi.number().required(),
        cpf: Joi.number().required(),
    })
},{
    abortEarly: false
}),
cadastroController.create);


routes.get('/cadastro', cadastroController.index);

routes.post('/dashboard', multer(multerCfg).single('file'), 
celebrate({
    body: Joi.object().keys({
        title: Joi.string().required(),
        valor: Joi.number().required(),
    })
},{
    abortEarly: false
}),
dashboardController.create);


routes.get('/dashboard', dashboardController.index);
routes.delete('/dashboard/:id', dashboardController.delete);

routes.post('/login', loginController.create);

routes.get('/profile', profileController.index);


module.exports = routes;