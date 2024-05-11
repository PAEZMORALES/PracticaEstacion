
let countEl = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");
let count = 0



function increment(){
    count = count + 1
   
    countEl.textContent = count    
}

function decrement(){
    count = count - 1
    countEl.textContent = count    
}


function save(){
    let countStr = count + " - "
    saveEL.textContent += countStr
    countEl.textContent = 0
    count = 0 

}

function actualizarHora() {
    const reloj = document.getElementById('reloj');
    const ahora = new Date();
    const horas = agregarCero(ahora.getHours());
    const minutos = agregarCero(ahora.getMinutes());
    const segundos = agregarCero(ahora.getSeconds());
    reloj.textContent = `${horas}:${minutos}:${segundos}`;
}

function agregarCero(numero) {
    return numero < 10 ? '0' + numero : numero;
}

setInterval(actualizarHora, 1000);

actualizarHora();