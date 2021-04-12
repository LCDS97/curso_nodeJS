// Arquivos de Classe, Sempre com letra Maiuscula no final do arquivo para boas praticas
class Filme{
    constructor(titulo,ano,genero,diretor,duracao){

        // Definindo atributos
        // Sempre com this e nome do atributo, por padrão, é definido somente os atributos sem os valores (Definir como vazio ou zerado/nulo)
        this.titulo = '';
        this.ano = 0;
        this.genero = '';
        this.diretor = '';
        this.duracao = 0;
        this.atores = [];
    }

    // Para criar um método, somente adicionar o nome do método, para uma boa pratica métodos ficam com Letra Maiuscula
    Reproduzir(){
        console.log("Reproduzindo...");
    }
    Pausar(){
        console.log("Pausado ||");
    }
    Avancar(){
        console.log("Avançar >>");
    }
    Retroceder(){
        console.log("<< Retroceder");
    }
    Fechar(){
        console.log("Fechar X");
    }
}

// Criando um objeto utilizando o modelo de Filme - Utilizando a (classe Filme) e criando (objeto Vingadores,Hulk e Star Wars) 
var vingadores = new Filme();

// Definindo atributos para o filme utilizando o modelo de classe Filme
vingadores.titulo = "Vingadores 2";
vingadores.ano = "2014";
vingadores.genero = "Ação";

// Acessando o método de reproduzir com objeto dos vingadores
console.log("------------------------------------")
console.log(vingadores.titulo)
console.log(vingadores.ano)
console.log(vingadores.genero)
console.log("Reproduzindo filme dos Vingadores")
vingadores.Reproduzir()


var hulk = new Filme();

hulk.titulo = "Hulk";
hulk.ano = 2010;
hulk.genero = "Ação";


console.log("------------------------------------")
console.log(hulk.titulo)
console.log(hulk.ano)
console.log(hulk.genero)
console.log("Pausando filme do Hulk")
hulk.Pausar();


var starWars = new Filme();
starWars.titulo = "Star Wars 2: Sei la o que no espaço";
starWars.ano = 1997;
starWars.genero = "Ficção";

console.log("------------------------------------")
console.log(starWars.titulo)
console.log(starWars.ano)
console.log(starWars.genero)
console.log("Retrocendo e Reproduzindo e Fechando filme dos Star Wars")
starWars.Retroceder();
starWars.Reproduzir()
starWars.Fechar();

// Utilizando o constructor como uma função, e simplificando a construção de atributos próprios para objetos
class FilmeComParametro{
    constructor(titulo,ano,genero,diretor,duracao){

        // Definindo atributos
        // Sempre com this e nome do atributo, por padrão, é definido somente os atributos sem os valores (Definir como vazio ou zerado/nulo)
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.duracao = duracao;
        this.atores = [];
    }

    // Para criar um método, somente adicionar o nome do método, para uma boa pratica métodos ficam com Letra Maiuscula
    Reproduzir(){
        console.log("Reproduzindo...");
    }
    Pausar(){
        console.log("Pausado ||");
    }
    Avancar(){
        console.log("Avançar >>");
    }
    Retroceder(){
        console.log("<< Retroceder");
    }
    Fechar(){
        console.log("Fechar X");
    }
    // Utilizando o this para printar atributos da própria variavel
    Ficha(){
        console.log("Título: " + this.titulo);
        console.log("Ano de lançamento: " + this.ano);
        console.log("Gênero: " + this.genero)
        // Também pode ser utiliza os próprio métodos com o this
        this.Reproduzir()
        this.Avancar()
    }
}
// Definindo parametros do constructor direto pela função do mesmo e armazenando na Varíavel Matrix
var Matrix = new FilmeComParametro("Matrix",1997,"Ficção","Famoso","3 horas")
console.log("------------------------------------")

Matrix.Ficha();
// O this representa o objeto, por isso em toda cláusula this ele substitui pela varíavel que foi definida no parametro

