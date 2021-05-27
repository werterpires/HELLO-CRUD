const express = require("express");
const app = express()  ;
app.use(express.json());

const port = 30000;

const usuarioWerter = {
    id: 1,
    nome: 'Werter',
    idade: 29
};

let time

const usuarios = [usuarioWerter]

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.listen(port, () => {
console.log(`Server is up and runnig on port ${port}`)
});