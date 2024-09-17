import { dameCarta, plantarse } from "./motor";
import { botonMePlanto, botonPedirCarta } from "./constantes";

export const eventos = () => {
    if (
        botonPedirCarta && botonPedirCarta != undefined && botonPedirCarta != null 
        && botonMePlanto && botonMePlanto != undefined && botonMePlanto != null
    ) {
        botonPedirCarta.addEventListener("click", () => dameCarta());
        botonMePlanto.addEventListener("click", () => plantarse());
    }
}