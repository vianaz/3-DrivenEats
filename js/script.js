// Array vazia para guardar pedidos
let pedido = [];
let textoMensagem;

// Função Para Escolher o PRATO
function selectPrato (prato) {
    if (typeof pedido[0] === "undefined") {
        pedido[0] = prato;
        prato.classList.add("mudar-borda");
    } else {
        pedido[0].classList.remove("mudar-borda");
        pedido[0] = prato;
        prato.classList.add("mudar-borda");
    }
    liberarbotao()
}

// Função para escolher a BEBIDA
function selectBebida (bebida) {
    if (typeof pedido[1] === "undefined") {
        pedido[1] = bebida;
        bebida.classList.add("mudar-borda");
    } else {
        pedido[1].classList.remove("mudar-borda");
        pedido[1] = bebida;
        bebida.classList.add("mudar-borda");
    }
    liberarbotao()
}

// Função para escolher a SOBREMESA
function selectSobremesa (sobremesa) {
    if (typeof pedido[2] === "undefined") {
        pedido[2] = sobremesa;
        sobremesa.classList.add("mudar-borda");
    } else {
        pedido[2].classList.remove("mudar-borda");
        pedido[2] = sobremesa;
        sobremesa.classList.add("mudar-borda");
    }
    liberarbotao()
}

// Função para LIBERAR BOTAO PEDIR COMIDA
function liberarbotao() {
    if (typeof pedido[0] != "undefined" && typeof pedido[1] != "undefined" && typeof pedido[2] != "undefined") {
        pegarDados();
        let botaoliberado = document.querySelector('.footer-botao');
        botaoliberado.style.backgroundColor = '#32B72F';
        botaoliberado.innerHTML = '<p class="roboto">Fechar Pedido</p>';
    }
} 
//Mostra a TELA CONFIRMAÇÃO
function telaConfirmacao() {
    // Transorma tela confirmação em flex
    document.querySelector('.body-confirmar_pedido').style.display = 'flex';

    // Adiciona o nome e valor prato
    document.querySelectorAll('.valor')[0].children[0].innerHTML = `${nomePrato}`;
    document.querySelectorAll('.valor')[0].children[1].innerHTML = `R$ ${valorPrato}`;

    // Adiciona o nome e valor bebida
    document.querySelectorAll('.valor')[1].children[0].innerHTML = `${nomeBebida}`;
    document.querySelectorAll('.valor')[1].children[1].innerHTML = `R$ ${valorBebida}`;

    // Adiciona o nome e valor sobremesa
    document.querySelectorAll('.valor')[2].children[0].innerHTML = `${nomeSobremesa}`;
    document.querySelectorAll('.valor')[2].children[1].innerHTML = `R$ ${valorSobremesa}`;

    // Adiciona o nome e valor TOTAL
    document.querySelectorAll('.valor')[3].children[1].innerHTML = `R$ ${valorTotal}`;
}

// Apaga tela confirmação 
function apagarTelaConfirmacao(params) {
    document.querySelector('.body-confirmar_pedido').style.display = 'none';
}

// PEGA DADOS DO PEDIDO
function pegarDados() {
    // Nomes
    nomePrato = pedido[0].getElementsByTagName("h3")[0].textContent;
    nomeBebida = pedido[1].getElementsByTagName("h3")[0].textContent;
    nomeSobremesa = pedido[2].getElementsByTagName("h3")[0].textContent;

    // Valores
    valorPrato = pedido[0].getElementsByTagName("span")[0].textContent.replace(',', '.');
    valorBebida = pedido[1].getElementsByTagName("span")[0].textContent.replace(',', '.');
    valorSobremesa = pedido[2].getElementsByTagName("span")[0].textContent.replace(',', '.');
    valorTotal = (parseFloat(valorBebida) + parseFloat(valorPrato) + parseFloat(valorSobremesa)).toFixed(2);
}

// Link pro Hiroshima e Nagazapi
function wppMensagem() {
    // Pegar nome e endereço, monta mensagem
    nome = prompt('Qual seu nome?');
    endereco = prompt('Qual seu endereço?');
    textoMensagem = `Olá, gostaria de fazer o pedido:\n-Prato: ${nomePrato}\n-Bebida: ${nomeBebida}\n-Sobremesa:  ${nomeSobremesa}\nTotal: R$ ${valorTotal}\n\nNome: ${nome}\nEndereço: ${endereco}`;
    // Abre WPP
    window.open(`https://wa.me/5598999073330?text=${encodeURIComponent(textoMensagem)}`);
}