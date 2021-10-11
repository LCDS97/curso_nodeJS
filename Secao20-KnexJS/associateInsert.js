// ANCHOR Knex

var database = require("./database");

// SECTION Tabela de 1:1 em Node


database.insert({
    nome: '2K',
    game_id: 2
}
).table('estudios').then(data => {
    console.log(data);
}).catch(err => {
    console.error(err);
})