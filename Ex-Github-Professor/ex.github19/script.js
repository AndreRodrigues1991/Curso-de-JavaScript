function CalcularNumero() { 
    let n1 = Number(prompt('Primeiro Valor:'))
    let n2 = Number(prompt('Segundo Valor:'))
    let op = Number(prompt(`Valores informados: ${n1} e ${n2}. \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`)) // o \ serviu pra adicionar os atributos acima pra eu escolher quais opreções usar com os números escolhidos.

    let saida = document.getElementById('saida')
    saida.innerHTML = `<h2>Calculando...</h2>`
    switch (op) { // A estrutura switch basicamente permite você testar valores dentro de uma variável ou expressão. Ela é compatível apenas com números inteiros e strings
        case 1:
            saida.innerHTML += `<p>${n1} + ${n2} = <strong>${n1+n2}</strong></p>`
            break // O break é obrigatório em cada case. Se não for colocado, acontecerá a execução de vários comandos indesejados de outros cases
        case 2:
            saida.innerHTML += `<p>${n1} - ${n2} = <strong>${n1 - n2}</strong></p>`
            break
        case 3:
            saida.innerHTML += `<p>${n1} x ${n2} = <strong>${n1*n2}</strong></p>`
            break
        case 4:
            saida.innerHTML += `<p>${n1} / ${n2} = <strong>${(n1/n2).toLocaleString('pt-BR')}</strong></p>`
            break
        default: // Se o usuário não digitar nenhum dos valores acima, vai cair aqui
            saida.innerHTML += `<p>OPÇÃO INVÁLIDA! você digitou ${n1} e ${n2}, mas não sei o que fazer com eles.</p>`
            break
    }
}