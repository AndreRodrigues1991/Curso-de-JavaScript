function GerarNumero() {
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random() // Essa função gera um valor Real aleatório entre 0 e 1
    let num = min + Math.trunc(dif * aleatorio) // a função Math.trunc () corta o ponto e os dígitos à direita dele.

    let res = document.querySelector('section#saida')
    res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark></p>`
}

function LimparNumero() {
    let res = document.querySelector('section#saida')
    res.innerHTML = null // Vai esvaziar a lixeira toda
}