// Template literals

// Concanetação de strings e variaveis, ajudar na formatação

var nome = "Lucas Santos";
var sobre = "Fundador de nada por enquanto";

var frase = " Olá meu nome é " + nome + " e sou " + sobre + "."

console.log("Método antigo");
console.log(frase);

console.log("=============================");
console.log("Utilizando o template literal");

// Para o template literal utiliza para concatenar as chaves "{}" e colocar a varíavel dentro dela
var frase2 = `Olá meu nome é ${nome} e sou ${sobre}.`
console.log(frase2)

// Também segui as quebras de linhas

var frase3 = `
                Olá meu nome é ${nome}
                        e sou
                       ${sobre}

`
console.log("=============================");
console.log("Utilizando o template literal com quebra de linha");
console.log(frase3);