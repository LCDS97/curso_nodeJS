// ANCHOR Knex

var database = require("./database");

// SECTION Para fazer inserção associada, somente é necessário adicionar seus campos respectitivos, e o valor da chave estrangeira tem que ser o mesmo na tabela referenciada


database.insert({
    nome: '2K',
    game_id: 2
}
).table('estudios').then(data => {
    console.log(data);
}).catch(err => {
    console.error(err);
})