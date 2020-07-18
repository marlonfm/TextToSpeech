const express = require('express'); 
const cors = require('cors');
const routes = require('./routes');

const path = require('path');

const app = express();

app.use(cors());

app.use(express.json());    

app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, 'config', 'uploads')))


app.listen(3002);

/*

Utilizei o Express, na minha opinião, se encaixa muito bem para criação de Apis.

Cors para a Api poder ser utilizado no Frontend.

linha 15: estou fazendo uploads de imagem, então usei o express.static para todos os arquivos vir estáticos, e poder ser mostrados no Browser quando forem acessadas.

*/
