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
    return res.send(req.body) /* Usa req.body para quando for POST, e req.query quando for GET */
})

routes.get('/members', function(req,res) {
    return res.send("members")
})

module.exports = routes