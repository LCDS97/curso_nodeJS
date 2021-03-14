// Importando o express
const express = require("express");

// Iniciando o express e passando para a constante "app"
const app = express();

// Criando uma rota inicial
app.get("/", function(req, res){
    res.send("Bem vindo a rota inicial")
});

app.get("/blog/:artigo?", function(req,res){

    var artigo = req.params.artigo;

    if(artigo){
        res.send("<h2>Artigo: " + artigo + "</h2>");
    }
    else{
        res.send("Bem vindo ao meu blog!");
    }

});

app.get("/canal/youtube", function(req, res) {
    var canal = req.query["canal"];

    if(canal) {
        res.send(canal)
    }
    else {
        res.send("Nenhum canal fornecido!")
    }
;
});

// Rota com parametro
// Só é acessivel com o parametro (obrigatório)
app.get("/ola/:nome/:empresa", function(req, res) {
// REQ => Dados enviados pelo usuário
// RES => Resposa que vai ser enviada para o usuário
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send("<h1>Oi " + nome + " da " + empresa + " </h1>");
});

// Parametros obrigatório em rota
// Somente necessita de colocar na rota Ex: app.get("/(rota)/:(parametro)")

// Para adicionar parametros opcionais
// Basta colocar no parametro no final o (?)
// Ex: app.get("/(rota)/:(parametro)?")




app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }
    else{
        console.log("Servidor inciado com sucesso!");
    }
});

