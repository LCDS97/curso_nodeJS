const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// CORS para permimtir requisições externas
const cors = require("cors");
// Json Web Token para gerar token nas autenticações
const jwt = require("jsonwebtoken");
// Criando segredo para gerar web token, NÃO PODE SER DIVULGADA DE NENHUMA FORMA
const JWTSecret = "algosecretoguardadoA7ChavesNinguemVaiDescobrirhahaharsrs"


// Habilitando api sendo acessada externamente
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Criando middleware de autenticação
function auth(req, res, next){
    const authToken = req.headers['authorization'];

    if(authToken != undefined){
        // Cortando parte da string para verificzar token
        const bearer = authToken.split(' ');
        // Acessando o array do token pelo seu indice 2 no array
        var token = bearer[1];

        // Verificando se o token é valido
        jwt.verify(token,JWTSecret,(err, data) => {
            if(err){
                res.status(401);
                res.json({err: "Token invádlido"});
            }else{
                req.token = token;
                req.loggedUser = {id: data.id, email: data.email}
                next();
            }
        });


    }else {
        res.status(401);
        res.json({err: "Token invalido"})
    }
    
}

var DB = {
    games: [
        {
            id: 23,
            title: "Call of Duty MW",
            year: 2018,
            price: 60

        },
        {
            id: 66,
            title: "Overwatch",
            year: 2016,
            price: 49

        },
        {
            id: 2,
            title: "Counter Strike Global Offensive",
            year: 2012,
            price: 20

        },
    ],
    users: [
        {
            // Cadastrando alguns usuários para utilizar no JWT
            id: 1,
            name: "Lucas",
            email: "lucas@guiaprogramador.com",
            password: "1234"
        },
        {
            id: 2,
            name: "Amanda",
            email: "amanda@guiaprogramador.com",
            password: "1234"
        },
    ]
}


app.get("/games", auth, (req, res) => {

   res.statusCode = 200;
   res.json(DB.games)
    
});

app.get("/game/:id", auth,(req, res) => {

    

    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }
    else{
        var id = parseInt(req.params.id);

        // Implementado HATEOAS da Seção 15
        var HATEOAS = [
            {
                 href:"http://localhost:4040/game/"+id,
                 method: "DELETE",
                 rel: "delete_game"
            },
            {
                 href:"http://localhost:4040/game/"+id,
                 method: "PUT",
                 rel: "edit_game"
            },
            {
                 href:"http://localhost:4040/game/"+id,
                 method: "GET",
                 rel: "get_game"
            },
            {
             href: "http://localhost:4040/games",
             method: "GET",
             rel: "get_all_games"
            }
        ]

        var game = DB.games.find(g => g.id == id);

        if(game != undefined){
            res.statusCode = 200;
            res.json({game, _links: HATEOAS});
        }
        else {
            res.sendStatus(404);
        }
    }

});

app.post("/game", auth, (req, res) => {

    var {id, title, price, year} = req.body;

    DB.games.push({
        id,
        title,
        price,
        year
    });
    
    res.sendStatus(200);
});

app.delete("/game/:id", auth,(req,res) => {
    if(isNaN(req.params.id)) {
        res.sendStatus(400);
    }
    else {
        var id = parseInt(req.params.id);

        var index = DB.games.findIndex(g => g.id == id);

        if(index == -1){
            res.sendStatus(404);
        }
        else {
            DB.games.splice(index,1);
            res.sendStatus(200);
        }
        
    }
});

app.put("/game/:id", auth,(req, res) => {
  
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }
    else{
        var id = parseInt(req.params.id);

        var game = DB.games.find(g => g.id == id);

        if(game != undefined){

            var {title, price, year} = req.body;

            if(title != undefined){
                game.title = title;
            }

            if(price != undefined){
                game.price = price;
            }

            if(year != undefined){
                game.year = year;
            }

            res.sendStatus(200);

        }
        else {
            res.sendStatus(404);
        }
    }

});

// Criando rota de autenticação (Endpoint da API)

app.post("/auth", (req,res) => {
    
    var { email,password} = req.body;

    if(email != undefined) {

        var user = DB.users.find(u => u.email == email);

        if(user != undefined){
            if(user.password == password){

                // Armazenando informações do usuário para saber quem é o dono do token gerado
                // É chamado de payload, são informações que são enviado do usuário junto com o token
                jwt.sign({ id: user.id, email: user.email },JWTSecret,{expiresIn:'48h'},(err, token) => { // Chamando o segredo do token e colocando tempo de expiração do token
                    if(err){
                        res.status(400);
                        res.json({err: "Falha interna"});
                    }else {
                        res.status(200);
                        res.json({token: token})
                    }

                })


            }else{
                res.status(401)
                res.json({err: "Credenciais inválidas!"});
            }
        }else {
            res.status(404)
            res.json({err: "E-mail não existente na base de dados!"})
        }

    }else {
        res.status(400)
        res.json({err: "E-mail Invalido"})
    }

});

app.listen(4000,() => {
    console.log("API Rodando!");
});