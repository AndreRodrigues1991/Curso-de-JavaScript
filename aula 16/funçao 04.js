function fatorial(n) { // função fatorial vai receber um número
    let fat = 1
    for(let c = n; c > 1; c--) { // enquanto o c de contador for maior do que 1 o contador perde 1 
        fat *= c // fat vezes o c
    } 
    return fat
}

console.log(fatorial(5)) // me mostre na tela o fatorial de 5 é 120 


// 5! fatorial  5 x 4 x 3 x 2 x 1 
// 5 x 4 = 20 x 3 = 60 x 2 = 120 x 1 = 120