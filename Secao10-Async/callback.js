function enviarEmail(corpo, para, callback) {
    setTimeout(() => {
        console.log(`
            Para: ${para}
            -------------------------
            ${corpo}
            -------------------------
            De: Lucas Santos
        `)
        // Tratamento de erro com callback
        var deuErro = false;
            // Parametro de erro sempre fica em ultimo, caso há um parametro para ser enviado nos callback
            callback(12,"O envio de e-mail falhou!");
        if(deuErro){

        }else{
            callback(12);
        }
        // Função de callback para retorno de mensagem após essa função acima ser concluída
        // Tambem posso parametros dentro do callback para ser acessado depois em uma função
        //callback("Ok",5,"8s");
    },2000)
}

console.log("Inicio do envio de e-mail!")
// Utilizando função de enviar e-mail com callback e utilizando seus parametros dinâmicos
enviarEmail("Olá é um email teste", "lucas@udemy.com", (time,erro) => {
    if(erro == undefined){
        // Se não deu erro
    console.log(`
        Deu erro não bixo
        Tempo: ${time}s
    `)}else{ // Ocorreu um erro
        console.log("Ocorreu um erro: " + erro)

    }
    
})
