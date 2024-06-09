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
            hihat.classList.add("pressed");
            hihat.click();
        }
        });

        document.addEventListener('keyup', (event) => {
            if (event.key === "q" || event.key === "Q") {
                hihat.classList.remove("pressed");
            }
        });


const clap = document.getElementById('clap');

        clap.addEventListener('click', () => {
            clapSound.play()
        });

        document.addEventListener('keydown', (event) => {
            if(event.key === "w" || event.key === "W") {
                clapSound.play()
                clap.classList.add("pressed");
                clap.click();
            }
        });

        document.addEventListener("keyup", (event) => {
        if (event.key === "w" || event.key === "W") {
            clap.classList.remove("pressed");
        }
        });

const boom = document.getElementById('boom');

        boom.addEventListener('click', () => {
            boomSound.play()
        });

        document.addEventListener('keydown', (event) => {
            if(event.key === "e" || event.key === "E") {
                boomSound.play()
                boom.classList.add("pressed");
                boom.click();
            }
        });

        document.addEventListener("keyup", (event) => {
        if (event.key === "e" || event.key === "E") {
            boom.classList.remove("pressed");
        }
        });

const kick = document.getElementById('kick');

        kick.addEventListener('click', () => {
            kickSound.play()
        });

        document.addEventListener("keydown", (event) => {
        if (event.key === "r" || event.key === "R") {
            kickSound.play();
            kick.classList.add("pressed");
            kick.click();
        }
        });

        document.addEventListener("keyup", (event) => {
        if (event.key === "r" || event.key === "R") {
            kick.classList.remove("pressed");
        }
        });

const openhat = document.getElementById('openhat');

        openhat.addEventListener('click', () => {
            openhatSound.play()
        });

        document.addEventListener("keydown", (event) => {
        if (event.key === "t" || event.key === "T") {
            openhatSound.play();
            openhat.classList.add("pressed");
            openhat.click();
        }
        });

        document.addEventListener("keyup", (event) => {
        if (event.key === "t" || event.key === "T") {
            openhat.classList.remove("pressed");
        }
        });

const ride = document.getElementById('ride');

        ride.addEventListener('click', () => {
            rideSound.play()
        });

        document.addEventListener("keydown", (event) => {
        if (event.key === "a" || event.key === "A") {
            rideSound.play();
            ride.classList.add("pressed");
            ride.click();
        }
        });

        document.addEventListener("keyup", (event) => {
        if (event.key === "a" || event.key === "A") {
            ride.classList.remove("pressed");
        }
        });

const snare = document.getElementById('snare');

        snare.addEventListener('click', () => {
            snareSound.play()
        });

        document.addEventListener("keydown", (event) => {
        if (event.key === "s" || event.key === "S") {
            snareSound.play();
            snare.classList.add("pressed");
            snare.click();
        }
        });

        document.addEventListener("keyup", (event) => {
        if (event.key === "s" || event.key === "S") {
            snare.classList.remove("pressed");
        }
        });

const tink = document.getElementById('tink');

        tink.addEventListener('click', () => {
            tinkSound.play()
        });



        document.addEventListener("keydown", (event) => {
        if (event.key === "d" || event.key === "D") {
            tinkSound.play();
            tink.classList.add("pressed");
            tink.click();
        }
        });

        document.addEventListener("keyup", (event) => {
        if (event.key === "d" || event.key === "D") {
            tink.classList.remove("pressed");
        }
        });

const tom = document.getElementById('tom');

        tom.addEventListener('click', () => {
            tomSound.play()
        });

        document.addEventListener("keydown", (event) => {
        if (event.key === "f" || event.key === "F") {
            tomSound.play();
            tom.classList.add("pressed");
            tom.click();
        }
        });

        document.addEventListener("keyup", (event) => {
        if (event.key === "f" || event.key === "F") {
            tom.classList.remove("pressed");
        }
        });







