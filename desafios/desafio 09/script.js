let rsl = document.getElementById('rsl')
let resultado = document.getElementById('resultado')


rsl.addEventListener('click', reajuste, false)

function reajuste() {
    let funcionario = prompt('Qual o nome do funcionário?')
    let preco = Number(prompt(`Qual o salário do ${funcionario}`))
    let porcentagem = Number(prompt(`O salário do ${funcionario} vai ser reajustado em quantos porcentagem?`))
    let aumento = Number((preco*porcentagem)/100) // para porcentagem temos que por o )/100)
    let total = (Number(preco) + Number(aumento))

    resultado.innerHTML = `
    <h2>${funcionario} recebeu um aumento salarial.</h2>
    <p>O salário atual era R$ ${preco}.</p>
    <p>Com um aumento de ${porcentagem}%, o salário vai aumentar R$ ${aumento} no próximo mês.</p>
    <p>E a partir daí, ${funcionario} vai passar a ganhar R$ ${total}.</p>
    `
}