let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;  
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female' , {rate: 1.2})
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1' , 'Jogo do número secreto');
    exibirTextoNaTela('p' , 'Escolha um número entre 1 e 10:');
}

exibirMensagemInicial()

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function verificarChute() {
 
    let chute = document.querySelector('input').value
    if(chute == numeroSecreto) {
        
        let palavraTentativas = tentativas == 1 ? 'tentativa' : 'tentativas';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;

        exibirTextoNaTela('h1' , 'Parabéns');
        
        exibirTextoNaTela('p' , mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if(numeroSecreto > chute) {
            exibirTextoNaTela('p' , `O número secreto é maior que ${chute}`)
        } else {
            exibirTextoNaTela('p' , `O número secreto é menor que ${chute}`)
        }
    }
    tentativas++;
    limparCampo();
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled',true);
    limparCampo();
    exibirMensagemInicial();

}

