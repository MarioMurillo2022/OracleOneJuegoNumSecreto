// Primer Curso
// let parrafo = document.querySelector('p');
// parrafo.innerHTML = ('Indica un número del 1 al 10');

let numeroSecreto = 0;
let intentos = 0;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


/*
Descrirpcion pre commit
Limpieza de input, cuando el usuario no acierte el numero secreto. Cuando acierte el botó */

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';

}

// Asignar numero aleatorio parte 4
function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    return numeroSecreto;

}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'juego del numero secreto!');
    asignarTextoElemento('p', 'Indica un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero de intentos
    //Inicializar el número de intentos
    condicionesIniciales();
    //Desahabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
