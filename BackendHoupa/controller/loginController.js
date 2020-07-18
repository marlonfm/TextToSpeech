/*
Faz a query aonde o ID que esta no body é o mesmo que está no Banco, se não for, retorna o BAD REQUEST, caso contrario,, retorna o json com o ID.

*/

const connections = require('../Model/conexao');

module.exports = {
    async create(req, res) {
        const {id} = req.body;

        const resposta = await connections('cadastro')
        .where('id',id)
        .select('nome')
        .first()

        if(!resposta) {
            return res.status(400).json({error: 'ID inexistente'});
        }

        return res.json(resposta);


    }
}