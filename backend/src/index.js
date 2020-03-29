const express = require('express');
const cors    = require('cors');
const routes  = require('./routes'); // ./ quer dizer q tá no mesmo diretório

const app = express();

app.use(cors()); // qual endereço pode acessar essa aplicação
app.use(express.json());
app.use(routes);

app.listen(3333); 