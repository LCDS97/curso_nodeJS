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

