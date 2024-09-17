import { partida } from "./model";
import { creaNuevaPartida, dameCarta } from "./motor";
import { botonMePlanto, botonPedirCarta, cartaImgElement, cartas, contenedorBotonesElement, mensajeElement, puntuacionElement } from "./constantes";

// Muestra la parte trasera de las cartas
export const muestraCartaPorDefecto = () => {
    if (cartaImgElement instanceof HTMLImageElement) {
        cartaImgElement.src = cartas[0];
    }
};

// Función mostrar puntuación
export const muestraPuntuacion = () => {
    if (puntuacionElement) {
        puntuacionElement.innerHTML =  "Puntuación: "+ partida.puntuacion.toString();
    }
};

// Función mostrar puntuación
export const muestraMensaje = () => {
    if (mensajeElement) {
        mensajeElement.innerHTML =  partida.mensaje;
    }
};


// Crea el botón nueva partida
export const creaBotonNuevaPartida = () => {
    const nuevaPartidaBoton = document.createElement("button");
    nuevaPartidaBoton.innerText = "Nueva Partida";
    nuevaPartidaBoton.id = "boton-nueva-partida";
    nuevaPartidaBoton.className = "boton-nueva-partida";
    nuevaPartidaBoton.onclick = () => creaNuevaPartida();

    // Añadiendo el botón nueva partida en pantalla
    contenedorBotonesElement?.appendChild(nuevaPartidaBoton);
};


// Crea botón queHabriaPasado
export const creaBotonQueHabriaPasado = () => {
    const queHabriaPasadoBoton = document.createElement("button");

    queHabriaPasadoBoton.innerText = "¿Qué habría pasado?";
    queHabriaPasadoBoton.id = "boton-que-habria-pasado";
    queHabriaPasadoBoton.className = "boton-que-habria-pasado";
    queHabriaPasadoBoton.onclick = () => dameCarta();

    // Añadiendo el botón nueva partida en pantalla
    if ( contenedorBotonesElement && contenedorBotonesElement != undefined && contenedorBotonesElement != null ) {
        contenedorBotonesElement.appendChild(queHabriaPasadoBoton);
    } else {
        console.error("No se ha encontrado el elemento contenedorBotonesElement")
    }
};


// Muestra la carta actual
export const mostrarCarta = (carta: number) : void => {
    const rutaCarta = cartas[carta];

    if (cartaImgElement instanceof HTMLImageElement) {
        cartaImgElement.src = rutaCarta;
    }
};

export const reiniciaBotones = () => {
    const botonNuevaPartidaElement = document.getElementById("boton-nueva-partida");
    const botonQueHabriaPasasdoElement = document.getElementById("boton-que-habria-pasado");

    // Habilita y cambia de nuevo la clase a "button" a los botones Pedir carta y me planto
    if (botonPedirCarta instanceof HTMLButtonElement && botonMePlanto instanceof HTMLButtonElement) {
        botonPedirCarta.disabled = false;
        botonPedirCarta.className = "button";
        
        botonMePlanto.disabled = false;
        botonMePlanto.className = "button";
    }
    
    // Elimina los botones nueva partida y que habria pasado
    if (botonNuevaPartidaElement instanceof HTMLButtonElement && botonQueHabriaPasasdoElement instanceof HTMLButtonElement) {
        console.log("eliminando botones extra");
        
        botonNuevaPartidaElement.remove();
        botonQueHabriaPasasdoElement.remove();
    }
}