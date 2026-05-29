
const btn = document.getElementById("btn");
const title = document.querySelector("h1");
const div = document.querySelector("div");

const titles = document.querySelectorAll("h2");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const a = document.querySelector("a");
const img = document.querySelector("img");

btn.addEventListener("click", () => {
    if(div.style.backgroundColor != "white") {
        title.innerText = "Feioso"
        div.style.backgroundColor = "white";
        title.style.color = "black";
        return
    }

    title.innerText = "Lindão"
    div.style.backgroundColor = "rgba(15, 91, 255, 0.363)";
    title.style.color = "white";
})

btn2.addEventListener("click", () => {
    if(titles[0].style.color == "white") {
        titles.forEach((t) => {
            t.style.color = "blue"
        })
        return
    }

    titles.forEach(t => {
        t.style.color = "white"
    })
})


btn3.addEventListener("click", () => {
    if(title.innerHTML == "Este texto deve ser trocado") {
        title.innerHTML = "Texto <span>trocado</span>"
        return
    }

    title.innerHTML = "Este texto deve ser trocado"
})

btn4.addEventListener("click", () => {
    if(a.getAttribute("href") == "https://animesonlinecc.to/anime/yosuga-no-sora/") {
        a.setAttribute("href", "https://animesonlinecc.to/anime/elf-san-wa-yaserarenai/")
        a.textContent = "Brutal"

        return
    }

    a.setAttribute("href", "https://animesonlinecc.to/anime/yosuga-no-sora/")
    a.textContent = "Muito Bom"
})

btn5.addEventListener("click", () => {
    if(img.getAttribute("src") == "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/0f7e3038-126f-46d4-ac6b-0bdb3b9e7831/compose?aspectRatio=1.78&format=webp&width=1200") {
        img.setAttribute("src", "https://static.wikia.nocookie.net/iepfanon/images/5/5b/%E3%81%8A%E3%83%BC%E3%81%B0%E3%83%BC%E3%81%B5%E3%82%8D%E3%81%89_%28HiT%29_-_poster_%28Brazilian_Portuguese%29.png/revision/latest/thumbnail/width/360/height/450?cb=20240603170149")

        return
    }

    img.setAttribute("src", "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/0f7e3038-126f-46d4-ac6b-0bdb3b9e7831/compose?aspectRatio=1.78&format=webp&width=1200")
})