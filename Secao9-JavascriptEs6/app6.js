// Arrow function
// Mesma coisa que a função, mas é uma forma mais curta(reduzida) para criar funções e melhor para POO


// Método antigo para criar função
function soma(a, b){
    console.log(a,b);
}

var mult = function(a,b){
    console.log(a * b);
}

// Arrow function, somente funciona com callbacks ou armazenada em variaveis
var mult3 = (a,b,c) => {
    console.log(a*b*c);
}

// Outra forma de declarar com um parametro somente
var mult4 = d => console.log(d * 3);

// Return para retornar o resultado de uma operação ou seja a função retorna o resultado da operação
var sub = function(a,b){
    return a-b;
}

var resultado = sub(10,5);

console.log(resultado);

// Como esta com o return digitando no próprio console é trazido o return
console.log(sub(5,4));

// Arrow function com retorno
var mult5 = (a,b,c) => {
    return a * b * c;
}

var resultado2 = mult5(2,3,4)

console.log(resultado2);

// Forma reduzida de arrow function ( A melhor forma de estrutura )

var mult6 = (a,b,c,d) => a * b * c * d;
var resultado3 = mult6(10,2,3,4);
console.log(resultado3);