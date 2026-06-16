
// const div = document.querySelector("div");
// const btn = document.getElementById("btn");
// const btnRem = document.getElementById("btn-rem");

// btn.addEventListener("click", () => {

//     const paragrafo = document.createElement("p");

//     paragrafo.textContent = "Novo texto criado";

//     div.appendChild(paragrafo)
// })

// btnRem.addEventListener("click", () => {
//     const paragrafos = div.querySelectorAll("p");
//     if(paragrafos.length > 0) {
//         paragrafos[0].remove()

//     }
// })

const btn = document.getElementById("btn")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn3")
const h1 = document.querySelector("h1")
const ul = document.querySelector("ul")

btn.addEventListener("click", () => {
    h1.textContent = "Ola mundo"
})

btn2.addEventListener("click", () => {
    h1.classList.toggle("light")
})

let count = 0

btn3.addEventListener("click", () => {
    console.log("SSS")
    const li = document.createElement("li");

    li.textContent = "Item " + count++

    ul.appendChild(li)
})

btn4.addEventListener("click", () => {
    console.log("SSS")

})