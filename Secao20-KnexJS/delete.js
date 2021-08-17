// ANCHOR Knex

var database = require("./database");

// SECTION Delete no Knexjs

// NOTE Utiliza-se o where para definir o que vai ser deletado e tabela onde vai ser deletada
// NOTE O where pode definir quantos where for necessario para a busca, e após definido chama-se o método DELETE
database.where({id: "3"}).delete().table("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err)
})

// !SECTION