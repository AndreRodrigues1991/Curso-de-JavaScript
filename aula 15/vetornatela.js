let valores = [8, 1, 7, 4, 2, 9]

console.log(valores) // [8, 1, 7, 4, 2, 9]
/*
console.log(valores[0]) // 8
console.log(valores[1]) // 1
console.log(valores[2]) // 7
console.log(valores[3]) // 4
console.log(valores[4]) // 2
console.log(valores[5]) // 9 
*/

for(let pos=0; pos < valores.length; pos++) { //enquanto pos for menor do que o tamanho do vetor o pos vai receber pos +1 
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) // A posição 0 tem o valor 8
                     // A posição 1 tem o valor 1
                     // A posição 2 tem o valor 7
                     // A posição 3 tem o valor 4
                     // A posição 4 tem o valor 2
                     // A posição 5 tem o valor 9



}

for(let pos in valores) { //  jeito mais simples
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)    
}

// jeito mais simples
/*for(let pos in num) { para cada posição dentro de num 
    console.log(num[pos])
}*/

// for in para dentro ou para em 

// num.indexOf(7)  ele vai procurar onde está o valor 7