const express = require('express')
const routes = express.Router()
const instructors = require('./instructors');

routes.get('/', function(req,res) {
    return res.redirect("/instructors")
})

routes.get('/instructors', function(req,res) {
    return res.render("instructors/index") /* Quando declara o nome de um arquivo como (nome)/(nome.terminal) ele já cria uma pasta separada para a página, e para renderizar a pág. precisa colocar o nome da pasta e da pag */
})

routes.get('/instructors/create', function(req,res) {
    return res.render("instructors/create") 
})

routes.post("/instructors", instructors.post)

routes.get('/members', function(req,res) {
    return res.send("members")
})

module.exports = routes