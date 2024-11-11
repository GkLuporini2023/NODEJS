// cabeçalho do código sempre deve ter o import das bibliotecas//
const express = require('express');
const routers = require('./routers')

//Variável para criar o servidor express//
app = express();

//Utilização dos objetos JSON///
app.use(express.json())

//Utilização das rotas//
app.use(routers);

app.listen(8081, function(){
    console.log("O servidor está executando na url:http://localhost:8081")
})

//CRUD//
//C - CREATE - POST - ENVIAR
//R - READ - GET - SALVAR
//U - UPDATE - PUT - ATUALIZAR
//D - DELETE - DELETE - DELETAR

