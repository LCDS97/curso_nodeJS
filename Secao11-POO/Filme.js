// Arquivos de Classe, Sempre com letra Maiuscula no final do arquivo para boas praticas
class Filme{
    constructor(){

        // Definindo atributos
        // Sempre com this e nome do atributo, por padrão, é definido somente os atributos sem os valores (Definir como vazio ou zerado/nulo)
        this.titulo = '';
        this.ano = 0;
        this.genero = '';
        this.diretor = '';
        this.atores = [];
        this.duracao = 0;

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