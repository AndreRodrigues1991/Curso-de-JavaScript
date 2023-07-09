function teste() {
    /*let min = 1
    let max = 10
    let aleatorio = math.random()*/
    let num = Number(prompt('digite um número:'))
    let tipo
    if (num % 2 == 0) {
        tipo = '<strong>PAR</strong>'
    } else {
        tipo = 'Ímpar'
    }
    let resultado = document.querySelector('section#resultado')
    resultado.innerHTML = `<p>O número ${num} que foi digitado é ${tipo}!</p>`
}