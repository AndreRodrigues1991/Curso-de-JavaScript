let cotacao = Number(prompt('Antes de mais nada. Quanto está a cotação do dólar no momento.')) 
let btn = document.getElementById('btn')
let resultado = document.getElementById('resultado')

btn.addEventListener('click', berco, false) // aqui estou fazendo um evento mas eu tbm posso usar o onclick() para subtituir, vou usar o onclick()...

function berco() {
    let valor = Number(prompt('Quantos R$ Você tem na carteira?'))

    let atual = valor / cotacao

    resultado.innerHTML = `Você tem R$${valor} que connvertido em dolar dará US$${atual}.`
}