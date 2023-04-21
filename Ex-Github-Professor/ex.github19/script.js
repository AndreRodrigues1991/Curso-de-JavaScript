function CalcularNumero() { 
    let n1 = Number(promt('Primeiro Valor:'))
    let n2 = Number(prompt('Segundo Valor:'))
    let op = Number(prompt(`Valores informados: ${n1} e ${n2}`)) //\nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))

    let saida = document.getElementById('saida')
    saida.innerHTML = `<h2> Calculando... </h2>`
    switch (op) { // A estrutura switch basicamente permite você testar valores dentro de uma variável ou expressão. Ela é compatível apenas com números inteiros e strings
        case 1:
            saida.innerHTML += `<p> ${n1} + ${n2} = <strong>${n1+n2}</strong></p>`
            break // O break é obrigatório em cada case. Se não for colocado, acontecerá a execução de vários comandos indesejados de outros cases
        case 2:

    }
}