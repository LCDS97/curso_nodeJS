// Operador Spread

var nome = "Lucas Santos";
var idade = 23;
var empresa = {
    nome: "Veeva",
    cidade: "São Paulo",
    site: "veeva.com",
    email: "lucas.santos@veeva.com"
}



// Sem operador spread
var userAntiga = { 
    nome,
    idade,
    empresa: empresa.nome,
    cidade: empresa.cidade,
    site: empresa.site,
    email: empresa.email
}

// Operador spread é representado por "...", é a mesma coisa que o método acima mas muito mais efetivo
var user = {
    nome,
    idade,
    ...empresa
}

console.log(user);