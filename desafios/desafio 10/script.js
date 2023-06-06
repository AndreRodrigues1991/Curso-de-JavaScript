let bhk = document.getElementById('bhk')
let resultado = document.getElementById('resultado')

bhk.addEventListener('click', calculo, false)

function calculo() {
    let a = Number(prompt('Qual o valor de a?'))
    let b = Number(prompt('Qual o valor de b?'))
    let c = Number(prompt('Qual o valor de c?'))
    let total = Number(b*b) - 4* Number(a) * Number(c)

    resultado.innerHTML = `
    <h2>Fórmula de Bhaskara</h2>
    <p>A equação atual é ${a}x² + ${b}x + ${c} = 0</p>
    <p>O cálculo realizado será △ = ${b*b} - 4 . ${a} . ${c}</p>
    <p>O valor calculado para delta foi △ = ${total}</p>
    
    `
}