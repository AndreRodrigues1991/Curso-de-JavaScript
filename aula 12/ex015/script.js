function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // fullyear pq va pegar 4 digitos da data
    var fano = document.getElementById('txtano') // ou essa
    var res = document.querySelector('div#res') // ou essa
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verefique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) // a idade vai ser o ano atual menos o valor digitado em fano
        res.innerHTML = `Idade Calculada: ${idade}`
    }
}

// A primeira coisa que tenho que fazer é pegar a data atual dpois o ano atual,