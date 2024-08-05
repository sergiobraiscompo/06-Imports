import { boton_nueva_partida, boton_que_habria_pasasdo } from "./ui";

// Objeto Partida
interface Partida {
    puntuacion: number;
    carta: number;
    mensaje: string;
}

// Nueva partida
export const nuevaPartida: Partida = {
    puntuacion: 0,
    carta: 0,
    mensaje: "",
}

// Cartas del juego
// AS de copas
export const as_copas = "1_as-copas.jpg"

// 2 de copas
export const dos_copas = "2_dos-copas.jpg"

// 3 de copas
export const tres_copas = "3_tres-copas.jpg"

// 4 de copas
export const cuatro_copas = "4_cuatro-copas.jpg"

// 5 de copas
export const cinco_copas = "5_cinco-copas.jpg"

// 6 de copas
export const seis_copas = "6_seis-copas.jpg"

// 7 de copas
export const siete_copas = "7_siete-copas.jpg"

// Sota de copas
export const sota_copas = "10_sota-copas.jpg"

// Caballo de copas
export const caballo_copas = "11_caballo-copas.jpg"

// Rey de copas
export const rey_copas = "12_rey-copas.jpg";

// Carta_boca_abajo
export const carta_boca_abajo = "back.jpg";

// Elemento imagen carta HTML
export const carta_img_element = document.getElementById("carta");

// Carpeta de imágenes
export const cartas_folder = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/";


// Suma la puntuación de la carta
export const cambiaPuntuacion = (nueva_puntuacion: number) => {
    puntuacion += nueva_puntuacion;
    console.log(puntuacion);
}

export const partidaPorDefecto = () => {
    puntuacion = nuevaPartida.puntuacion;
    carta = nuevaPartida.carta;
    puntuacion = nuevaPartida.puntuacion;

    // Elimina los botones nueva partida y que habria pasado
    if (boton_nueva_partida instanceof HTMLButtonElement && boton_que_habria_pasasdo instanceof HTMLButtonElement) {
        boton_nueva_partida.remove();
        boton_que_habria_pasasdo.remove();
    }
}

export let puntuacion = nuevaPartida.puntuacion;
export let carta = nuevaPartida.carta;
export let mensaje = nuevaPartida.mensaje;