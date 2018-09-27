let compassos = document.querySelectorAll(".compassos");
let bpm = document.querySelector("input[type='number']");
let iniciar = document.querySelector("section button");
let section = document.querySelector("section");
let container = document.querySelector("#container");
let containerDiv = document.querySelector("#container div");

function start() {
    let tipoDoCompasso;
    for(let compasso in compassos) {
        if(compassos[compasso].checked) {
            tipoDoCompasso = Number(compasso) + 2;
        }
    }
    let tempoDoCompasso = (60/bpm.value) * tipoDoCompasso;
    section.style.display = "none";
    container.style.display = "block";
    containerDiv.style.animation = `2s levare ease-in, ${tempoDoCompasso}s 2s compasso${tipoDoCompasso} linear infinite`;
}

iniciar.onclick = start;