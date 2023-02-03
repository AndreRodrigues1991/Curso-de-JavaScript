function ContarNumeros() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){ // Se o inicio tiver vazio ou o fim ou o passo
        res.innerHTML = 'Impossível Contar!'
        //window.alert('[ERRO] Faltam Dados!')
    } else {
        res.innerHTML = 'Contando: <br> '
        let i = Number(ini.value)  
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1')
        }
        if (i < f) {
            // Contagem Crescente
            for(let c = 1; c <= f; c += p) {
                res.innerHTML += `${c} \u{1f449}`
        
        }
        res.innerHTML += `\u{1f3c1}` // código unicode emoji só funciona entre crazes
        } else {
            // Contagem Regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}

// (ini.value.length) é igual a quantas letras tem dentro length comprimento

// Number(ini.value) == Conversão de numero eu vou pegar o valor que está dentro da caixa ini no exercicio e vou tranformar em numero ...

// for(let c = 1; c <= f; c += p) == O Contador vai começar no inicio e enquanto o contador  for menor ou igual ao fim o contado vai receber ele mesmo mais o passo