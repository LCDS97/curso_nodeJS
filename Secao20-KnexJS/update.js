// ANCHOR Knex

// SECTION Update no Knex
var database = require("./database");

// NOTE Assim como o delete o update também é utilizado em conjunto com o where para selecionar o dado da tabela que vai ser atualizado
// NOTE é chamado o método do update e você passa em JSON
database.where({id: 4}).update({preco: 70}).table("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})

// NOTE Respeito sempre o tipo do campo para não retorna erros, e verificar se o valor não é undefined também porque consta como erro tambem

// !SECTION

