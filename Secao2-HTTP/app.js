// Carregando o módulo http que ja vem da biblioteca do Node.js
var http = require("http");

// Criando servidor http e depois colocar a porta aonde mesmo vai hospedar
http.createServer(function(req, res){
    res.end("<h1>Bem vindo ao modulo HTTP do curso de Node.JS!<h1><h4>Primeiro modulo de http</h4>")
}).listen(3000);
console.log("Meu servidor esta rodando!");
