const modalOverlay = document.querySelector('.modal-overlay') /*document é um elemento da DOM onde contem todos os 
objetos, por exemplo, html, head, body,...*/ 
/*o querySelector irá selecionar o objeto baseado no seletor css que irá estar entre os parenteses, 
então irá selecionar o elemento id, class, ou até mesmo o nome da tag, como body, */
const cards = document.querySelectorAll('.card') /*o querySectorAll irá pegar os elementos de valores iguais*/

for (let card of cards)/*Para cada cartão de cartões*/ {
    card.addEventListener("click", function(){
        const videoID = card.getAttribute("id");/*Irá pegar a tributo id, mas, também pode pegar qualquer atributo da msm div*/
        modalOverlay.classList.add('active') 
        /*ouve uma ação, como por exemplo, algo aparece ou se mexendo, click,...*/
        /*quando escutar o click, adiciona o class active no .modal-overlay*/
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoID}`
    })
}

document.querySelector('.close-modal').addEventListener("click", function (){
    modalOverlay.classList.remove("active")
    /*quando escutar o click, remove o class active no .modal-overlay*/
    modalOverlay.querySelector("iframe").src = "" /*Quando clicar no X, irá fechar o video pq vai estar mandando um vazio*/
})

