/*

Rota que fara um select aonde o ID do headers, é igual ao do banco, e mostrar os produtos daquele ID.

*/

const connections = require('../Model/conexao');

module.exports = {
    async index(req,res) {
        const id_cadastro = req.headers.authorization;

        const resp = await connections('dashboard')
        .where('id_cadastro',id_cadastro)
        .select('*');

        const ImageShow2 = resp.map(resps=> {
            return {
                ...resps,
                image_url: `http://localhost:3002/uploads/${resps.image}`,
            };
        })

        return res.json(ImageShow2)
    }
}