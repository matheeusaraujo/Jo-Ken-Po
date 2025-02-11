const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
    
}

const playTheGame = (human, machine) => {

    console.log('humano: ' + human + 'maquina:' + machine)

    if(human === machine){
        result.innerHTML = 'DEU EMPATE'
        result.style.color = 'black'
    }
    else if ( 
        (human === 'paper' && machine === 'rock')|| 
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber  
        result.innerHTML = 'VOCÊ GANHOU!'
        result.style.color = 'rgb(63, 207, 63)'
    }
    else {
         machineScoreNumber++
         machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'VOCÊ PERDEU!'
        result.style.color = 'red'
    }

}