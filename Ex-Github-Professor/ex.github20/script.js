function EstaçãoDoAno() { // Sim é possivel usar acentuação!
    let mes = prompt('Digite o mês em extenso (ex: Setembro)') 
    let saida = document.querySelector('section.saida')
    let Estação
    switch (mes.toUpperCase()) { // O método toUpperCase() transforma todas as letras de uma string para maiúsculas
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO': // Podemos testar múltiplos casos em uma mesma linha, desse jeito
            Estação = 'INVERNO'
            break // Nunca se esqueça do break
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            Estação = 'PRIMAVERA'
            break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            Estação = 'VERÃO'
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            Estação = 'OUTONO'
            break
        default:
            Estação = 'INDEFINIDA'
            break

        
    }
    saida.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação <mark><strong>${Estação}</strong></mark>.</p>`
    }
    function NumeroDoAno() {
        let Num = Number(prompt('Digite o Numero do mês'))
        let diga = document.getElementById('resposta')
        let Numeral
        switch (Num.toUpperCase()) {
            case '1': case 'FEVEREIRO': case 'MARÇO': // Podemos testar múltiplos casos em uma mesma linha, desse jeito
            Numeral = 'INVERNO'
            break // Nunca se esqueça do break
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            Numeral = 'PRIMAVERA'
            break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            Numeral = 'VERÃO'
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            Numeral = 'OUTONO'
            break
        default:
            Numeral = 'INDEFINIDA'
            break
            
        }
        diga.innerHTML = `<p>No mês de <mark>${Num}</mark>, estamos na estação <mark><strong>${Numeral}</strong></mark>.</p>`
    }
    

    



    
