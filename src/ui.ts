import {
    carta_img_element, cartas_folder, 
    puntuacion,
    as_copas, dos_copas, tres_copas, cuatro_copas,
    cinco_copas, seis_copas, siete_copas, sota_copas,
    caballo_copas, rey_copas, carta_boca_abajo
} from "./model";

import { creaNuevaPartida, queHabriaPasado } from "./motor";
import { handle_click } from "./shell";

// Elementos HTML
export const mensaje_element = document.getElementById("mensaje");
export const tablero_element = document.getElementById("tablero");
export const puntuacion_element = document.getElementById("puntuacion");
export const contenedor_botones_element = document.getElementById("contenedor-botones");

// Botones de la web
export const boton_nueva_partida = document.getElementById("boton-nueva-partida");
export const boton_que_habria_pasasdo = document.getElementById("boton-que-habria-pasado");


// Botón pedir carta
export const boton_pedir_carta = document.getElementById("pedir_carta");
boton_pedir_carta?.addEventListener("click", () => handle_click("pedirCarta"));

// Botón mePlanto
export const boton_me_planto = document.getElementById("me_planto");
boton_me_planto?.addEventListener("click", () => handle_click("mePlanto"));



// Muestra la parte trasera de las cartas
export const muestraCartaPorDefecto = () => {
    if (carta_img_element instanceof HTMLImageElement) {
        carta_img_element.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/" + carta_boca_abajo;
    }
};


// Función mostrar puntuación
export const muestraPuntuacion = () => {

    if (puntuacion_element) {
        puntuacion_element.innerHTML =  "Puntuación: "+ puntuacion.toString();
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
    contenedor_botones_element?.appendChild(nueva_partida_boton);
};


// Crea botón queHabriaPasado
export const creaBotonQueHabriaPasado = () => {
    const que_habria_pasado_boton = document.createElement("button");

    que_habria_pasado_boton.innerText = "¿Qué habría pasado?";
    que_habria_pasado_boton.id = "boton-que-habria-pasado";
    que_habria_pasado_boton.className = "boton-que-habria-pasado";
    que_habria_pasado_boton.onclick = () => queHabriaPasado();

    // Añadiendo el botón nueva partida en pantalla
    contenedor_botones_element?.appendChild(que_habria_pasado_boton);
};


// Muestra la carta actual
export const mostrarCarta = (carta: number) : void => {

    let ruta_carta = "";

    // Devolver carta aleatoria
    switch (carta) {
        case 1: {
            ruta_carta = cartas_folder + as_copas;
            break;
        }

        case 2: {
            ruta_carta = cartas_folder + dos_copas;
            break;
        }

        case 3: {
            ruta_carta = cartas_folder + tres_copas;
            break;
        }

        case 4: {
            ruta_carta = cartas_folder + cuatro_copas;
            break;
        }

        case 5: {
            ruta_carta = cartas_folder + cinco_copas;
            break;
        }

        case 6: {
            ruta_carta = cartas_folder + seis_copas;
            break;
        }

        case 7: {
            ruta_carta = cartas_folder + siete_copas;
            break;
        }

        case 10: {
            ruta_carta = cartas_folder + sota_copas;
            break;
        }

        case 11: {
            ruta_carta = cartas_folder + caballo_copas;
            break;
        }

        case 12: {
            ruta_carta = cartas_folder + rey_copas;
            break;
        }

        default: {
            ruta_carta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/" + carta_boca_abajo;
            break;
        }
    };

    // Condicional que comprueba que los elementos sean instancias de HTMLImageElement
    if (carta_img_element instanceof HTMLImageElement) {
            carta_img_element.src = ruta_carta;
    }
};