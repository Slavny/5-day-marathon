const board = document.querySelector('#board')
const colors = ['rgb(102, 32, 182)', 'rgb(192, 37, 197)', 'rgb(146, 30, 107)', 'rgb(196, 20, 72)', 'rgb(228, 76, 76)']
const SQUARES_NUMBER = 252

for (let i = 0; i <SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#3b3b3b'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}