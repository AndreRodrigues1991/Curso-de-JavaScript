let dsc = document.getElementById('dsc')
let resultado = document.getElementById('resultado')
let hidden = document.getElementById('hidden')


dsc.addEventListener('click', desconto, false)

function desconto() {
    let produto = prompt('Qual o produto que você está comprando?')
    let valor = Number(prompt('Qual o valor?'))
    let dez = (valor / 10)
    let final = Number(valor - dez)

    hidden.style.visibility = "hidden"

    resultado.innerHTML = `<h2>Ganhou desconto de 10% para ${produto}</h2>
    <p>O preço original era ${valor}.</p>
    <p>Você acaba de ganhar ${dez} de desconto (-10%).</p>
    <p>No fim você vai pagar ${final} no produto ${produto}</p>
    <p><strong>Aproveite a promoção por tempo limitado</strong></p>
    `
}
