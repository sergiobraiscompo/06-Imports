import {
    nuevaPartida, carta_img_element, cartas_folder, 
    puntuacion, reiniciaPuntuacion,
    as_copas, dos_copas, tres_copas, cuatro_copas,
    cinco_copas, seis_copas, siete_copas, sota_copas,
    caballo_copas, rey_copas, carta_boca_abajo
} from "./model";

import { cartaAleatoria, queHabriaPasado, sumarPuntuacion } from "./motor";
import { handle_click } from "./shell";

// Elementos HTML
const mensaje_element = document.getElementById("mensaje");
const tablero_element = document.getElementById("tablero");
const puntuacion_element = document.getElementById("puntuacion");
const contenedor_botones_element = document.getElementById("contenedor-botones");

// Botones de la web
export const boton_nueva_partida = document.getElementById("boton-nueva-partida");
export const boton_que_habria_pasasdo = document.getElementById("boton-que-habria-pasado");
const boton_pedir_carta = document.getElementById("pedir_carta");


// Botón pedir carta
const pedirCartaBoton = document.getElementById("pedir_carta");
pedirCartaBoton?.addEventListener("click", () => handle_click("pedirCarta"));

// Botón mePlanto
const mePlantoBoton = document.getElementById("me_planto");
mePlantoBoton?.addEventListener("click", () => handle_click("mePlanto"));



// Muestra la parte trasera de las cartas
export const muestraCartaPorDefecto = () => {
    if (carta_img_element instanceof HTMLImageElement) {
        carta_img_element.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/" + carta_boca_abajo;
        console.log(cartas_folder + carta_boca_abajo);
    }
};


// Función mostrar puntuación
export const muestraPuntuacion = () => {

    if (puntuacion_element) {
        puntuacion_element.innerHTML =  "Puntuación: "+ puntuacion.toString();
    }
};


let partidaAcabada: boolean = false;

const gameOver = () => {
    let  mensaje: string = "";
    
    if (boton_pedir_carta instanceof HTMLButtonElement && mePlantoBoton instanceof HTMLButtonElement) {
        boton_pedir_carta.disabled = true
        boton_pedir_carta.className = "disabled-button";

        mePlantoBoton.disabled = true
        mePlantoBoton.className = "disabled-button";
        creaBotonQueHabriaPasado();
    };
    
    if (mensaje_element && !partidaAcabada) {
        mensaje = "Has hecho más de 7 puntos y medio, partida terminada.";
        partidaAcabada = true;
        mensaje_element.innerHTML = mensaje;
    }

    creaBotonNuevaPartida();
};


// Crea el botón nueva partida
export const creaBotonNuevaPartida = () => {
    const nueva_partida_boton = document.createElement("button");

    nueva_partida_boton.innerText = "Nueva Partida";
    nueva_partida_boton.id = "boton_nueva_partida";
    nueva_partida_boton.className = "boton";
    nueva_partida_boton.onclick = () => creaNuevaPartida();

    // Añadiendo el botón nueva partida en pantalla
    console.log("Creando botón nueva partida");
    tablero_element?.appendChild(nueva_partida_boton);
};

// Crea botón queHabriaPasado
const creaBotonQueHabriaPasado = () => {
    const que_habria_pasado_boton = document.createElement("button");

    que_habria_pasado_boton.innerText = "¿Qué habría pasado?";
    que_habria_pasado_boton.id = "boton-que-habria-pasado";
    que_habria_pasado_boton.className = "boton-que-habria-pasado";
    que_habria_pasado_boton.onclick = () => queHabriaPasado();

    // Añadiendo el botón nueva partida en pantalla
    console.log("Creando botón queHabriaPasado");
    contenedor_botones_element?.appendChild(que_habria_pasado_boton);
};


// Muestra la carta actual
export const mostrarCarta = (carta: number) : void => {

    let ruta_carta = "";

    // Devolver carta aleatoria
    switch (carta) {
        case 1: {
            console.log("Carta 1.");
            console.log(ruta_carta);
            ruta_carta = cartas_folder + as_copas;
            break;
        }

        case 2: {
            console.log("Carta 2.");
            console.log(ruta_carta);
            ruta_carta = cartas_folder + dos_copas;
            break;
        }

        case 3: {
            console.log("Carta 3.");
            console.log(ruta_carta);
            ruta_carta = cartas_folder + tres_copas;
            break;
        }

        case 4: {
            console.log("Carta 4.");
            console.log(ruta_carta);
            ruta_carta = cartas_folder + cuatro_copas;
            break;
        }

        case 5: {
            console.log("Carta 5.");
            console.log(ruta_carta);
            ruta_carta = cartas_folder + cinco_copas;
            break;
        }

        case 6: {
            console.log("Carta 6.");
            console.log(ruta_carta);
            ruta_carta = cartas_folder + seis_copas;
            break;
        }

        case 7: {
            console.log("Carta 7.");
            console.log(ruta_carta);
            ruta_carta = cartas_folder + siete_copas;
            break;
        }

        case 10: {
            console.log("Sota.");
            console.log(ruta_carta);
            ruta_carta = cartas_folder + sota_copas;
            break;
        }

        case 11: {
            console.log("Caballo.");
            console.log(ruta_carta);
            ruta_carta = cartas_folder + caballo_copas;
            break;
        }

        case 12: {
            console.log("Rey.");
            console.log(ruta_carta);
            ruta_carta = cartas_folder + rey_copas;
            break;
        }

        default: {
            ruta_carta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/" + carta_boca_abajo;
            console.log(ruta_carta);
            break;
        }
    };

    // Condicional que comprueba que los elementos sean instancias de HTMLImageElement
    if (carta_img_element instanceof HTMLImageElement) {
            carta_img_element.src = ruta_carta;
    }
};


// Genera un número aleatorio y devuelve una carta
export const dameCarta = () => {

    // Llamada a la función recibir número aleatorio
    let nuevo_numero = cartaAleatoria();

    mostrarCarta(nuevo_numero);
    sumarPuntuacion(nuevo_numero);

    if (puntuacion > 7.5){
        gameOver();
    }
};


// Llama a gameover y muestra un mensaje en pantalla
export const plantarse = () => {
    let mensaje = "";
    gameOver();

    if (puntuacion === 7.5){
        mensaje = "¡Lo has clavado! ¡Enhorabuena!";
    }

    if (puntuacion === 6 || puntuacion === 7){
        mensaje = "Casi casi ...";
    }

    if (puntuacion === 5){
        mensaje = "Te ha entrado el canguelo eh?";
    }

    if (puntuacion <= 4){
        mensaje = "Has sido muy conservador";
    }

    if (mensaje_element) {
        mensaje_element.innerHTML = mensaje;
    }

    creaBotonNuevaPartida;
};


export const creaNuevaPartida = () => {
    
    console.log("Creando nueva partida");
    
    if (boton_pedir_carta instanceof HTMLButtonElement && mePlantoBoton instanceof HTMLButtonElement) {
        boton_pedir_carta.disabled = false;
        mePlantoBoton.disabled = false;
    }

    nuevaPartida;
    reiniciaPuntuacion();
    muestraPuntuacion();
    muestraCartaPorDefecto();
};