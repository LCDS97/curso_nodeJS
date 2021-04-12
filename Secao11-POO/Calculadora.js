// Métodos estáticos

class Calculadora {

    // Para definir um método estatíco é só definir a palavra chave "static"
    static Somar(a,b){
        console.log( a + b )
    }
    
    static Sub(a,b){
        console.log( a - b )
    }

}

// Não é necessário criar uma instância da classe

Calculadora.Somar(10,20)
Calculadora.Sub(30,20)