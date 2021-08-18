// ANCHOR Knex

// SECTION Order by no Knex
var database = require("./database");


// NOTE Ele vai definir a ordem da sua query, ex: por tamanho, por ordem alfabetica, por mais recente, etc...

/* NOTE para utilizar o order by, utilizamos o select em uma tabela e definir sua ordem, no Order By temos duas maneiras

- Desc: Ordem Descrecente - Do maior para o menor
- Asc: Ordem Crescente - Do menor para o maior
*/

// NOTE Exemplo ordem por preço - Do maior preço para o menor preço
database.select().table("games").orderBy("preco","desc").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})


// NOTE Exemplo ordem por nome - Por ordem alfabética - Da primeira letra (A) para a ultima (Z)
database.select().table("games").orderBy("nome","asc").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})