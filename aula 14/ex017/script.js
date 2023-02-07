function tabuada() {
    let num = document.getElementById('txtn') // 1
    let tab = document.getElementById('seltab') // 2
    if (num.value.length == 0) { // se o numero tiver vazio
        window.alert('Por favor, digite um número!')
    } else { // se não ele pega um numero
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' // pra limpar a tabuada
        while (c <= 10) { // enquanto o contador for menor ou igual a 10
            let item = document.createElement('option') //estou criando um elemento optinon no js pra adcionar conteudo na minha tabuada
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++ // tenho que incrementar o valor de c pra ele somar 

        }
    }

}

// 1 primeira coisa que tenho que fazer é pegar o numero.. dpois pegar a area de tabuada 2... dpois pegao o numero e converter 3... 

// item.text = `${num} x ${c} = ${num*c}` - template string - item . text que é a parte de dentro do option recebe 1 numero vezes outro numero é igual ao resultado da multiplicaçao.. num vezes c ele nao ta aparecendo pra fazer ele aparcer eu vou ter que botar tab.appendChild(item) - adicionar um elemento filho que vai ser um item