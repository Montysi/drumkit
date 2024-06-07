console.log("hello there!")

let hihatSound = new Audio("./sounds/hihat.wav");
let clapSound = new Audio("./sounds/clap.wav");
let boomSound = new Audio("./sounds/boom.wav")
let kickSound = new Audio("./sounds/kick.wav")
let openhatSound = new Audio("./sounds/openhat.wav");
let rideSound = new Audio("./sounds/ride.wav");
let snareSound = new Audio("./sounds/snare.wav");
let tinkSound = new Audio("./sounds/tink.wav");
let tomSound = new Audio("./sounds/tom.wav");



const hihat = document.getElementById('hihat');

hihat.addEventListener('click', () => {
    hihatSound.play()
});

hihat.addEventListener('keypress', (event) => {
    if (event.key === 'q' || event.key === 'Q'){
        hihatSound.play()
    }
});

const clap = document.getElementById('clap');

clap.addEventListener('click', () => {
    clapSound.play()
});

const boom = document.getElementById('boom');

boom.addEventListener('click', () => {
    boomSound.play()
});

const kick = document.getElementById('kick');

kick.addEventListener('click', () => {
    kickSound.play()
});

const openhat = document.getElementById('openhat');

openhat.addEventListener('click', () => {
    openhatSound.play()
});

const ride = document.getElementById('ride');

ride.addEventListener('click', () => {
    rideSound.play()
});

const snare = document.getElementById('snare');

snare.addEventListener('click', () => {
    snareSound.play()
});

const tink = document.getElementById('tink');

tink.addEventListener('click', () => {
    tinkSound.play()
});

const tom = document.getElementById('tom');

tom.addEventListener('click', () => {
    tomSound.play()
});