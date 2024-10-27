import { botonMePlanto, botonPedirCarta } from "./constantes"
import { handlePedirCarta, handlePlantarse } from "./main";
import { creaNuevaInterfazPartida } from "./ui";

export const events = () => {
    if (
        botonMePlanto && botonMePlanto != undefined && botonMePlanto != null &&
        botonPedirCarta && botonPedirCarta != undefined && botonPedirCarta != null
    ) {
        botonPedirCarta.addEventListener("click", handlePedirCarta);
        botonMePlanto.addEventListener("click", handlePlantarse)
    }
}

document.addEventListener("DOMContentLoaded", () => { creaNuevaInterfazPartida(), events() });