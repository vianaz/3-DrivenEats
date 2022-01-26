// Função para liberar o botão
function liberarbotao() {
    let botaoliberado = document.querySelector('.footer-botao');
    botaoliberado.style.backgroundColor = '#32B72F';
    botaoliberado.innerHTML = '<p class="roboto">Fechar Pedido</p>'
} 

// Função Para Escolher o PRATO
function selectPrato (prato) {
    let tirar = document.getElementsByClassName('main-conteiner_comida');
    // Para deselecionar todos os outros pratos
    for (let i = 0; i < 5; i++) {
        tirar[i].style.boxShadow = 'none';
    }
    prato.style.boxShadow = '0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F';
    contador1 = 1
    if (contador1 == contador2 == contador3) {
        liberarbotao()
    }
}

// Função para escolher a Bebida
function selectBebida (bebida) {
    let tirar = document.getElementsByClassName('main-conteiner_comida');
    // Para deselecionar todas outras bebidas
    for (let i = 4; i < 9; i++) {
        tirar[i].style.boxShadow = 'none';
    }
    bebida.style.boxShadow = '0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F';
    contador2 = 1
    if (contador1 == contador2 == contador3) {
        liberarbotao()
    }
}

// Função para escolher a Sobremesa
function selectSobremesa (sobremesa) {
    let tirar = document.getElementsByClassName('main-conteiner_comida');
    // Para deselecionar todas outras sobremesas
    for (let i = 8; i < 12; i++) {
        tirar[i].style.boxShadow = 'none';
    }
    sobremesa.style.boxShadow = '0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F';
    console.log(tirar)
    contador3 = 1
    if (contador1 == contador2 == contador3) {
        liberarbotao()
    }
}
