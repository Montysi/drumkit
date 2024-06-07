console.log("hello there!")

let hihatSound = new Audio("./sounds/hihat.wav");
let clapsound = new Audio("./sounds/clap.wav");
let boomSound = new Audio("./sounds/boom.wav")
let kickSound = new Audio("")
let openhatSound = new Audio()
let rideSound = new Audio()
let snareSound = new Audio()
let tinkSound = new Audio()
let tomSound = new Audio();



const hihat = document.getElementById('hihat')

hihat.addEventListener('click', () => {
    hihatSound.play()
})