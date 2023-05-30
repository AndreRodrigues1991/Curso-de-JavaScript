let btn = document.getElementById('btn')
let res = document.getElementById('res')

//evento
btn.addEventListener('click', converter, false)

//função
function converter() {
    let temp = Number(prompt('Digite uma temperatura em C (Celcius):'))
    
    let k = temp + 273 // Não funciona com Decimal
    let f = temp + 33
    
    res. innerHTML = `<h2>A temperatura ${temp}C, corresponde a ...</h2>
    <p>${k}k (Kelvin).</p>
    <p>${f}f (Fahrenheit).</p>`

}