/*

linha 11: GET que faz um SELECT*FROM DASHBOARD INNER JOIN CADASTRO 
ON CADASTRO.ID = DASHBOARD.ID_CADASTRO

também e passado no array a URL da imagem.

linha32: realiza POST dos dados, utilizando o Header Authorization, que seria o ID do Usuário quando se cadastrou.
*/

const connections = require('../Model/conexao');

module.exports = {

    async index(req, res) {
        const resposta = await connections('dashboard')
        .join('cadastro','cadastro.id','=','dashboard.id_cadastro')
        .select(['dashboard.*', 'cadastro.nome', 'cadastro.email', 'cadastro.rg','cadastro.cpf']);


        const ImageShow = resposta.map(point=> {
            return {
                ...point,
                image_url: `http://localhost:3002/uploads/${point.image}`,
            };
        })

        

        return res.json(ImageShow);
    },

    async create(req, res) {
        const { title, valor } = req.body;

        const { filename: image } = req.file;

        const id_cadastro = req.headers.authorization;
        
        const [id] = await connections('dashboard').insert({
            title,
            valor,
            image,
            id_cadastro,
        })

        console.log(req.file);

        return res.json({ id });


    },

    async delete(req,res) {
        const { id } = req.params;

        const id_cadastro = req.headers.authorization;

        const bd = await connections('dashboard')
        .select('id_cadastro')
        .where('id', id)
        .first()

        if(bd.id_cadastro != id_cadastro) {
            return res.status(401).json({error: 'erro'})
        }

        await connections('dashboard')
        .where('id',id).delete()

        return res.status(204).json({success: 'usuario excluido'});

    }
};