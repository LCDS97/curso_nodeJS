const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// CORS para permimtir requisições externas
const cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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
    ]
}

app.get("/games", (req, res) => {
    res.statusCode = 200;
    res.json(DB.games);
});

app.get("/games/:id",(req, res) => {

    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }
    else{
        var id = parseInt(req.params.id);

        var game = DB.games.find(g => g.id == id);

        if(game != undefined){
            res.statusCode = 200;
            res.json(game);
        }
        else {
            res.sendStatus(404);
        }
    }

});

app.post("/game", (req, res) => {

    var {id, title, price, year} = req.body;

    DB.games.push({
        id,
        title,
        price,
        year
    });
    
    res.sendStatus(200);
});

app.delete("/game/:id",(req,res) => {
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

app.put("/game/:id",(req, res) => {
  
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

app.listen(4000,() => {
    console.log("API Rodando!");
});