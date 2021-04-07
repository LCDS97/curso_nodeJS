class Produto {
    // Atributos
    constructor(){
    this.peso = 0;
    this.preco = 0;
    this.frete = 0;
    this.categoria = '';
    this.nome= '';

    }
        // Métodos
        Comprar(){
            console.log("Comprando...")
        }

        CalcularFrete(){
            console.log("Calculando...")   
        }
        CancelarCompra(){
            console.log("Retirando produto do carrinho")
        }
        Perguntar(){
            console.log("Dúvida sobre o produto?")
        }
        Avaliar(){
            console.log("Avalie o produto!")
        }
}
