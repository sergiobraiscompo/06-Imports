interface Partida {
    puntuacion: number;
    carta: number;
    mensaje: string;
    partidaAcabada: boolean
}

const partidaPorDefecto: Partida = {
    puntuacion: 0,
    carta: 0,
    mensaje: "",
    partidaAcabada: false
}

export const creaNuevaPartida = () => { const partida = new partidaPorDefecto}