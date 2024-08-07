// Objeto Partida
interface Partida {
    puntuacion: number;
    carta: number;
    mensaje: string;
    partidaAcabada: boolean
}

// Nueva partida
export const partida: Partida = {
    puntuacion: 0,
    carta: 0,
    mensaje: "",
    partidaAcabada: false
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