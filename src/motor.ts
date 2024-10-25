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

    return nuevoNumero;
};


// Llama a gameover y muestra un mensaje en pantalla
export const plantarse = () => {
    if (partida.puntuacion > 7.5 && !partida.partidaAcabada) {
        partida.mensaje = "Has hecho más de 7 puntos y medio, partida terminada.";
        gameOver();
    }

    if (partida.puntuacion === 7.5) {
        partida.mensaje = "¡Lo has clavado! ¡Enhorabuena!";
        gameOver();
    }

    if (partida.puntuacion === 6 || partida.puntuacion === 7) {
        partida.mensaje = "Casi casi ...";
        gameOver();
    }

    if (partida.puntuacion === 5) {
        partida.mensaje = "Te ha entrado el canguelo eh?";
        gameOver();
    }

    if (partida.puntuacion <= 4) {
        partida.mensaje = "Has sido muy conservador";
        gameOver();
    }
};

export const cartaAleatoria = (): number => {
    let generarNumero = Math.floor(Math.random() * (10 - 1));
    return generarNumero;
};

// Función para ver las siguientes cartas tras terminar la partida
export const queHabriaPasado = () => {
    dameCarta();
}

export const reiniciaElementosPartida = () => {
    partida.puntuacion = 0;
    partida.carta = 0;
    partida.mensaje = "";
    partida.partidaAcabada = false;
}