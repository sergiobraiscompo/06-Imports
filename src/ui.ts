import {
    cartas,
    partida
} from "./model";

import { creaNuevaPartida, queHabriaPasado } from "./motor";
import { handle_click } from "./shell";

// Elementos HTML
export const mensajeElement = document.getElementById("mensaje");
export const tableroElement = document.getElementById("tablero");
export const puntuacionElement = document.getElementById("puntuacion");
export const contenedorBotonesElement = document.getElementById("contenedor-botones");
const cartaImgElement = document.getElementById("carta");

// Botón pedir carta
export const boton_pedir_carta = document.getElementById("pedir_carta");
boton_pedir_carta?.addEventListener("click", () => handle_click("pedirCarta"));

// Botón mePlanto
export const boton_me_planto = document.getElementById("me_planto");
boton_me_planto?.addEventListener("click", () => handle_click("mePlanto"));


// Muestra la parte trasera de las cartas
export const muestraCartaPorDefecto = () => {
    if (cartaImgElement instanceof HTMLImageElement && cartaImgElement != undefined && cartaImgElement != null) {
        cartaImgElement.src = cartas[0];
    }
};


// Función mostrar puntuación
export const muestraPuntuacion = () => {
    if (puntuacionElement && puntuacionElement != undefined && puntuacionElement != null) {
        puntuacionElement.innerHTML =  "Puntuación: "+ partida.puntuacion.toString();
    }
};

// Función mostrar puntuación
export const muestraMensaje = () => {
    if (mensajeElement && mensajeElement != undefined && mensajeElement != null) {
        mensajeElement.innerHTML =  partida.mensaje;
    }
};


// Crea el botón nueva partida
export const creaBotonNuevaPartida = () => {
    const nueva_partida_boton = document.createElement("button");
    nueva_partida_boton.innerText = "Nueva Partida";
    nueva_partida_boton.id = "boton-nueva-partida";
    nueva_partida_boton.className = "boton-nueva-partida";
    nueva_partida_boton.onclick = () => creaNuevaPartida();

    // Añadiendo el botón nueva partida en pantalla
    contenedorBotonesElement?.appendChild(nueva_partida_boton);
};


// Crea botón queHabriaPasado
export const creaBotonQueHabriaPasado = () => {
    const que_habria_pasado_boton = document.createElement("button");

    que_habria_pasado_boton.innerText = "¿Qué habría pasado?";
    que_habria_pasado_boton.id = "boton-que-habria-pasado";
    que_habria_pasado_boton.className = "boton-que-habria-pasado";
    que_habria_pasado_boton.onclick = () => queHabriaPasado();

    // Añadiendo el botón nueva partida en pantalla
    contenedorBotonesElement?.appendChild(que_habria_pasado_boton);
};


// Muestra la carta actual
export const mostrarCarta = (carta: number) : void => {

    let ruta_carta = "";

    // Devolver carta aleatoria
    switch (carta) {
        case 1: {
            ruta_carta = cartas[1];
            break;
        }

        case 2: {
            ruta_carta = cartas[2];
            break;
        }

        case 3: {
            ruta_carta = cartas[3];
            break;
        }

        case 4: {
            ruta_carta = cartas[4];
            break;
        }

        case 5: {
            ruta_carta = cartas[5];
            break;
        }

        case 6: {
            ruta_carta = cartas[6];
            break;
        }

        case 7: {
            ruta_carta = cartas[7];
            break;
        }

        case 10: {
            ruta_carta = cartas[8];
            break;
        }

        case 11: {
            ruta_carta = cartas[9];
            break;
        }

        case 12: {
            ruta_carta = cartas[10];
            break;
        }

        default: {
            ruta_carta = cartas[0];
            break;
        }
    };

    // Condicional que comprueba que los elementos sean instancias de HTMLImageElement
    if (cartaImgElement instanceof HTMLImageElement) {
            cartaImgElement.src = ruta_carta;
    }
};