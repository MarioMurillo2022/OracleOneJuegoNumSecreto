// Primer Curso
// let parrafo = document.querySelector('p');
// parrafo.innerHTML = ('Indica un número del 1 al 10');

let numeroSecreto = generarNumeroSecreto();



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof (numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof (numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto);
    return;
}
// Asignar numero aleatorio parte 4
function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    return numeroSecreto;

}
asignarTextoElemento('h1', 'juego del numero secreto!');
asignarTextoElemento('p', 'Indica un número del 1 al 10');
