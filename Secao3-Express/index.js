// Importando o express
const express = require("express");

// Iniciando o express e passando para a constante "app"
const app = express();

// Criando uma rota inicial
app.get("/", function(req, res){
    res.send("Bem vindo a rota inicial")
});

app.get("/blog", function(req,res){
    res.send("Bem vindo ao meu blog!");
});

app.get("/canal/youtube", function(req, res) {
    res.send("Bem vindo ao meu canal!");
});

// Rota com parametro
// Só é acessivel com o parametro (obrigatório)
app.get("/ola/:nome", function(req, res) {
// REQ => Dados enviados pelo usuário
// RES => Resposa que vai ser enviada para o usuário
    res.send(req.params.nome);
});





app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }
    else{
        console.log("Servidor inciado com sucesso!");
    }
});

