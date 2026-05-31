

const scr = document.getElementById("screen");
const sub = document.getElementById("sub");
const err = document.getElementById("alert");

let val1 = "";
let opeation = "";
let val2 = "";

const iframe = document.getElementById("doom")

const op = {
    "+": (a, b) => Number(a) + Number(b),
    "—": (a, b) => Number(b) - Number(a),
    "X": (a, b) => Number(b) * Number(a),
    "÷": (a, b) => Number(b) / Number(a),
    "%": (a) => a / 100,
    "√": (a) => a**0.5
}


document.addEventListener("click", (e) => {
    if(e.target.tagName.toLowerCase() != "button") return;
    if(err.style.display === "flex") return;

    const inp = e.target.textContent;

    if(/[0-9]$/.exec(inp)) {
        val1 += inp;
    }

    switch(inp) {
        case "CE":
            val1 = ""
            iframe.src = ""
        break;
        case "AC":
            val1 = ""
            val2 = ""
            iframe.src = ""
        break;
        case "%":
            val1 = op[inp](val1);
        break;
        case "√":
            val1 = op[inp](val1);
        break
        case "•":
            if(!val1.toString().includes(".") && val1.toString().length != 0) val1 += ".0";
        break
        default:
            if(val2 != "" &&  op[inp] || inp === "=") {
                let res = null;
                try {
                    res = op[opeation](val1, val2);
                } catch {
                    res = val1
                }

                if(!/[0-9]$/.exec(res)) {
                    val1 = "";
                    val2 = "";

                    err.style.display = "flex";

                    setTimeout(() => {
                        err.style.display = "none";
                    }, 1000)
                    break
                }

                if(inp != "=") {
                    opeation = inp;
                    val1 = "";
                    val2 = res;
                    break
                } 

                if (val1 == "1993.0") {
                    iframe.src = "https://archive.org/embed/doom_20221019"
                } else if(val1 == "1998.0") {
                    
                    iframe.src = "./assets/videoplayback.mp4"
                }

                val1 = res;
                val2 = "";

            } else if(op[inp]) {
                val2 = val1;
                val1 = "";
                opeation = inp;
            }
        break
            
    }
    
    if (val1.toString().length > 8) {
        scr.textContent = Number(val1).toExponential(2);
    } else {

        scr.textContent = val1;
    }

    if (val2.toString().length > 8) {
        sub.textContent = Number(val2).toExponential(2);
 

    } else {
        sub.textContent = val2;

    }
})
