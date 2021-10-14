const express = require('express');

const server = express();

server.use(express.json());

const nomes = ['Victor', 'Aline', 'Vicente'];

// Retorna um nome
server.get('/nomes/:index', (req, res) => {
    const { index } = req.params;

    return res.json(nomes[index]);
});

// Retorna todos os nomes
server.get('/nomes', (req, res) => {
    return res.json(nomes);
});

// Cria um novo nome
server.post('/nomes', (req, res) => {
    const { name } = req.body;
    nomes.push(name);

    return res.json(nomes);
});

// Atualiza um nome
server.put('/nomes/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    nomes[index] = name;

    return res.json(nomes);
});

// Deleta um nome
server.delete('/nomes/:index', (req, res) => {
    const { index } = req.params;

    nomes.splice(index, 1);
    return res.json({ message: "O nome foi deletado"});
});




server.listen(3000);