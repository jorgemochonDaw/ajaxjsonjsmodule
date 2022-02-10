import { consultarDestinos } from './../selectores/selectores.js';
import { consultar } from './../funciones/functions.js';
class MochonTravel {
    constructor() {
        this.eventos();
    }

    eventos() {
        consultarDestinos.addEventListener('click',consultar);
    }
}

export default MochonTravel;