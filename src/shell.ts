import { botonMePlanto, botonPedirCarta } from "./constantes"
import { dameCarta, plantarse } from "./motor"

export const events = () => {
    if (
        botonMePlanto && botonMePlanto != undefined && botonMePlanto != null &&
        botonPedirCarta && botonPedirCarta != undefined && botonPedirCarta != null
    ) {
        botonPedirCarta.addEventListener("click", dameCarta);
        botonMePlanto.addEventListener("click", plantarse)
    }
}