
function opcaoSelecionada(opcao) {

    let todasOpcoes = document.querySelectorAll('.menu-lateral__link')

    for (let i = 0; i < todasOpcoes.length; i++) {
        todasOpcoes[i].classList.remove("menu-lateral__link--ativo");
    }
    opcao.classList.toggle("menu-lateral__link--ativo");
}

function ativarMenu() {

   document.querySelector('.menu-lateral').classList.toggle("menu-lateral--ativo");
   
}


let inicio = document.querySelector(".inicio");
let picos = document.querySelector(".picos");


function abaPicos() {
    inicio.style.display = "none"
    picos.style.display = "block"
    ativarMenu()

}

function abaInicio() {
    inicio.style.display = "block"
    picos.style.display = "none"
    ativarMenu()

}
