import { botonMePlanto, botonPedirCarta, cartaImgElement, cartas, contenedorBotonesElement, mensajeElement, puntuacionElement } from "./constantes";
import { handleCreaNuevaPartida, handleQueHabriaPasado } from "./main";
import { partida } from "./model";

const creaBotonNuevaPartida = () => {
    const nuevaPartidaBoton = document.createElement("button");
    nuevaPartidaBoton.innerText = "Nueva Partida";
    nuevaPartidaBoton.id = "boton-nueva-partida";
    nuevaPartidaBoton.className = "boton-nueva-partida";
    nuevaPartidaBoton.onclick = () => handleCreaNuevaPartida();

    contenedorBotonesElement?.appendChild(nuevaPartidaBoton);
};


const creaBotonQueHabriaPasado = () => {
    const queHabriaPasadoBoton = document.createElement("button");
    queHabriaPasadoBoton.innerText = "¿Qué habría pasado?";
    queHabriaPasadoBoton.id = "boton-que-habria-pasado";
    queHabriaPasadoBoton.className = "boton-que-habria-pasado";
    queHabriaPasadoBoton.onclick = () => handleQueHabriaPasado();

    contenedorBotonesElement?.appendChild(queHabriaPasadoBoton);
};

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
    // Condicional que comprueba que los elementos sean instancias de HTMLImageElement
    if (cartaImgElement && cartaImgElement != null && cartaImgElement != undefined) {
        cartaImgElement.src = cartas[carta];
    }
};


export const gestionaBotonesPartidaTerminada = () => {
    // Habilita botones "pedir carta" y "plantarse"
    if (
        botonPedirCarta && botonPedirCarta != null && botonPedirCarta != undefined &&
        botonMePlanto && botonMePlanto != null && botonMePlanto != undefined
    ) {
    
        botonPedirCarta.disabled = true;
        botonPedirCarta.className = "disabled-button";

        botonMePlanto.disabled = true;
        botonMePlanto.className = "disabled-button";
    }

    // Crea los botones "nueva partida" y "que habría pasado"
    try {
        creaBotonNuevaPartida();
        creaBotonQueHabriaPasado();
    } catch (error) {
        console.error(error);
    }
}

const reiniciaBotones = () => {
    // Deshabilita botones "pedir carta" y "plantarse"
    if (
        botonPedirCarta && botonPedirCarta != null && botonPedirCarta != undefined &&
        botonMePlanto && botonMePlanto != null && botonMePlanto != undefined
    ) {
        botonPedirCarta.disabled = false;
        botonPedirCarta.className = "button";

        botonMePlanto.disabled = false;
        botonMePlanto.className = "button";
    }
    
    // Elimina botones "nueva partida" y "que habría pasado"
    const botonNuevaPartidaElement = document.getElementById("boton-nueva-partida");
    const botonQueHabriaPasadoElement = document.getElementById("boton-que-habria-pasado");
   
    if (
        botonNuevaPartidaElement && botonNuevaPartidaElement != null && botonNuevaPartidaElement != undefined &&
        botonQueHabriaPasadoElement && botonQueHabriaPasadoElement != null && botonQueHabriaPasadoElement != undefined
    ) {
        botonNuevaPartidaElement.remove();
        botonQueHabriaPasadoElement.remove();
    }
}

export const creaNuevaInterfazPartida = () => {
    reiniciaBotones();
    muestraPuntuacion();
    mostrarCarta(partida.carta)
    muestraMensaje();
}