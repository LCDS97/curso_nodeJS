// Desestruração

// Permite recuperar campos do JSON e criar varíaveis, lets ou constantes a partir desses campos

var user = {
    nome: "Lucas",
    prof: "Analista Dados",
    empresa: "Veeva",
    curso: "formação node.js"
}

// Métódo antigo
var nomeAntigo = user.nome;
var cursoAntigo = user.curso;
var empresaAntigo = user.empresa;

console.log("==================");
console.log("Método antigo");
console.log(nomeAntigo);
console.log(cursoAntigo);
console.log(empresaAntigo);
console.log("==================");
console.log("Método de Destructure");

// Método atual de Destructure, faz a mesma coisa que o método antigo, mas evitar de criar variaveis e ja podemos acessar o JSON direto e utiliza em variavel
var { nome } = user;
// Também pode pegar mais de uma variaveis utilizando a virgula
var { empresa,prof } = user;

console.log(nome);
console.log(empresa);
console.log(prof);

