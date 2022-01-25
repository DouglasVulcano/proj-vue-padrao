const express = require('express');
const app = express();
const porta = process.env.PORT || 8080

//
app.use(express.static(__dirname + '/dist/'));

// responder requisições feitas para o servidor por meio da rota GET
app.get('/',  (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(porta, () => {
    console.log('Servidor Web rodando com Express');
});
