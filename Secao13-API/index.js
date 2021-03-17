const express = require("express");
const app = express();
const bodyParser = require("body-parser");

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

app.listen(4000,() => {
    console.log("API Rodando!");
});