const fs = require('fs') /*fs = file system, trabalha com arquivo do sistema*/
const { url } = require('inspector')
const data = require('./data.json')

// ===SHOW===
// Pega os dados do data.json e manda para o front
exports.show = function (req,res) {
    //req.query-> pega id como essa opção : /instructors?id=1.
    //req.params -> manda direto pra url : /instructors/1
    const { id } = req.params

    const foundInstructor = data.instructors.find(function (instructor) {
        return instructor.id == id
    })

    if (!foundInstructor) return res.send("Instructor not found!")

    return res.render("instructors/show", {instructor : foundInstructor} /* Manda os dados do instrutor */)
}


// ===CREATE===
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

    /* Deixando os dados mais organizados */
    let {avatar_url, birth, name, services, gender} = req.body /* desestruturação para pode passar somente os dados necessários */

    birth = Date.parse(birth) /* Transforma string para data em milissegundos */
    const created_at = Date.now() /* Cria a data de hoje em milissegundos*/
    const id = Number(data.instructors.length/* Pega o tamanho do array */ + 1)

    data.instructors.push({
        id,
        avatar_url, 
        name,
        birth,  
        gender,
        services, 
        created_at       
    }) /* a function push vai adicionar o req.body no array data.json */

    /*CALLBACK FUNCTiON*/ 
    fs.writeFile("data.json"/*Já vai na raiz salvar esse arquivo*/, /*objeto notação JSON*/JSON.stringify(data, null, 4/* Tipo de espaçamento para a identação no data.json */), function(err){
        /* callback function faz não bloquear o aplicativo, pode acontecer de bugar e demorar pra escrever o arquivo, e consequentemente cair o sistema */
        if (err) return res.send("Write file error!")

        return res.render('/instructors')
    })

    // return res.send(req.body) /* Usa req.body para quando for POST, e req.query quando for GET */
} 