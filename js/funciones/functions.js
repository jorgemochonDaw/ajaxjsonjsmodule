import {
    destino1,
    destino2,
    destino3
} from './../selectores/selectores.js';
export function consultar() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'datos.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            let madrid = datos.mochonTravel.Madrid; 
            let barcelona = datos.mochonTravel.Barcelona;
            let valencia = datos.mochonTravel.Valencia;
            iterar(madrid,destino1);
            iterar(barcelona,destino2);
            iterar(valencia,destino3);
            consultarDestinos.disabled = true;
        }
    }
}

function iterar(origen,destino) {

    origen.forEach(pais => {
        let p = document.createElement('p');
        p.innerHTML = pais;
        destino.appendChild(p);
    });
}