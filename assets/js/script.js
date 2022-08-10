
let todasOpcoes = document.querySelectorAll('.menu-lateral__link')

function opcaoSelecionada(opcao) {

    for(let i=0; i<todasOpcoes.length; i++){
        todasOpcoes[i].classList.remove("menu-lateral__link--ativo");
    }
    opcao.classList.add("menu-lateral__link--ativo");

}

