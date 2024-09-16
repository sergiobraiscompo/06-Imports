import {
    cartaImgElement, cartasFolder, 
    partida,
    asCopas, dosCopas, tresCopas, cuatroCopas,
    cincoCopas, seisCopas, sieteCopas, sotaCopas,
    caballoCopas, reyCopas, cartaBocaAbajo
} from "./model";

import { creaNuevaPartida, queHabriaPasado } from "./motor";
import { handleClick } from "./shell";

// Elementos HTML
export const mensajeElement = document.getElementById("mensaje");
export const tableroElement = document.getElementById("tablero");
export const puntuacionElement = document.getElementById("puntuacion");
export const contenedorBotonesElement = document.getElementById("contenedor-botones");

// Botón pedir carta
export const botonPedirCarta = document.getElementById("pedir_carta");
botonPedirCarta?.addEventListener("click", () => handleClick("pedirCarta"));

// Botón mePlanto
export const botonMePlanto = document.getElementById("me_planto");
botonMePlanto?.addEventListener("click", () => handleClick("mePlanto"));



// Muestra la parte trasera de las cartas
export const muestraCartaPorDefecto = () => {
    if (cartaImgElement instanceof HTMLImageElement) {
        cartaImgElement.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/" + cartaBocaAbajo;
    }
};


// Función mostrar puntuación
export const muestraPuntuacion = () => {
    if (puntuacionElement) {
        puntuacionElement.innerHTML =  "Puntuación: "+ partida.puntuacion.toString();
    }
};

// Función mostrar puntuación
export const muestraMensaje = () => {
    if (mensajeElement) {
        mensajeElement.innerHTML =  partida.mensaje;
    }
};


// Crea el botón nueva partida
export const creaBotonNuevaPartida = () => {
    const nuevaPartidaBoton = document.createElement("button");
    nuevaPartidaBoton.innerText = "Nueva Partida";
    nuevaPartidaBoton.id = "boton-nueva-partida";
    nuevaPartidaBoton.className = "boton-nueva-partida";
    nuevaPartidaBoton.onclick = () => creaNuevaPartida();

    // Añadiendo el botón nueva partida en pantalla
    contenedorBotonesElement?.appendChild(nuevaPartidaBoton);
};


// Crea botón queHabriaPasado
export const creaBotonQueHabriaPasado = () => {
    const queHabriaPasadoBoton = document.createElement("button");

    queHabriaPasadoBoton.innerText = "¿Qué habría pasado?";
    queHabriaPasadoBoton.id = "boton-que-habria-pasado";
    queHabriaPasadoBoton.className = "boton-que-habria-pasado";
    queHabriaPasadoBoton.onclick = () => queHabriaPasado();

    // Añadiendo el botón nueva partida en pantalla
    contenedorBotonesElement?.appendChild(queHabriaPasadoBoton);
};


// Muestra la carta actual
export const mostrarCarta = (carta: number) : void => {

    let rutaCarta = "";

    // Devolver carta aleatoria
    switch (carta) {
        case 1: {
            rutaCarta = cartasFolder + asCopas;
            break;
        }

        case 2: {
            rutaCarta = cartasFolder + dosCopas;
            break;
        }

        case 3: {
            rutaCarta = cartasFolder + tresCopas;
            break;
        }

        case 4: {
            rutaCarta = cartasFolder + cuatroCopas;
            break;
        }

        case 5: {
            rutaCarta = cartasFolder + cincoCopas;
            break;
        }

        case 6: {
            rutaCarta = cartasFolder + seisCopas;
            break;
        }

        case 7: {
            rutaCarta = cartasFolder + sieteCopas;
            break;
        }

        case 10: {
            rutaCarta = cartasFolder + sotaCopas;
            break;
        }

        case 11: {
            rutaCarta = cartasFolder + caballoCopas;
            break;
        }

        case 12: {
            rutaCarta = cartasFolder + reyCopas;
            break;
        }

        default: {
            rutaCarta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/" + cartaBocaAbajo;
            break;
        }
    };

    // Condicional que comprueba que los elementos sean instancias de HTMLImageElement
    if (cartaImgElement instanceof HTMLImageElement) {
            cartaImgElement.src = rutaCarta;
    }
};