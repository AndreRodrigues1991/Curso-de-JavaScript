var agora = new Date() //Agora recebe nova data ou nova hora continuação
var hora = agora.getHours() //vai pegar pela hora do sistema que está rodando
console.log(`Agora são exatamente ${hora} horas.`) // ${} placehoder
if (hora < 12) { // Se a hora for abaixo de meio dia 
    console.log('Bom Dia')
} else if(hora <= 18) { // Se não Se a hora for menor ou igual a 18 
    console.log('Boa Tarde')
} else { // Se não
    console.log('Boa Noite!')
}
//Como fazer pra pegar a hora Atual no momento continuação

// Condição Múltipla
switch (expressão) {}