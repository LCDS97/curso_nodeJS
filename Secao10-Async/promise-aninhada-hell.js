function pegarId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        },1500)
    })
}

function buscarEmailNoBanco(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("lucas@udemy.com")
        }, 2000);
    })
}


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
console.log("inicio")
// Promessa aninhada
// Primeiro ele pega o ID da primeira promise, depois de cumprir essa tarefa do id ele vai
pegarId().then((id) => {
    // pegar o ID , ele pega o e-mail no banco, que é a segunda promise
    buscarEmailNoBanco(id).then((email) => {

        // Depois de cumprir as duas promises, é enviado o e-mail, como ele pode falhar é utilizado o catch nesse caso
        enviarEmail("Olá como vai?", email).then(() => {
            // Em promessas aninhadas, pode se utilizar as varíaveis das promises anterior
            console.log("Email enviado para o usuário com id: " + id)
        }).catch(err => {
            console.log(err);
        })
    })
})
console.log("fim")