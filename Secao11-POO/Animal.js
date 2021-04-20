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

    Vacinar(){
        console.log("Falta 1 semana para me vacinar")
    }
}

// extends: aplica o conceito de herança, pois o cachorro herda de animal
class Cachorro extends Animal{

    constructor(nome,idade, preco, raca, peso){
        super(nome, idade, preco);
        this.raca = raca;
        this.peso = peso;
    }

    Castrado(){
        console.log("Sou castrado!")
    }
    ChecarEstoque(){
        console.log("Leva um, da nada")
    }

    Vacinar(){
        console.log("Aqui é uma classe de cachorro")
        super.Vacinar();
        console.log("Aqui vem funcionalidade")
    }
}

class Pato extends Animal{

}

var dog = new Cachorro("Pakito",14,10000,"Vira-Lata",10);


dog.ChecarEstoque();
dog.Castrado();
dog.Vacinar();
console.log(dog.idade)
console.log(dog.peso)

