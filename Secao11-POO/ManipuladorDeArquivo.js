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