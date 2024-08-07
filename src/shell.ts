import { queHabriaPasado, dameCarta, plantarse } from "./motor";


// Gestionar click
export const handle_click = (boton: string) => {
    switch (boton) {
        case "pedirCarta": {
            dameCarta();
            break;
        }
        case "mePlanto": {
            plantarse();
            break;
        }
        case "queHabriaPasado": {
            queHabriaPasado();
            break;
        }
    }
};