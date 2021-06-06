const fs = require('fs');

var conteudo;

fs.readFile("./lucas.json",{encoding: 'utf-8'},(err, data) => {
    if(err) {
        console.error('Ocorreu um erro de leitura do arquivo');
    }
    else {
        conteudo = data;
        console.log(conteudo);
    }
})

json = {
    "novo nome": "nome novo"
}

fs.writeFile("./lucas.json", JSON.stringify(json),(err) => {
    if (err) {
        console.error(err)
    }
})
