function parimpar(n) { // ele vai receber um número como parâmetro
    if (n%2 == 0) { // Se o n dividido por 2 for igual a 0 
        return 'Par'
    } else {
        return 'Ímpar!'
    }
}
/*
let res = parimpar(4)
console.log(res) // ou eu posso fazer direto */ 

console.log(parimpar(4)) // forma mais simplificada