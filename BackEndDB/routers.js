//Bibliotecas a serem utilizadas//
const express = require('express');

//Import da conexão com o banco de dados//
const connection = require('./db');
const router = express.Router();

//Rota raiz da API//
router.get("/", function(req, res){
    res.json("API IS RUNNING!!!")
})


//Rota para listar os dados do banco//
// router.get("/listar", (req, res)=>{
//     const sql = "SELECT * FROM estudantes"
    
//     connection.query(sql,(erro, result)=>{
//         if(erro){
//             res.status(500).json(erro);
//         }
//         else{
//             res.status(200).json(result);
//         }
//     });
// });

// router.post ("/cadastrar",(req, res)=>{

//     //Informações recebidas de um corpo de requisição//
//     const{id, nome, sobrenome, rm} = req.body

//     //try catch - é utilizado para tratamento de erros//
//     try{
//         //Realizar a inserção dos dados no banco//
//         connection.query("INSERT INTO estudantes values(?,?,?,?)", [id, nome, sobrenome, rm],(erro)=>{
//             if(erro){
//                 //Resposta se tiver erro na requisição//
//                 res.status(500).json(erro)
//             }
//             else{
//                 //Resposta se a inserção dos dados foi bem sucedida//
//                 res.status(201).json("Cadastrado com sucesso!!!");
//             }
//         })

//     }
//     catch(erro){
//         console.log(erro)
//     }
// })



router.get("/listar", (req, res)=>{
    const sql = "SELECT * alunos"
    
    connection.query(sql,(erro, result)=>{
        if(erro){
            res.status(500).json(erro);
        }
        else{
            res.status(200).json(result);
        }
    });
});


router.post ("/cadastraraluno",(req, res)=>{

    //Informações recebidas de um corpo de requisição//
    const{id, nome, idade, cidade} = req.body

    //try catch - é utilizado para tratamento de erros//
    try{
        //Realizar a inserção dos dados no banco//
        connection.query("INSERT INTO alunos values(?,?,?,?)", [id, nome, idade, cidade],(erro)=>{
            if(erro){
                //Resposta se tiver erro na requisição//
                res.status(500).json(erro)
            }
            else{
                //Resposta se a inserção dos dados foi bem sucedida//
                res.status(201).json("Cadastrado com sucesso!!!");
            }
        })

    }
    catch(erro){
        console.log(erro)
    }
});


router.delete("/deletar/:id",(req, res)=>{
    const sql = "DELETE FROM alunos WHERE id = ?"

    //Para obter o id por parâmetro utilizar a sintaxe req.paramis.id//
    connection.query(sql, [req.params.id], (erro)=>{
        if(erro){
            res.status(500).json(erro)
        }
        else{
            res.status(200).json("Usuário deletado com sucesso!!!");
        }
    })
});



router.put("/atualizar/:id",(req, res)=>{
    const {nome, idade, cidade} = req.body

    const sql = "UPDATE alunos SET nome = ?, idade = ?, cidade = ? WHERE id = ?";

        connection.query(sql, [nome, idade, cidade, req.params.id],(erro)=>{
        if(erro){
            res.status(500).json(erro)
        }
        else{
            res.status(200).json("Usuário atualizado com sucesso!!!");
        }
    })
})

//req = requisição//
//res = resposta//

module.exports = router;