// Conceito sobre Herança em JS
class Animal{

    constructor(nome, idade, preco){
        this.nome = nome;
        this.idade = idade;
        this.preco = preco;
    }

    ChecarEstoque(){
        return 10;
    }
}

// extends: aplica o conceito de herança, pois o cachorro herda de animal
class Cachorro extends Animal{

    Castrado(){
        console.log("Sou castrado!")
    }
    ChecarEstoque(){
        console.log("Leva um, da nada")
    }
}

class Pato extends Animal{

}

var dog = new Cachorro("Pakito",14,10000);

dog.ChecarEstoque();
dog.Castrado();

