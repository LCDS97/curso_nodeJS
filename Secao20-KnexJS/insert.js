// ANCHOR Knex

var database = require("./database");

// SECTION Adicionando no Banco de Dados com o Knexjs

var jogo = {
    nome: "GTA V",
    preco: 95.90
}

var jogos = [
    {
        nome: "Call of Duty MW3",
        preco: 200
    },
    {
        nome: "NBA 2K21",
        preco: 259.90
    },
    {
        nome: "Skater XL",
        preco: 79.90
    }
];
// NOTE Inserindo dados da variavel jogo para a tabela games
var query = database.insert(jogos).into("games").then(data => {
    console.log(data); // NOTE O query builder sempre vai retornar o id da query que foi adicionada
}).catch(err => {
    console.log(err)
})
