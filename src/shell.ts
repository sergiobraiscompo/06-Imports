import { queHabriaPasado } from "./motor";
import {dameCarta, plantarse} from "./ui"


// Gestionar click
export const handle_click = (boton: string) => {
    switch (boton) {
        case "pedirCarta": {
            dameCarta();
            break;
        }
        case "mePlanto": {
            plantarse();
        }
        case "queHabriaPasado": {
            queHabriaPasado();
            break;
        }
    }
};