function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // fullyear pq va pegar 4 digitos da data
    var fano = document.getElementById('txtano') // ou essa
    var res = document.querySelector('div#res') // ou essa
    if (fano.value.length == 0 || (fano.value) > ano) {// se ele tiver vazio ou o ano atual
        window.alert('[ERRO] Verefique os dados e tente novamente!')
    } else {
       window.alert('Tudo ok')
    }
}

// A primeira coisa que tenho que fazer é pegar a data atual dpois o ano atual,