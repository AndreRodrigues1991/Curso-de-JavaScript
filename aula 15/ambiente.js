let num = [5, 8, 2, 9, 3 ]

num.sort() // [2, 3, 5, 8, 9]

num.push[1] // [2, 3, 5, 8, 9, 1]

console.log(num) // [5, 8, 2, 9, 3]

console.log(`O vetor tem ${num.length} posições`) // O vetor tem 5 posições 

console.log(`O primeiro valor do vetor é ${num[0]}`) // O primeiro valor do vetor é 5



// num[3] = 6  eu to dizendo assim pro javascript coloque o valor 6 na posição 3 automaticamente ele cria outra posição se eu quiser colocar na ultia posição euvou usar o 
// num.push(7)  é um método interno que vai acrescentar um valor no array 

// num.length é um atributo é um complemento do meu vetor ele diz quantas casas quantas posições tem...

// num.sort()  ele coloca na ordem crescente os elementos ex: [5, 8, 2, 9, 3] vai ser [2, 3, 5, 8, 9]

// for(let pos=0; pos<num.length; pos++) vai se inicializar no 0 no inicio enquanto ele nao chegar no final do meu vetor eu vou fazer pos++ pra ele adicionar 1 toda vez que fizer um looping

// toda função precisa ter uma chamada

// toda função pode ter os seguintes fatores uma chamada um conjunto de parâmetros uma ação e um retorno nem toda função tem parãmentros nem toda função tem retornos

// ** funçoes são ações executadas assim que são chamadas ou em decorrência de algum evento.