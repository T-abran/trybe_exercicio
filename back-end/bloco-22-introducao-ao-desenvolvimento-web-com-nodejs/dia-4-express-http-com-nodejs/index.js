// Crie uma rota GET /ping
// Sua rota deve retornar o seguinte JSON: { message: 'pong' }

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());


app.get('/ping', (_req, res) => 
res.json({ "message": "pong" }));

app.post('/hello', (_req, res) =>{
  const { name } = _req.body;
  return res.status(200).json({"message": `Hello, ${name}!`})
})

app.post('/greetings', (_req, res) => {
  const {name, age } = _req.body;
  if(parseInt(age, 10) <= 17){
    return res.status(401).json({message:`Unauthorized`});
  }
  return res.status(200).json( { message:`Hello ${name}`})
})

app.listen(3000, () => console.log('ouvindo na porta 3000!'));