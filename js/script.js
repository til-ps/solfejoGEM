const compassos = document.querySelectorAll(".compassos");
const bpm = document.querySelector("input[type='number']");
const iniciar = document.querySelector("section button");
const section = document.querySelector("section");
const container = document.querySelector("#container");
const containerDiv = document.querySelector("#container div");
const divDoCompasso = document.querySelector("body>div");
const linhaDesenho = document.querySelectorAll(".linhaDesenho");

function start() {
    let tipoDoCompasso;
    for(let compasso in compassos) {
        if(compassos[compasso].checked) {
            tipoDoCompasso = Number(compasso) + 2;
        }
    }
    if(tipoDoCompasso === 4) {
        linhaDesenho[1].style.transform = "rotate(90deg)";
        linhaDesenho[2].style.transform = "translate(-20vh, 20vh) rotate(-45deg)";
        linhaDesenho[2].style.height = "57vh";
        linhaDesenho[3].style.transform = "translate(20vh, -20vh) rotate(-45deg)";
        linhaDesenho[3].style.height = "57vh";
    } else {
        linhaDesenho[2].style.transform = "translate(20vh, 20vh) rotate(45deg)";
        linhaDesenho[2].style.height = "57vh";
        linhaDesenho[3].style.transform = "translate(20vh, -20vh) rotate(-45deg)";
        linhaDesenho[3].style.height = "57vh";
    }
    let tempoDoCompasso = (60/bpm.value) * tipoDoCompasso;
    section.style.display = "none";
    divDoCompasso.style.display = "flex";
    containerDiv.style.animation = `2s levare ease-in, ${tempoDoCompasso}s 2s compasso${tipoDoCompasso} linear infinite`;
}

iniciar.onclick = start;