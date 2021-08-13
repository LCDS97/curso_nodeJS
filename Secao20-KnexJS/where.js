// ANCHOR Knex

// SECTION Where no Knex
let database = require("./database");

// NOTE Where é utilizado para busca especifico de um valor dentro de uma tabela, definindo por nome da coluna e seu valor
var query = database.where({ nome: "Session" }).table("games");

// NOTE O where também pode ser utilizado em conjunto do select
var query2 = database
  .select(["id", "preco"])
  .where({ nome: "Session" })
  .table("games");

// SECTION Condições no where
// NOTE AND - Somente procura caso seja os dois valores iguais
var query3 = database
  .select(["id", "preco"])
  .where({ nome: "Session" })
  .where({ id: 2 })
  .table("games");

// NOTE OR - Caso contenha um dos valores

var query4 = database
  .select(["id", "preco"])
  .where({ nome: "Session" })
  .orWhere({ id: 2 })
  .table("games");

// NOTE Caso precise fazer consultas como Maior, Menor, LIKE é necessário utilizar outro método do where - whereRaw

var query5 = database
  .select(["id", "preco"])
  .where({ nome: "Session" })
  .whereRaw("preco > 50")
  .table("games");

// !SECTION
console.log(query.toQuery());
console.log(query2.toQuery());
console.log(query3.toQuery());
console.log(query4.toQuery());
console.log(query5.toQuery());

// SECTION Executando a query

database.select()
    .whereRaw("nome = 'Session' OR preco > 50")
    .table("games").then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err);
    })

// !SECTION

// SECTION Raw - Query "crua"

// NOTE Caso necessite fazer uma query manualmente, pode ser utilizado o método raw para escrever o código SQL

database.raw("SELECT * FROM games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err);
})


// !SECTION

// !SECTION
