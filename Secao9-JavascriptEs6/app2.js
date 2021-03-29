// Parametros opcionais


// Colocando o sinal "=", aplica que não precisa ser obrigado a colocar o valor do parametro b, ou seja se fizer a função
// soma (valor, valor) = resultado valor // soma(valor) = resultado do valor com o parametro b defindo em 50
function soma(a = 80, b = 50) {
    console.log(a + b);
}



function sub(a,b, inverter = false) {

    if(inverter){
        console.log(b - a);
    }else{
        console.log(a - b);
    }

}

//OBS: Parametros obrigatórios vem primeiro e depois parametros opcionais

