import { botonMePlanto, botonPedirCarta } from "./constantes";
import { partida } from "./model";

const gameOver = () => {
    if (partida.partidaAcabada) {
        partida.partidaAcabada = true;
    }
};

// Suma la puntuación de la carta
export const sumarPuntuacion = (carta: number) => {
    let puntuacionCarta = 0;

    // Devualve el valor de la carta
    switch (carta) {
        case 1: {
            puntuacionCarta = 1;
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

    partida.puntuacion += puntuacionCarta;
};


// Genera un número aleatorio y devuelve una carta
export const dameCarta = () => {

    // Llamada a la función recibir número aleatorio
    let nuevoNumero = cartaAleatoria();

    sumarPuntuacion(nuevoNumero);

    if (partida.puntuacion > 7.5 && !partida.partidaAcabada) {
        partida.mensaje = "Has hecho más de 7 puntos y medio, partida terminada.";
        gameOver();
    }
};


// Llama a gameover y muestra un mensaje en pantalla
export const plantarse = () => {
    gameOver();

    if (partida.puntuacion === 7.5) {
        partida.mensaje = "¡Lo has clavado! ¡Enhorabuena!";
    }

    if (partida.puntuacion === 6 || partida.puntuacion === 7) {
        partida.mensaje = "Casi casi ...";
    }

    if (partida.puntuacion === 5) {
        partida.mensaje = "Te ha entrado el canguelo eh?";
    }

    if (partida.puntuacion <= 4) {
        partida.mensaje = "Has sido muy conservador";
    }
};

// Generar carta aleatoria
export const cartaAleatoria = (): number => {
    let generarNumero = Math.floor(Math.random() * (12 - 1));
    if (generarNumero != 0) {
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

