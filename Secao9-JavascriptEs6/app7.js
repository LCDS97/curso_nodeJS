// Método find

// Percorrer array com Javascript

var joelson = {
    nome: "Joelson Santos",
    empresa: "Monta tijolo",
    salario: 1000,
} // Verificar() => true;

var joaquim = {
    nome: "Joaquim da Silva",
    empresa: "Reboca parede",
    salario: 780
} // Verificar() => false;

var ezequias = {
    nome: "Ezequis Aparecida",
    empresa: "Pinta tudo",
    salario: 1400,
} // Verificar() => false;

var enzo = {
    nome: "Enzo Guedes",
    empresa: "Pinta tudo",
    salario: 1340,
} // Verificar() => false;

var users = [joelson, joaquim, ezequias];

// Método find para procurar um array
// Trabalho com arrow function de uma linha e pelo sinal "===" voce procura seu valor
var usuario = users.find(user => user.nome === "Joelson Santos"); // Verificar();

// Outro exemplo
var empresa = users.find(user => user.empresa === "Pinta tudo"); // Nesse caso ele aponta pro primeiro valor ja encontrado e retorna o mesmo

// Exemplo com operação
var salario = users.find(user => user.salario < 1200 && user.salario > 800);

console.log("Retornando usuário com nome Joelson Santos");
console.log(usuario);
console.log("================");
console.log("Retornando usuario com empresa Pinta Tudo");
console.log(empresa);
console.log("================");
console.log("Retornando com salario maior que 800 e menor que 1200");
console.log(salario);
