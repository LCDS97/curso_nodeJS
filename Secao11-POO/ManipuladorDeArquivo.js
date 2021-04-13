class Leitor {
    ler(caminho){
        return "Conteúdo do arquivo!"
    }
}

class Escritor{
    Escrever(arquivo,conteudo){
        console.log("Conteúdo escrito!");
    }
}

class Criador{
    Criar(nome){
        console.log("Arquivo criado!");
    }
}

class Destruidor{
    Deletar(nome){
        console.log("Deletando arquivo!");
    }
}

class ManipuladorDeArquivo {
    constructor(nome){
        this.arquivo = nome;
    }
    LerArquivo(){
        console.log("Lendo....")
    }
    EscreverArquivo(dados){
        console.log("Escrevendo dados...")
    }
    CriarArquivo(nome){
        console.log("Criando arquivo: " + nome);
    }
    DeletarArquivo(nome){
        console.log("Deletando arquivo: " + nome)
    }
}