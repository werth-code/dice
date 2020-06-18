let diceRoll = document.querySelector('#dice-rolls-ui')
let listItem = document.createElement('li')

document.querySelector('#roll-button').onclick = () => {
    
    let diceArray = []
    let total = 0
    let value = Math.floor(Math.random() * 6 ) + 1
    total += value
    diceArray.push(value)

    listItem.innerHTML = ('You Rolled ' + value)
     diceRoll.appendChild(listItem)
    
}
