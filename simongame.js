let body = document.querySelector('body');
body.style.overflow = 'hidden'

let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');

let diceGlow = [one, two, three, four]

function randomColorClick() {
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    let diceGlowedNowElement = diceGlow[randomNumber - 1]
    diceGlowedNowElement.style.backgroundColor = 'white'


}

    randomColorClick();

