console.log("hello there!")

let hihatSound = new Audio("./sounds/hihat.wav");
let clapsound = new Audio("./sounds/clap.wav");
let boomSound = new Audio("./sounds/boom.wav")
let kickSound = new Audio("./sounds/kick.wav")
let openhatSound = new Audio("./sounds/openhat.wav");
let rideSound = new Audio("./sounds/ride.wav");
let snareSound = new Audio("./sounds/snare.wav");
let tinkSound = new Audio("./sounds/tink.wav");
let tomSound = new Audio("./sounds/tom.wav");



const hihat = document.getElementById('hihat')

hihat.addEventListener('click', () => {
    hihatSound.play()
})