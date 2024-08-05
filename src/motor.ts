import { cambiaMensaje, cambiaPuntuacion, partidaPorDefecto, puntuacion } from "./model";
import { boton_nueva_partida, boton_que_habria_pasasdo, creaBotonNuevaPartida, creaBotonQueHabriaPasado, mensaje_element, mostrarCarta, muestraCartaPorDefecto, muestraPuntuacion, boton_pedir_carta, boton_me_planto } from "./ui";


let partidaAcabada: boolean = false;

const gameOver = () => {
    if (boton_pedir_carta instanceof HTMLButtonElement && boton_me_planto instanceof HTMLButtonElement) {
        boton_pedir_carta.disabled = true
        boton_pedir_carta.className = "disabled-button";

        boton_me_planto.disabled = true
        boton_me_planto.className = "disabled-button";
        creaBotonQueHabriaPasado();
    };
    
    if (mensaje_element && !partidaAcabada) {
        cambiaMensaje("Has hecho más de 7 puntos y medio, partida terminada.");
        partidaAcabada = true;
    }

    creaBotonNuevaPartida();
};

// Suma la puntuación de la carta
export const sumarPuntuacion = (carta: number) => {
    let puntuacionCarta = 0;

   // Devualve el valor de la carta
    switch (carta) {
        case 1: {
            puntuacionCarta= 1;
            break;
        }

        case 2: {
            puntuacionCarta = 2;
            break;
        }

        case 3: {
            puntuacionCarta = 3;
            break;
        }

        case 4: {
            puntuacionCarta = 4;
            break;
        }

        case 5: {
            puntuacionCarta = 5;
            break;
        }

        case 6: {
            puntuacionCarta = 6;
            break;
        }

        case 7: {
            puntuacionCarta = 7;
            break;
        }

        case 10: {
            puntuacionCarta = 0.5;
            break;
        }

        case 11: {
            puntuacionCarta = 0.5;
            break;
        }

        case 12: {
            puntuacionCarta = 0.5;
            break;
        }
    }

    cambiaPuntuacion(puntuacionCarta);
    muestraPuntuacion();
};


// Genera un número aleatorio y devuelve una carta
export const dameCarta = () => {

    // Llamada a la función recibir número aleatorio
    let nuevo_numero = cartaAleatoria();

    mostrarCarta(nuevo_numero);
    sumarPuntuacion(nuevo_numero);

    if (puntuacion > 7.5 && !partidaAcabada) {
        gameOver();
    }
};


// Llama a gameover y muestra un mensaje en pantalla
export const plantarse = () => {
    gameOver();

    if (puntuacion === 7.5){
        cambiaMensaje("¡Lo has clavado! ¡Enhorabuena!");
    }

    if (puntuacion === 6 || puntuacion === 7){
        cambiaMensaje("Casi casi ...");
    }

    if (puntuacion === 5){
        cambiaMensaje("Te ha entrado el canguelo eh?");
    }

    if (puntuacion <= 4){
        cambiaMensaje("Has sido muy conservador");
    }

    creaBotonNuevaPartida;
};

// Generar carta aleatoria
export const cartaAleatoria = (): number => {
    let generarNumero = Math.floor(Math.random() * (12 - 1));
    if (generarNumero != 0){
        return generarNumero > 7
            ? generarNumero + 2
            : generarNumero;
    } else {
        return generarNumero + 1;
    }
};

// Función para ver las siguientes cartas tras terminar la partida
export const queHabriaPasado = () => {
    dameCarta();
}

// Crea una nueva partida
export const creaNuevaPartida = () => {

    // Habilita y cambia de nuevo la clase a "button" a los botones Pedir carta y me planto
    if (boton_pedir_carta instanceof HTMLButtonElement && boton_me_planto instanceof HTMLButtonElement) {
        boton_pedir_carta.disabled = false;
        boton_pedir_carta.className = "button";
        
        boton_me_planto.disabled = false;
        boton_me_planto.className = "button";
    }

    const boton_nueva_partida = document.getElementById("boton-nueva-partida");
    const boton_que_habria_pasasdo = document.getElementById("boton-que-habria-pasado");
    
    // Elimina los botones nueva partida y que habria pasado
    if (boton_nueva_partida instanceof HTMLButtonElement && boton_que_habria_pasasdo instanceof HTMLButtonElement) {
        boton_nueva_partida.remove();
        boton_que_habria_pasasdo.remove();
    }

    
    partidaPorDefecto();
    muestraPuntuacion();
    muestraCartaPorDefecto();
};