import { partida } from "./model";
import { creaBotonNuevaPartida, creaBotonQueHabriaPasado, mensaje_element, mostrarCarta, muestraCartaPorDefecto, muestraPuntuacion, boton_pedir_carta, boton_me_planto, muestraMensaje } from "./ui";


const gameOver = () => {
    if (boton_pedir_carta instanceof HTMLButtonElement && boton_me_planto instanceof HTMLButtonElement) {
        boton_pedir_carta.disabled = true
        boton_pedir_carta.className = "disabled-button";

        boton_me_planto.disabled = true
        boton_me_planto.className = "disabled-button";
        creaBotonQueHabriaPasado();
        creaBotonNuevaPartida();
    };
    
    if (mensaje_element && !partida.partidaAcabada) {
        partida.partidaAcabada = true;
    }

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

    partida.puntuacion += puntuacionCarta;
    muestraPuntuacion();
};


// Genera un número aleatorio y devuelve una carta
export const dameCarta = () => {

    // Llamada a la función recibir número aleatorio
    let nuevo_numero = cartaAleatoria();

    mostrarCarta(nuevo_numero);
    sumarPuntuacion(nuevo_numero);

    if (mensaje_element && mensaje_element != null && mensaje_element != undefined && partida.puntuacion > 7.5 && !partida.partidaAcabada) {
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

    if (partida.puntuacion >= 6 || partida.puntuacion <= 7){
        partida.mensaje = "Casi casi ...";
    }

    if (partida.puntuacion === 5){
        partida.mensaje = "Te ha entrado el canguelo eh?";
    }

    if (partida.puntuacion <= 4){
        partida.mensaje = "Has sido muy conservador";
    }

    if (mensaje_element && mensaje_element != null && mensaje_element != undefined) {
        mensaje_element.innerHTML = partida.mensaje;
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
    
    const boton_que_habria_pasado = document.getElementById("boton-que-habria-pasado");
    console.log("boton que habria pasado existe") 
    if (boton_que_habria_pasado instanceof HTMLButtonElement && boton_que_habria_pasado != null && boton_que_habria_pasado != undefined) {
        boton_que_habria_pasado.disabled = true;
        boton_que_habria_pasado.disabled = true;
        boton_que_habria_pasado.className = "disabled-button"
        console.log("Boton que habria pasado deshabilitado")
    }
}

// Crea una nueva partida
export const creaNuevaPartida = () => {

    // Habilita y cambia de nuevo la clase a "button" a los botones Pedir carta y me planto
    if (boton_pedir_carta instanceof HTMLButtonElement && boton_pedir_carta != undefined && boton_pedir_carta != null && boton_me_planto instanceof HTMLButtonElement && boton_me_planto != null && boton_me_planto != undefined) {
        boton_pedir_carta.disabled = false;
        boton_pedir_carta.className = "button";
        
        boton_me_planto.disabled = false;
        boton_me_planto.className = "button";
    }

    const boton_nueva_partida_element = document.getElementById("boton-nueva-partida");
    const boton_que_habria_pasasdo_element = document.getElementById("boton-que-habria-pasado");
    
    // Elimina los botones nueva partida y que habria pasado
    if (boton_nueva_partida_element instanceof HTMLButtonElement && boton_nueva_partida_element != null && boton_nueva_partida_element != undefined && boton_que_habria_pasasdo_element instanceof HTMLButtonElement) {
        boton_nueva_partida_element.remove();
        boton_que_habria_pasasdo_element.remove();
    }

    partida.puntuacion = 0,
    partida.carta = 0,
    partida.mensaje = "",
    partida.partidaAcabada = false

    muestraPuntuacion();
    muestraMensaje();
    muestraCartaPorDefecto();
};