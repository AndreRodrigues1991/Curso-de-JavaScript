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
    if(l.indexOf(Number(n)) != -1) { // -1 indica que o valor nao foi encontrado na lista se isso for verdade retora verdadeiro ou falso
        return true
    } else {
        return false 
    }
}

function AdicionarNumero() {
    if(isNumero(num.value) && !inlista(num.value, valores)) { // o valor que está dentro de numero vai avaliar pra ver se realmente ele é um número ele só vai adicionar se for verdade os dois 
        
    } else {
        window.alert('Valor inválido ou ja encontrado na lista.') // pra eu fazer a adição do elemento eu preciso fazer duas funções
    }
}

// Antes de tudo pegar os controles básicos