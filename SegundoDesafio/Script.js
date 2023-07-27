const imparPar = () =>{
    const playerDecision = parseInt(prompt('Você quer 1 = impar ou 2 = par'))
    if(playerDecision != 1 && playerDecision != 2) {
        alert('Escolha um número válido')
        return imparPar()
    }
    const playerNumber = parseInt(prompt('Qual número você quer?(de 1 a 10)'))
    if(playerNumber === isNaN && playerNumber > 10) {
        alert('Escolha um número válido')
        return imparPar()
    }
    const cpuNumber = parseInt(Math.random()*10) 
    if(playerDecision === 2 && playerNumber % 2 === 0 || playerDecision === 1 && playerNumber % 2 != 0) {
        alert(`Você escolheu ${playerDecision}; Seu número foi ${playerNumber}; número do computador ${cpuNumber}; Você venceu!!`)
    }else{
        alert(`Você escolheu ${playerDecision}; seu número foi ${playerNumber}; número do computador ${cpuNumber}; Você perdeu!!`)
    }
}

imparPar()

