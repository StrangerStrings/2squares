const squaresPerColor = 5
const slowness = 2.5
const colors = [
    'red',
    // 'green',
    // 'yellow',
    'blue',
]

const createElements = (color) => {
    const container = document.querySelector(".container")
    for (let i = 0; i < squaresPerColor; i++) {
        var elem = document.createElement('div')
        elem.classList.add('square')
        elem.classList.add(color)

        elem.style.opacity = 1 - Math.ceil((i / squaresPerColor) *100) / 100
        elem.style.transitionDuration = 
            slowness * Math.ceil(((i + 1) / squaresPerColor) *100) / 100 + 's'

        container.appendChild(elem);
    }
}

colors.forEach(color => {
    createElements(color)
});

const moveSquare = (color) => {
    const squares = document.querySelectorAll('.'+color)

    const x = Math.floor(Math.random() * 200) - 120
    const y = Math.floor(Math.random() * 200) - 120
    const degrees = Math.floor(Math.random() * 90) - 45

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.transform = `rotate(${degrees}deg) translate(${x}%, ${y}%)`
    }
}

document.addEventListener('click', (event) => {
    colors.forEach(color => {
        moveSquare(color)
    });
})
