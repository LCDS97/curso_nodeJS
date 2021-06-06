const fs = require('fs');

function modificarUsuario(nome, sobrenome, idade) {
    fs.readFile("./usuario.json", {encoding: 'utf-8'},(erro, dados) => {
        if(erro) {
            console.log("Deu erro", erro);
    
        } else {
            var conteudo = JSON.parse(dados); // De Texto para objeto Javascript(JSON)
    
            conteudo.nome = nome
            conteudo.sobrenome = sobrenome
            conteudo.idade = idade
    
            fs.writeFile("./usuario.json", JSON.stringify(conteudo), (erro) => { // de JSON para texto
                if(erro){
                    console.log("Um erro aconteceu durante a escrita", erro);
                }
            }) 
    
    
        }
    })
}

modificarUsuario("Veremos","sobrenome aqui né",8000)