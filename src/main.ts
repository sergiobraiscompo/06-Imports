import { dameCarta, sumarPuntuacion } from "./motor";
import "./shell";
import { mostrarCarta } from "./ui";

export const handlePedirCarta = () => {
    const nuevaCarta = dameCarta();
    mostrarCarta(nuevaCarta);

    sumarPuntuacion(nuevaCarta);
}