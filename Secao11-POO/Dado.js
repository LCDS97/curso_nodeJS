class Dado{
    // Atributo de faces para escolher quantos face tera o dado
    constructor(faces){
        this.faces = faces;
    }

    Rolar(){
        // Criar método para rolar dados
        console.log("Resultado do dado: " + this.GetRandomIntInclusive(1,this.faces))
        
    }
    // Função para gerar número aleatório
    GetRandomIntInclusive(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

// Criando dados
var d6 = new Dado(6);
var d12 = new Dado(12);
var d100 = new Dado(100);

// Utilizando método para rolar os dados e gerar os números aleatórios
d6.Rolar();
d12.Rolar();
d100.Rolar();