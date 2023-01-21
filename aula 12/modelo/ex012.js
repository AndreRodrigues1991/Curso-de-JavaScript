var idade = 67
    console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('não vota')
} else if (idade < 18 || idade > 65) { // se a idade for menor que 18... || ou se a idade for maior que 65 anos{
     console.log('Voto Opcional')

 } else {
    console.log('voto obrigatório')
 }
 // Se a idade for menor que 16 nao vota se for menor que 18 ou se a idade for maior que 65 o voto é opcional e acima de 18 o voto é obrigatório > maior < menor