const express = require('express')
const routes = express.Router()

routes.get('/', function(req,res) {
    return res.redirect("/instructors")
})

routes.get('/instructors', function(req,res) {
    return res.render("instructors/index") /* Quando declara o nome de um arquivo como (nome)/(nome.terminal) ele já cria uma pasta separada para a página, e para renderizar a pág. precisa colocar o nome da pasta e da pag */
})

routes.get('/instructors/create', function(req,res) {
    return res.render("instructors/create") 
})

routes.post("/instructors", function(req,res) {
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

 
    return res.send(req.body) /* Usa req.body para quando for POST, e req.query quando for GET */
})

routes.get('/members', function(req,res) {
    return res.send("members")
})

module.exports = routes