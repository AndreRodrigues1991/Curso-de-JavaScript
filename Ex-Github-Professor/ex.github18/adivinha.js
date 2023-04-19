// Todas as variáveis declaradas aqui em cima - fora das funções - são consideradas GLOBAIS e funcionam dentro de qualquer outra função!

let res = document.querySelector('section#resultado')
let computador = 0
let jogador = 0

function SortearNumero() {
    let min = 1 // As variáveis declaradas aqui dentro são LOCAIS, e só funcionam dentro da função onde foram declaradas
    let max = 100
    let dif = max - min
    let aleatorio = Math.random() // // Essa função gera um valor Real aleatório entre 0 e 1
    computador = min + Math.trunc(dif * aleatorio) // a função Math.trunc () corta o ponto e os dígitos à direita dele.
}

function Jogar() {
    jogador = Number(window.prompt('Qual é o seu palpite?'))
    if (jogador < computador) {
        res.innerHTML += `<p> Você falou ${jogador}. Meu número é <strong>MAIOR</strong></p>`
    } else if (jogador > computador) {
        res.innerHTML += `<p> Você falou ${jogador}. Meu número é <strong>MENOR</strong></p>`
    } else if (jogador == computador) {
        res.innerHTML += `<p> <strong>PARABÉNS</strong> Você acertou! Eu tinha sorteado o valor ${computador}!</p>`
        document.getElementById('botao').style.visibility = 'hidden' // significa que display:none, diferentemente, a tag não está visível, mas o espaço é alocado na página.
    }
}