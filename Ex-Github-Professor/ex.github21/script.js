function ContarNumero() {
    let saida = document.getElementById('saida')

    saida.innerHTML += `<h2>Contando de 1 até 10</h2>`

    let cont = 1
    while (cont <= 10) { // O loop while é mais uma estrutura de repetição em Javascript e contém uma expressão booleana com uma condição que retornará verdadeiro ou falso. Ele executa o bloco de código, desde que a expressão condicional especificada seja devolvida.
        saida.innerHTML += `${cont} &#x1F449;`
        cont ++ // Corresponde a cont = cont + 1
    }
    saida.innerHTML += `&#x1F3C1`
}