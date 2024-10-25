import { botonMePlanto, botonPedirCarta, cartaImgElement, cartas, contenedorBotonesElement, mensajeElement, puntuacionElement } from "./constantes";
import { partida } from "./model";
import { queHabriaPasado, reiniciaElementosPartida } from "./motor";

export const muestraPuntuacion = () => {
    if (puntuacionElement) {
        puntuacionElement.innerHTML = "Puntuación: " + partida.puntuacion.toString();
    }
};

export const muestraMensaje = () => {
    if (mensajeElement) {
        mensajeElement.innerHTML = partida.mensaje;
    }
};


export const mostrarCarta = (carta: number): void => {

    let rutaCarta = "";
    rutaCarta = cartas[carta];

    // Condicional que comprueba que los elementos sean instancias de HTMLImageElement
    if (cartaImgElement && cartaImgElement != null && cartaImgElement != undefined) {
        cartaImgElement.src = rutaCarta;
    }
};


export const reiniciaBotones = () => {
    // Habilita y cambia de nuevo la clase a "button" a los botones Pedir carta y me planto
    if (
        botonPedirCarta && botonPedirCarta != null && botonPedirCarta != undefined &&
        botonMePlanto && botonMePlanto != null && botonMePlanto != undefined
    ) {
        botonPedirCarta.disabled = false;
        botonPedirCarta.className = "button";

        botonMePlanto.disabled = false;
        botonMePlanto.className = "button";
    }

    const botonNuevaPartidaElement = document.getElementById("boton-nueva-partida");
    const botonQueHabriaPasadoElement = document.getElementById("boton-que-habria-pasado");
    // Elimina los botones nueva partida y que habria pasado
    if (
        botonNuevaPartidaElement && botonNuevaPartidaElement != null && botonNuevaPartidaElement != undefined &&
        botonQueHabriaPasadoElement && botonQueHabriaPasadoElement != null && botonQueHabriaPasadoElement != undefined
    ) {
        botonNuevaPartidaElement.remove();
        botonQueHabriaPasadoElement.remove();
    }
}

export const creaBotonNuevaPartida = () => {
    const nuevaPartidaBoton = document.createElement("button");
    nuevaPartidaBoton.innerText = "Nueva Partida";
    nuevaPartidaBoton.id = "boton-nueva-partida";
    nuevaPartidaBoton.className = "boton-nueva-partida";
    nuevaPartidaBoton.onclick = () => creaNuevaPartida();

    contenedorBotonesElement?.appendChild(nuevaPartidaBoton);
};


export const creaBotonQueHabriaPasado = () => {
    const queHabriaPasadoBoton = document.createElement("button");
    queHabriaPasadoBoton.innerText = "¿Qué habría pasado?";
    queHabriaPasadoBoton.id = "boton-que-habria-pasado";
    queHabriaPasadoBoton.className = "boton-que-habria-pasado";
    queHabriaPasadoBoton.onclick = () => queHabriaPasado();

    contenedorBotonesElement?.appendChild(queHabriaPasadoBoton);
};

export const creaNuevaPartida = () => {
    reiniciaElementosPartida();

    muestraPuntuacion();
    mostrarCarta(partida.carta)
    muestraMensaje();
}