// Inicializando express
var express = require("express");
var app = express();
var session = require("express-session");
var flash = require("express-flash");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

// Configurando o html para utilizar o ejs
app.set('view engine','ejs');

// Configuração do body parser
app.use(bodyParser.urlencoded({ extend: false }))
app.use(bodyParser.json())

app.use(cookieParser("senhaseguraparacookie"))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.use(flash());

app.get("/",(req, res) => {

    // Criando varíaveis de erro com o flash
    var emailError = req.flash("emailError");
    var pointsError = req.flash("pointsError");
    var nameError = req.flash("nameError");
    // Recebendo valores do form
    var email = req.flash("email");
    var points = req.flash("points");
    var name = req.flash("name");

    // Operação com ternário para consultar se Erro não esta vazio ou undefined
    emailError = (emailError == undefined || emailError.length == 0) ? undefined : emailError;
    // Verificando se o campo estiver vazio, permanece como vazio, caso não, recebe o seu próprio valor
    email = (email == undefined || email.lenght == 0) ? "" : email;

    pointsError = (pointsError == undefined || pointsError.length == 0) ? undefined : pointsError;
    points = (points == undefined || points.lenght == 0) ? "" : points;

    nameError = (nameError == undefined || nameError.length == 0) ? undefined : nameError;
    name = (name == undefined || name.lenght == 0) ? "" : name;

    res.render("index",{emailError,pointsError,nameError,email: email, points: points,name: name})
})

app.post("/form",(req, res) => {
    // Puxando informações do form
    var { email, name, points } = req.body;

    // Criando variaveis para armazenar uma mensagem que vai ser direcionado ao html do usuario
    var emailError;
    var pointsError;
    var nameError

    if(email == undefined || email == ""){
        emailError = "O e-mail não pode ser vazio";
    }

    if(points == undefined || points < 20) {
        pointsError = "Você não pode ter menos de 20 pontos ou vazio"
    }

    if(name == undefined || name == ""){
        nameError = "O nome não pode ser vazio"
    }
    
    // Verificando se algum erro foi cometido na validação
    if(emailError != undefined || pointsError != undefined || nameError != undefined){
        // Flash é uma sessão que só é utilizada somente uma vez  e logo após utilizada é destruida
        req.flash("emailError",emailError);
        req.flash("pointsError",pointsError);
        req.flash("nameError",nameError);

        req.flash("email",email)
        req.flash("points",points)
        req.flash("name",name)
        
        
        res.redirect("/");
    }else{
        res.send("tudo certo até agora");
    }

});



app.listen(4000,(req,res ) => {
    console.log("Servidor rodando!");
});