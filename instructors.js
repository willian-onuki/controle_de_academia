const fs = require('fs') /*fs = file system, trabalha com arquivo do sistema*/
const data = require('./data.json')

// Create
exports.post = function(req, res) {
    //Irá exportar a function instructors 

    /* irá pegar os dados do formulário */
    /* precisa configurar o express */

    //req.body: {"avatar_url":"https://google.com","Name":"willian","birth":"20000-12-18","gender":"M","services":"musculação, crossfit"}
    
    //keys: ["avatar_url","Name","birth","gender","services"]
    // A keys criou um array com as chaves do objeto, não contendo os valores
    const keys = Object.keys(req.body)
    // Object é um constructors, uma função que irá criar um objeto

    for (key of keys) {
        // valida os campos
        if (req.body[key] == "")
            return res.send("Please, fill all fields!")
    }

    req.body.birth = Date.parse(req.body.birth) /* Transforma string para data em milissegundos */
    req.body.created_at = Date.now() /* Cria a data de hoje em milissegundos*/

    data.instructors.push(req.body) /* a function push vai adicionar o req.body no array data.json */

    /*CALLBACK FUNCTiON*/ 
    fs.writeFile("data.json"/*Já vai na raiz salvar esse arquivo*/, /*objeto notação JSON*/JSON.stringify(data, null, 4/* Tipo de espaçamento para a identação no data.json */), function(err){
        /* callback function faz não bloquear o aplicativo, pode acontecer de bugar e demorar pra escrever o arquivo, e consequentemente cair o sistema */
        if (err) return res.send("Write file error!")

        return res.redirect('/instructors')
    })

    // return res.send(req.body) /* Usa req.body para quando for POST, e req.query quando for GET */
} 