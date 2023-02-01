function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // fullyear pq va pegar 4 digitos da data
    var fano = document.getElementById('txtano') // ou essa
    var res = document.querySelector('div#res') // ou essa
    if (fano.value.length == 0 || (fano.value) > ano) {// se ele tiver vazio ou o ano atual
        window.alert('[ERRO] Verefique os dados e tente novamente!')
    } else {
       //agora que eu tenho os dados e eu sei que os dados estão preenchidos...
       var fsex = document.getElementsByName('radsex') //formulariosexo
       var idade = ano - Number(fano.value) //calculei a idade que é o valor do ano atual - o valor digitado em fano
       var genero = ''
       var img = document.createElement('img') // agora eu crieu um img
       img.setAttribute('id', 'foto') //com id foto
       if (fsex[0].checked) { // se o que tiver marcado checado for o fsex 0 sinal que ele é masculino
            genero = 'Homem'
            if (idade >=0 && idade < 10){ //Se a iadade for maior ou igual a 0 e se a iadade for menor do que 10 vai ser 
                    // Criança
                    img.setAttribute('src', 'criancahomem.png')
            } else if (idade >=10 && idade < 21) {
                    //Jovem
                    img.setAttribute('src', 'jovemhomem.png')
            } else if (idade >= 21 && idade < 50) {
                    //Adulto
                    img.setAttribute('src', 'homem.png')
            } else {
                    //idoso
                    img.setAttribute('src', 'velho.png')
            }

       }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){ //Se a iadade for maior ou igual a 0 e se a iadade for menor do que 10 vai ser 
                // Criança
                img.setAttribute('src', 'criancamulher.png')
        } else if (idade >=10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemmulher.png')
        } else if (idade >= 21 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher.png')
        } else {
                //idoso
                img.setAttribute('src', 'velha.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img) // eu vou adicionar um elemento img
    }
}

// A primeira coisa que tenho que fazer é pegar a data atual dpois o ano atual,

// para adicionaar fotos eu posso criar u  img no html ou posso criar dianamnicamente no js

// <img id='foto'> em HTML   img.setAttribute('id', 'foto') em JV
