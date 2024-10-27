import { partida } from "./model";
import { dameCarta, gameOver, plantarse, reiniciaElementosPartida } from "./motor";
import "./shell";
import { gestionaBotonesPartidaTerminada, mostrarCarta, muestraMensaje, muestraPuntuacion, creaNuevaInterfazPartida } from "./ui";

export const handlePedirCarta = () => {
    const nuevaCarta = dameCarta();
    mostrarCarta(nuevaCarta);
    muestraPuntuacion();
    gameOver();

    if (partida.partidaAcabada) {
        gestionaBotonesPartidaTerminada()
        muestraMensaje();
    }
}

export const handlePlantarse = () => {
    plantarse();
    muestraMensaje();
    gestionaBotonesPartidaTerminada();
};

export const handleCreaNuevaPartida = () => {
    reiniciaElementosPartida();
    creaNuevaInterfazPartida();
}

export const handleQueHabriaPasado = () => {
    const nuevaCarta = dameCarta();
    mostrarCarta(nuevaCarta);
    muestraPuntuacion();
}