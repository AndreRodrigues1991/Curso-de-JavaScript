var agora = new Date()
var diaSem = agora.getDay() /*Pra buscar o dia da semana*/
/* 0 - Domingo
   1 - Segunda
   2 - Terça
   3 - Quarta
   4 - Quinta
   5 - Sexta
   6 - Sabado   Pro JS o Primeiro dia da semana é segunda */

console.log(diaSem)

switch(diaSem) { /* */
    case 0:
        console.log('Domingo')
        break /*pra jogar pra fora */
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break

    default: /* Se não for de 0 a 6 opcional  */
        console.log('[ERRO] Dia Inválido!')

        
}

/* tudo isso é pra pegar o dia da semana atual no momento */

/* o break é mega obrigatório no switch e o switch só funciona com nuneros inteiros e caractéres com strings é menos limitado que o if mas e bem melhor em situações pontuais...*/