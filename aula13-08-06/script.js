
const images = [
    "./assets/alisson.webp",
    "./assets/cristiano.webp",
    "./assets/endrick.webp",
    "./assets/mbape.webp",
    "./assets/messi.webp",
    "./assets/neymar.webp"
]

const verso = "./assets/cover.png";

let firstCard = null;
let secindCard = null;
let blocked = false;

let miss = 0;
let acertos = 0;

const tableGame = document.getElementById("tableGame");
const btnReset = document.getElementById("reset");

const attempts = document.getElementById("attempts");
const plays = document.querySelectorAll(".nu");

let cards;


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
        card.value = "aaaaa"

        tableGame.appendChild(card);
    });

    cards = document.querySelectorAll(".card")
}

function flipCard(card) {
    
}

function checkPair() {

}

startGame();

cards.forEach(e => {

    e.addEventListener("click", () => {
        
    })

})