let contador = 0
let res = document.querySelector('section#Resultado')

function Contar() {
    contador ++
    res.innerHTML = `<p> O contador está com <Mark>${contador}</Mark> cliques. </p>`
}

function Zerar() {
    contador = 0
    res.innerHTML = null
}