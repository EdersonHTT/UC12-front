const btn = document.querySelector("button");
const h1 = document.querySelector("h1");

const menu = document.getElementById("desck");
const i = document.querySelector("i");

// btn.addEventListener("click", ()=> {
//     // h1.className = "texto"
//     // h1.className.add("texto")

//     // h1.classList.toggle("texto")
//     // h1.classList.toggle("esconder")

    
// })

i.addEventListener("click", () => {
    menu.classList.toggle("moba")
})