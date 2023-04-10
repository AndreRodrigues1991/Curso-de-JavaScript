function maiornumero() {
    let n1 = Number(window.prompt('Digite um número!'))

    let n2 = Number(window.prompt('Digite outro número!'))

    let res = document.querySelector('section#saida')
    if (n1 > n2) {
        res.innerHTML = `<p>Analizando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, O maior valor é <strong>${n1}</strong></p>`
    } else if (n1 < n2) {
        res.innerHTML = `<p>Analizando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, O maior valor é o <strong>${n2}</strong></p>`
    } else {
        res.innerHTML = `<p>Analizando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, ambos são <strong>IGUAIS</strong></p>  `
    }
}