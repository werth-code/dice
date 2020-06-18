document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#roll-button').onclick = () => {

        let diceRoll = document.querySelector('#dice-rolls-ul')
        let storedValues = []
        
        let value = Math.floor(Math.random() * 6) + 1
        storedValues.push(value)

        for (let i of storedValues) {

            let listItem = document.createElement('li')
            listItem.innerHTML += (`You Rolled a ${i} <img src=\"dice-${i}.png\"></li>`)
            diceRoll.appendChild(listItem)
        }
    }
})


