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

document.addEventListener('keydown', (event) => {
  if (event.key === "q" || event.key === "Q") {
    hihatSound.play();
  }
});

const clap = document.getElementById('clap');

clap.addEventListener('click', () => {
    clapSound.play()
});

document.addEventListener('keydown', (event) => {
    if(event.key === "w" || event.key === "W") {
        clapSound.play()
    }
});

const boom = document.getElementById('boom');

boom.addEventListener('click', () => {
    boomSound.play()
});

document.addEventListener('keydown', (event) => {
    if(event.key === "e" || event.key === "E") {
        boomSound.play()
    }
});

const kick = document.getElementById('kick');

kick.addEventListener('click', () => {
    kickSound.play()
});

document.addEventListener("keydown", (event) => {
  if (event.key === "r" || event.key === "R") {
    kickSound.play();
  }
});

const openhat = document.getElementById('openhat');

openhat.addEventListener('click', () => {
    openhatSound.play()
});

document.addEventListener("keydown", (event) => {
  if (event.key === "t" || event.key === "T") {
    openhatSound.play();
  }
});

const ride = document.getElementById('ride');

ride.addEventListener('click', () => {
    rideSound.play()
});

document.addEventListener("keydown", (event) => {
  if (event.key === "a" || event.key === "A") {
    rideSound.play();
  }
});

const snare = document.getElementById('snare');

snare.addEventListener('click', () => {
    snareSound.play()
});

document.addEventListener("keydown", (event) => {
  if (event.key === "s" || event.key === "S") {
    snareSound.play();
  }
});

const tink = document.getElementById('tink');

tink.addEventListener('click', () => {
    tinkSound.play()
});

document.addEventListener("keydown", (event) => {
  if (event.key === "d" || event.key === "D") {
    tinkSound.play();
  }
});

const tom = document.getElementById('tom');

tom.addEventListener('click', () => {
    tomSound.play()
});

document.addEventListener("keydown", (event) => {
  if (event.key === "f" || event.key === "F") {
    tomSound.play();
  }
});


