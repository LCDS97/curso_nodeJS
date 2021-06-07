// ANCHOR Knex

// SECTION Select no Knex
var database = require("./database");

// NOTE Select sem nenhum argumento, ele seleciona a tabela inteira a qual foi passada no parametro table
database.select().table("games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})


// SECTION Select
// NOTE Passando o select com filtros, passando um array nos Parametros
database.select(["nome", "preco"]).table("games").then(data => {

    console.log(data)
}).catch(err => {
    console.log(err)
})
// !SECTION
// SECTION Nested Queries
// NOTE No knex tem a liberdade de trabalhar com multiplas consultas, uma dentro da outra - Nested Queries
database.insert({
        nome: "Session",
        preco: 39
    })


    .into("games")
    .then(data => {
        database.select(
                ["nome", "preco"]
            )
            .table("games")
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
        console.log(data);
    })
    .catch(err => {
        console.log(err)
    })
// !SECTION
// !SECTION