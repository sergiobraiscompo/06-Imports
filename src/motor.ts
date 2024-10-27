import { partida } from "./model";

export const gameOver = () => {
    if (partida.puntuacion > 7.5 && !partida.partidaAcabada) {
        partida.mensaje = "Has hecho más de 7 puntos y medio, partida terminada.";
        partida.partidaAcabada = true;
    }
};

const sumarPuntuacion = (carta: number) => {
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

        case 8: {
            puntuacionCarta = 0.5;
            break;
        }

        case 9: {
            puntuacionCarta = 0.5;
            break;
        }

        case 10: {
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

    return nuevoNumero;
};


// Llama a gameover y muestra un mensaje en pantalla
export const plantarse = () => {
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

const cartaAleatoria = (): number => {
    let generarNumero = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    return generarNumero;
};

export const reiniciaElementosPartida = () => {
    partida.puntuacion = 0;
    partida.carta = 0;
    partida.mensaje = "";
    partida.partidaAcabada = false;
}