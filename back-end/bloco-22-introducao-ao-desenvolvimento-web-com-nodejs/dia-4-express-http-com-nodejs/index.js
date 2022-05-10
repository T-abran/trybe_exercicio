// Crie uma rota GET /ping
// Sua rota deve retornar o seguinte JSON: { message: 'pong' }

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());


app.get('/ping', (_req, res) => res.json({ "message": "pong" }));

app.listen(3000, () => console.log('ouvindo na porta 3000!'));