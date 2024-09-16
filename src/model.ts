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
export const asCopas = "1_as-copas.jpg"

// 2 de copas
export const dosCopas = "2_dos-copas.jpg"

// 3 de copas
export const tresCopas = "3_tres-copas.jpg"

// 4 de copas
export const cuatroCopas = "4_cuatro-copas.jpg"

// 5 de copas
export const cincoCopas = "5_cinco-copas.jpg"

// 6 de copas
export const seisCopas = "6_seis-copas.jpg"

// 7 de copas
export const sieteCopas = "7_siete-copas.jpg"

// Sota de copas
export const sotaCopas = "10_sota-copas.jpg"

// Caballo de copas
export const caballoCopas = "11_caballo-copas.jpg"

// Rey de copas
export const reyCopas = "12_rey-copas.jpg";

// Carta por defecto
export const cartaBocaAbajo = "back.jpg";

// Elemento imagen carta HTML
export const cartaImgElement = document.getElementById("carta");

// Carpeta de imágenes
export const cartasFolder = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/";