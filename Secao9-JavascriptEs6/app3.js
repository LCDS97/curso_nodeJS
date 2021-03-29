var nome = "Lucas Santos";
var idade = 23;
var empresa = "Veeva";

// Método antigo de criar um JSON
var user = {
    nome: nome,
    idade: idade,
    empresa: empresa
}

// JSON encurtados ele cria ja o campo de acordo com o nome da variavel
var userAtualizada = { // Só funciona com varíavel e let
    nome,
    idade,
    empresa
}

console.log(user);