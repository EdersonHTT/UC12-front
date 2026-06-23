
const images = [
    "./assets/alisson.webp",
    "./assets/cristiano.webp",
    "./assets/endrick.webp",
    "./assets/mbape.webp",
    "./assets/messi.webp",
    "./assets/neymar.webp"
]

const verso = "./assets/cover.png";

let attemptsNu = 0;
let wins = 0;

const tableGame = document.getElementById("tableGame");
const btnReset = document.getElementById("reset");

const attempts = document.getElementById("attempts");
const plays = document.querySelectorAll(".nu");

let cards;
const selected = [];
let blocked = false;


// Fisher-yates

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Troca os elementos usando desestruturação
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    
    return arr;
}

function startGame() {
    const imagesArr = [];

    for(let i =0; i < 2; i++) {
        images.forEach(e => {
            imagesArr.push(e);
        })
    }

    plays[1].textContent = images.length;

    const arr = shuffle(imagesArr);

    arr.forEach(e => {
        const card = document.createElement("img");
        card.classList.add("card");
        card.src = verso;
        card.value = e;

        tableGame.appendChild(card);
    });

    cards = document.querySelectorAll(".card")
}

function flipCard(card) {
    card.src = card.value;
}

function checkPair() {
    if(selected[0].src != selected[1].src) {

        selected[0].src = verso;
        selected[1].src = verso;

        attemptsNu++
        attempts.textContent = attemptsNu;
        selected.pop();
        selected.pop();
        blocked = false;
        return
    }

    attemptsNu++;
    attempts.textContent = attemptsNu;
    wins++
    plays[0].textContent = wins;
    selected.pop();
    selected.pop();
    blocked = false;
}

startGame();

cards.forEach(e => {

    e.addEventListener("click", () => {
        if(blocked) return;

        selected.push(e)
        flipCard(e)

        if(selected.length == 2) {
            blocked = true;
            setTimeout(() => checkPair(), 1000);
            
        }
    })

})