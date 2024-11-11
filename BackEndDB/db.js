//Importar a biblioteca de conexão com o banco de dados//
const mysql = require("mysql2");

//String  de conexão com o baco de dados//
const connection = mysql.createConnection({
    host:"localhost", //Host do banco de dados
    port:3306, //Porta padrão do DB
    user:"root", //Usuário padrão do banco 
    password:"admin", //Senha do banco de dados
    database:"sesisenai" 
});

connection.connect(function(erro){
    if(erro){
        console.log("Conexão falhou!!!")
    }
    console.log("Conexão bem sucedida!!!")
});


module.exports = connection;

