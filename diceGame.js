alert('Dice Game!')

let diceRoll = document.querySelector('.dice-rolls')

document.querySelector('#roll-button').onclick = () => {
    
    let total = 0
    let value = Math.floor(Math.random() * 6 ) + 1
    total += value

    diceRoll.innerHTML += total
}
