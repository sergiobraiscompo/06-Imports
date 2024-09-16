import { partida } from "./model";
import { creaBotonNuevaPartida, creaBotonQueHabriaPasado, mensajeElement, mostrarCarta, muestraCartaPorDefecto, muestraPuntuacion, botonPedirCarta, botonMePlanto, muestraMensaje } from "./ui";


const gameOver = () => {
    if (botonPedirCarta instanceof HTMLButtonElement && botonMePlanto instanceof HTMLButtonElement) {
        botonPedirCarta.disabled = true
        botonPedirCarta.className = "disabled-button";

        botonMePlanto.disabled = true
        botonMePlanto.className = "disabled-button";
        creaBotonQueHabriaPasado();
        creaBotonNuevaPartida();
    };
    
    if (mensajeElement && !partida.partidaAcabada) {
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
    muestraPuntuacion();
};


// Genera un número aleatorio y devuelve una carta
export const dameCarta = () => {

    // Llamada a la función recibir número aleatorio
    let nuevoNumero = cartaAleatoria();

    mostrarCarta(nuevoNumero);
    sumarPuntuacion(nuevoNumero);

    if (mensajeElement && partida.puntuacion > 7.5 && !partida.partidaAcabada) {
        partida.mensaje = "Has hecho más de 7 puntos y medio, partida terminada.";
        muestraMensaje(); 
        gameOver();
    }
};


// Llama a gameover y muestra un mensaje en pantalla
export const plantarse = () => {
    gameOver();

    if (partida.puntuacion === 7.5){
        partida.mensaje = "¡Lo has clavado! ¡Enhorabuena!";
    }

    if (partida.puntuacion === 6 || partida.puntuacion === 7){
        partida.mensaje = "Casi casi ...";
    }

    if (partida.puntuacion === 5){
        partida.mensaje = "Te ha entrado el canguelo eh?";
    }

    if (partida.puntuacion <= 4){
        partida.mensaje = "Has sido muy conservador";
    }

    if (mensajeElement) {
        mensajeElement.innerHTML = partida.mensaje;
    }
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
    if (botonPedirCarta instanceof HTMLButtonElement && botonMePlanto instanceof HTMLButtonElement) {
        botonPedirCarta.disabled = false;
        botonPedirCarta.className = "button";
        
        botonMePlanto.disabled = false;
        botonMePlanto.className = "button";
    }

    const botonNuevaPartidaElement = document.getElementById("boton-nueva-partida");
    const botonQueHabriaPasasdoElement = document.getElementById("boton-que-habria-pasado");
    
    // Elimina los botones nueva partida y que habria pasado
    if (botonNuevaPartidaElement instanceof HTMLButtonElement && botonQueHabriaPasasdoElement instanceof HTMLButtonElement) {
        botonNuevaPartidaElement.remove();
        botonQueHabriaPasasdoElement.remove();
    }

    partida.puntuacion = 0,
    partida.carta = 0,
    partida.mensaje = "",
    partida.partidaAcabada = false

    muestraPuntuacion();
    muestraMensaje();
    muestraCartaPorDefecto();
};