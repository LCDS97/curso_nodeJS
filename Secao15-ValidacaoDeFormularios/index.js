// Inicializando express
var express = require("express");
var app = express();
var session = require("express-session");
var flash = require("express-flash");
var bodyParser = require("body-parser");

// Configurando o html para utilizar o ejs
app.set('view engine','ejs');

// Configuração do body parser
app.use(bodyParser.urlencoded({ extend: false }))
app.use(bodyParser.json())

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure:true }
}))

app.use(flash());

app.get("/",(req, res) => {
    console.log("Está rodando...");
    res.send("Rodando...")
})



app.listen(4000,(req,res ) => {
    console.log("Servidor rodando!");
});