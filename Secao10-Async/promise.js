function enviarEmail(corpo, para){
    // esse Return equivale a um "Eu prometo que..., recebendo dois parametros (resolvido ou rejeitado)"
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            var deuErro = false;
            

            if(!deuErro){
                //Em promises só pode ter um paramêtro para o resolve e o reject
                // Caso queira passar multiplos dados, é necessário utilizar em formato JSON
                resolve({time: 6, to: "lucas@udemy.com"}) // Promessa cumprida
            }else{
                // Reject é mais utilizada para parametros de erro
                reject("Fila cheia!") // Promessa rejeitada
            }

        }, 3000)
    })
}

// then equivale a função do callback, mas a diferença o then é executado quando o resolve é chamado 
                                                // Utiliza o destructuring para criar variaveis indepedentes com o json do resolve "{variavel, variavel}"
enviarEmail("Olá mundo","email@email.com").then( ({time, to}) => {
    console.log(`
        Tempo: ${time}
        ------------------
        Para: ${to}
    `)
    console.log("Você conseguiu rodar o que me prometeu!")
// Toda vez que for rejeitada a promise, utiliza-se o catch
}).catch((erro) => {
    console.log("Que pena, deu erro! tenta dnv ae " + erro)
})

// OBS: Toda vez que trabalhar com promise, é obrigatório tratar uma rejeição de promise, com o catch

