// ANCHOR promisify
// SECTION Promisify - Conceito
const fs = require('fs');
const util = require("util");

// NOTE O promisify transforma uma callback é uma promessa
// NOTE Ex: var novaFuncaoComPromise = util.promisify(funcaoVelhaComCallback)


class Reader {

    constructor(){
        this.reader = util.promisify(fs.readFile);
    }

async Read(filepath){
// NOTE Antigo jeito de do readFile mas não retornando dados
        /* fs.readFile(filepath,"utf8",(err, data) => {
            if(err){
                console.log(err);
            }
            else {
                return data;
            }
        }) */

// NOTE Jeito correto de utilizar o Promisify
        try {
            return await this.reader(filepath,"utf8");
        } catch (error) {
            return undefined;
        }
    }
}

module.exports = Reader;