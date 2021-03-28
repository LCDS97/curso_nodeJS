// Variavel pode ser mudada o valor conforme o tempo
var nomePrimeiro = "Lucas";
nomePrimeiro = "China";

// Constante seu valor nunca vai ser alterada
const appzin = {name: "Appzin"};


// Exemplo de prática não recomendada
var app = {name: "App"};

// Qualquer alterações dessa pode quebrar a funcionalidade da varíavel app
// Por isso é recomendado para variaveis principais, utilizar Constante
app = "";
app = {};
app = undefined;


// Declarar variavel com let
// Nessa aula ira abordar a diferença entre let e var
let nome = "Arnaldo";
var sobrenome = "Silva";
const pi = 3.14;

// Diferenças:

// Let funciona no escopo Global, Local e de Bloco
console.log(nome);

// Var funciona somente em Global e Local
console.log(sobrenome);

// Exemplo de Escopo
// Escopo é o nivel de acesso da varíavel

// Variavel global, pois ela pode ser acessado em qualquer area do arquivo, tanto dentro de funções como fora
var nome1 = "Amanda";

// Variavel global com let
let nome2 = "Leonardo"

function func1(){
    // Variavel local, pois ela foi declarada dentro da função e não pode ser acessado por outra função ou em outra parte do arquvio
    // Ou seja, somente pode ser acessada dentro da mesma função
    var sobrenome1 = "Santos"
    var sobrenome2 = "Lisboa"
    console.log("Oi " + nome1 + " " + sobrenome1);
    console.log("Oi " + nome2 + " " + sobrenome2);

}

function func2(){
    console.log("Olá " + nome1);
    // Foi gerado na erro função abaixo, pois não consegue acessar variavel na outra função (func1)
    // console.log("Olá " + nome1 + " " + sobrenome1);
        // Foi gerado na também um erro na função abaixo, pois não consegue acessar o let na outra função (func1)
    // console.log("Olá " + nome2 + " " + sobrenome2);
}

func1();
func2();
console.log(nome1);
console.log(nome2);
console.log("=====================================");

// Escopo de bloco é usada quando qualquer declaração de variavel esta dentro de chaves = {}
// Somente o let tem escopo de bloco
let a = 10; // Variavel global
let testar = true;

if(testar){
    let b = 20; // Bloco
    console.log(a + b);
}

// Se tentar acessar a variavel de bloco aonde não foi declarada dentro de um bloco, ira dar erro
// console.log(a + b);

// Mesmo sem o método do let testar, é possível acessar a let "a", declarada dentro de um bloco é possivel acessar ela
{
    let c = 40;
    console.log(a + c);
}
