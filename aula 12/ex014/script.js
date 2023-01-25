function carregar() {
    var msg = window.document.getElementById('msg')

    var img = window.document.getElementById('imagem')
    var data = new Date() /* pegar a data atual*/
    var hora = data.getHours() /* a hora atual vai ser eu ja tenho a hora atual */

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) { //Se a hoa atual for maior ou igual a 0 que é meia noite e a hora for abaixo de 12 que é meio dia é bom dia 
        // Bom Dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
f
    } else if (hora >= 12 && hora < 18) { //Se não se a hora for maior ou igual a 12 e a hora for menor que 18 é boa tarde
        //Boa Tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'

    } else {
        //Boa Noite
        img.src = 'fotonoite.png'
        document.body.style.background =  '#515154'
    }
}