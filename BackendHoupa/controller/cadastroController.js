/*

ROTA de Cadastro, realiza um GET na function INDEX, fazendo um SELECT*FROM CADASTRO

function CREATE realiza o POST dos dados, o ID é gerado pelo Crypto.

*/

const connection = require('../Model/conexao');
const crypto = require('crypto')

module.exports = {

    async index(req, res) {
        const select = await connection('cadastro').select('*')

        res.json(select)
    },


    async create(req, res) {
        const { nome, email, rg, cpf } = req.body;

        const id = crypto.randomBytes(2).toString('HEX'); 

        await connection('cadastro').insert({
            id,
            nome,
            email,
            rg,
            cpf,
        })

        return res.json({ id })
    }
}