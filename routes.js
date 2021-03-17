const express = require('express')
const routes = express.Router()

routes.get('/', function(req,res) {
    return res.redirect("/instructors")
})

routes.get('/instructors', function(req,res) {
    return res.render("instructors/index") /* Quando declara o nome de um arquivo como (nome)/(nome.terminal) ele já cria uma pasta separada para a página, e para renderizar a pág. precisa colocar o nome da pasta e da pag */
})

routes.get('/members', function(req,res) {
    return res.send("member")
})

module.exports = routes