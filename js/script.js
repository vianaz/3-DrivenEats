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

// Função para escolher a Bebida
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

// Função para escolher a Sobremesa
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

// Função para liberar o botão
function liberarbotao() {
    if (typeof pedido[0] != "undefined" && typeof pedido[1] != "undefined" && typeof pedido[2] != "undefined") {
        pegarDados();
        let botaoliberado = document.querySelector('.footer-botao');
        botaoliberado.style.backgroundColor = '#32B72F';
        botaoliberado.innerHTML = '<p class="roboto">Fechar Pedido</p>';
        
    }
} 

// Pega os dados do pedido
function pegarDados() {
    // Nomes
    nomePrato = pedido[0].getElementsByTagName("h3")[0].textContent;
    nomeBebida = pedido[1].getElementsByTagName("h3")[0].textContent;
    nomeSobremesa = pedido[2].getElementsByTagName("h3")[0].textContent;

    // Valores
    valorPrato = pedido[0].getElementsByTagName("span")[0].textContent.replace(',', '.');
    valorBebida = pedido[1].getElementsByTagName("span")[0].textContent.replace(',', '.');
    valorSobremesa = pedido[2].getElementsByTagName("span")[0].textContent.replace(',', '.');
    valorTotal = parseFloat(valorBebida) + parseFloat(valorPrato) + parseFloat(valorSobremesa);
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