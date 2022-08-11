
function opcaoSelecionada(opcao) {

    let todasOpcoes = document.querySelectorAll('.menu-lateral__link')
 
    for(let i=0; i<todasOpcoes.length; i++){
        todasOpcoes[i].classList.remove("menu-lateral__link--ativo");
    }
    opcao.classList.toggle("menu-lateral__link--ativo");


}

function ativarMenu(){

    document.querySelector('.menu-lateral').classList.toggle("menu-lateral--ativo");

}

