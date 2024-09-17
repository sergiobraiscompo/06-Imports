import { eventos } from "./shell";
import { muestraCartaPorDefecto, muestraPuntuacion } from "./ui";

document.addEventListener("DOMContentLoaded", () => { muestraCartaPorDefecto(), muestraPuntuacion(), eventos() });