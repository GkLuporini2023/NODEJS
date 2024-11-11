//Bibliotecas a serem utilizadas//
const express = require('express');
const router = express.Router();

//Métodos http//
//GET - OBTER/LER//
//POST - ENVIAR/POSTAR//
//PUT - ATUALIZAR//
//DELETE - DELETAR//

//Rota raiz da API//
router.get("/", function(req, res){
    res.json("WELCOME MY API!!!")
})

router.get("/sobre", function(req, res){
    res.json("Você está acessando a rota sobre o meu servidor")
});

router.get("/contato", function(req, res){
    res.json("Você está acessando a rota sobre o meu servidor")
});


module.exports = router;