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

function pegarUsuarios(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve([
            {name: "Lucas", lang: "JS"},
            {name: "Ricardo", lang: "C-Sharp"},
            {name: "Danilo", lang: "Java"}
        ])
      }, 3000)
    })
}

// Para utilizar o await, é necessario declarar que a função é async, utilizando o termo no inicio da função
async function principal(){
    // Utilizando o await, para esperar a promisse ser concluida e mostrar o resultado
    var usuarios = await pegarUsuarios();
    console.log(usuarios);
}

principal();
// Normalmente é esse tipo de método é uma função bloqueante, então é necessário utilizar com precaução
// Await só funciona com promisses 

/*
    Esse conceito é equivalente a:
    pegarUsuarios().then(usuarios =>{
        //...
    });
*/


async function enviandoEmail(){
    var id = await pegarId();
    var email = await buscarEmailNoBanco(id)
    // Para tratar de erros no async e await com try e catch
    // Try e catch é uma tratativa de exceções
    try{ // Promise resolvida
        enviarEmail("Olá, como vai?",email);
        console.log("Email enviado com sucesso!");
    }catch(erro){ // Promise negada
        console.log(erro);
    }
}

enviandoEmail()

/*
pegarId().then((id) => {
    
    buscarEmailNoBanco(id).then((email) => {

        
        enviarEmail("Olá como vai?", email).then(() => {
            
            console.log("Email enviado para o usuário com id: " + id)
        }).catch(err => {
            console.log(err);
        })
    })
})
console.log("fim")
*/