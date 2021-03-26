/*O npm, um gerenciador de pacote, bunsca na nuvem ou em outros repositorio um programa, dependência ou pacote que outros já fizeram para do nosso programa*/
/*O arquivo .json é uma notação de objeto js*/

const express = require('express') /*Importa uma dependencia. O require chama o express para dentro da variavel express*/
const nunjucks = require('nunjucks')
const routes = require('./routes')


const server = express() /*O server criado ira executar o express, como o require trouxe o express para a variavel express, tornou-se uma funcao. Agr podemos chamar essa funcao para dentro do servidor*/
/* ---CONFIGURANDO O BACK END--- */
server.use(express.urlencoded({ extended: true })) /* Faz funcionar o req.body */
/*---CONFIGURANDO O ESTILO--- */
server.use(express.static('public')) /*Irá observar a pasta PUBLIC para servir os arquivos estáticos, */
server.use(routes)
/*--CONFIGURANDO TEMPLATE ENGINE-- */
server.set("view engine", "njk") /*irá usar tudo o que for HTML(era antes do NJK, mas agora irá ler todos os arquivos NJK) */

nunjucks.configure("views"/*PASTA*/, {
/*OBJETO*/
    express: server,
    autoescape: false /* Como o nunjuck segura códigos html, faz com que apareça as tags html na página, e no ABOUT estava aparecendo o texto com a tag <A>, mas com o autoscape, permite imprimir sem as tags html */
})



server.listen(5000, function() {
    /*O servidor ira "escutar" a porta 5000*/
    /*A funcao sera executada assim que funcionar o listen*/
    /*Para saber se esta funcionando o servidor é so digitar no console "npm start"*/
    console.log("Server is running")
})

/*para instalar o nodemon -> npm install -D nodemon. Ele ira atualizar o server sempre quando salvamos alguma alteração, mas precisamo ir no package.json e alterar o "start": "node server.js" 
para "start": "nodemon server.js"*/