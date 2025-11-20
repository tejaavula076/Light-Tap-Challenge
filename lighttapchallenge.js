let body = document.querySelector('body');
body.style.overflow = 'hidden'

let score = document.querySelector('.score')
let highScore = document.getElementsByClassName('highScore')
score.innerText = 'Score: 0';


let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');

let diceGlow = [one, two, three, four]

function randomColorClick() {
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    let diceGlowedNowElement = diceGlow[randomNumber - 1]
    diceGlowedNowElement.style.backgroundColor = 'white'
    circle.innerText = 'Watch'
    console.log('clicked')

}

let circle = document.querySelector('.circle');
circle.innerText = 'Play'
circle.addEventListener('click', () => {
    randomColorClick()
}
)



