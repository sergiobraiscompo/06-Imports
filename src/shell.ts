import { botonMePlanto, botonPedirCarta } from "./constantes"
import { handlePedirCarta } from "./main";
import { plantarse } from "./motor"
import { creaNuevaPartida } from "./ui";

export const events = () => {
    if (
        botonMePlanto && botonMePlanto != undefined && botonMePlanto != null &&
        botonPedirCarta && botonPedirCarta != undefined && botonPedirCarta != null
    ) {
        botonPedirCarta.addEventListener("click", handlePedirCarta);
        botonMePlanto.addEventListener("click", plantarse)
    }
}

document.addEventListener("DOMContentLoaded", () => { creaNuevaPartida(), events() });