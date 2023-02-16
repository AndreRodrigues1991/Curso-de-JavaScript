let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] // criei um vetor pra analizar os dados

function isNumero(n) { // vai receber um número 1 parâmetro
    if(Number(n) >= 1 && Number(n) <= 100) { // se  o numero de n for maior ou igual a 1 e se o numero de n for menor ou igual a 100 ele só vai aceitar valores entre 0 e 100
        return true
    } else {
        return false
    }
}

function inlista(n, l) { // vai receber um número e uma lista 2 parâmetros
    if(l.indexOf(Number(n)) != -1) { // -1 indica que o valor nao foi encontrado na lista se isso for verdade retora verdadeiro ou falso essa ! exclamação quer dizer não em JS
        return true
    } else {
        return false 
    }
}

function AdicionarNumero() {
    if(isNumero(num.value) && !inlista(num.value, valores)) { // o valor que está dentro de numero vai avaliar pra ver se realmente ele é um número ele só vai adicionar se for verdade os dois
        valores.push(Number(num.value)) 
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item) // adicionando o item na lista
        res.innerHTML = '' // quando eu conseguir adicionar um elemento ele tem que limpar o resultado
        
    } else {
        window.alert('Valor inválido ou ja encontrado na lista.') // pra eu fazer a adição do elemento eu preciso fazer duas funções
    }
    num.value = '' // 
    num.focus() // pra apagar o numero quando eu digitar e escrever o próximo
}

function finalizar() {
    if (valores.length == 0) { // se o vetor estiver vazio
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length // total de elementos
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} Números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor Valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é 
        ${media}.</p>`
    }
}

// Antes de tudo pegar os controles básicos