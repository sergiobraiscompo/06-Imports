import { cambiaPuntuacion} from "./model";
import { dameCarta, muestraPuntuacion } from "./ui";

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
    if (boton_pedir_carta instanceof HTMLButtonElement && mePlantoBoton instanceof HTMLButtonElement) {
        boton_pedir_carta.disabled = false;
        boton_pedir_carta.className = "button";
        
        mePlantoBoton.disabled = false;
        mePlantoBoton.className = "button";
    }

    // Elimina los botones nueva partida y que habria pasado
    if (boton_nueva_partida instanceof HTMLButtonElement && boton_que_habria_pasasdo instanceof HTMLButtonElement) {
        boton_nueva_partida.remove();
        boton_que_habria_pasasdo.remove();
    }


    // Vacía el campo del mensaje
    if (mensaje_element instanceof HTMLDivElement)
    mensaje_element.innerHTML = "";

    puntuacion = 0;
    muestraPuntuacion();
    muestraCartaPorDefecto();
};