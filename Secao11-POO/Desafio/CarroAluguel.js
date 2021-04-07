class Carro {
    constructor(){
        this.modelo = '';
        this.preco = 0;
        this.cor = '';
        this.km = 0;
        this.dataDevolucao = new Date(0,0,0);
    }

    Alugar(){
        console.log("Alugar esse modelo...")
    }
    Comparar(){
        console.log("Compare o veículo com outro modelo...")
    }
    VerificarKM(){
        console.log("Verifique quantos KM o carro ja percorreu")
    }
    Devolver(){
        console.log("Verificar prazo para devolução")
    }
}
