//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


const $botonCantidad = document.querySelector('#boton-cantidad-videos');
const $botonReset = document.querySelector('#boton-reset');
const $contenedorVideos = document.querySelector('#contenedor-videos');
const $contenedorResultadoFinal = document.querySelector('#contenedor-resultado-final')

$botonReset.onclick = function(){
    document.querySelector('#contar-clases').reset()
    while ($contenedorVideos.firstChild) {
        $contenedorVideos.removeChild($contenedorVideos.firstChild);
      }
    while ($contenedorResultadoFinal.firstChild) {
    $contenedorResultadoFinal.removeChild($contenedorResultadoFinal.firstChild);
    }
}

$botonCantidad.onclick = function (){
    let $cantidadVideos = document.querySelector('#cantidad-videos');
    
    if($cantidadVideos.value > 0){
        for(let i = 1; i <= $cantidadVideos.value; i++){
            let $elementLabel = document.createElement('label');
            $elementLabel.innerHTML = 'Video ' + i;
            $contenedorVideos.appendChild($elementLabel);

            let $elementInputHoras = document.createElement('input');
            $elementInputHoras.setAttribute('type', 'number');
            $elementInputHoras.setAttribute('placeholder', 'Horas');
            $elementInputHoras.setAttribute('id', 'time-input');
            $contenedorVideos.appendChild($elementInputHoras);

            let $elementInputMinutos = document.createElement('input');
            $elementInputMinutos.setAttribute('type', 'number');
            $elementInputMinutos.setAttribute('placeholder', 'Minutos');
            $elementInputMinutos.setAttribute('id', 'time-input');
            $contenedorVideos.appendChild($elementInputMinutos);

            let $elementInputSegundos = document.createElement('input');
            $elementInputSegundos.setAttribute('type', 'number');
            $elementInputSegundos.setAttribute('placeholder', 'Segundos');
            $elementInputSegundos.setAttribute('id', 'time-input');
            $contenedorVideos.appendChild($elementInputSegundos);

            let $elementBreak = document.createElement('br');
            $contenedorVideos.appendChild($elementBreak);

        }
        let $elementSubmit = document.createElement('input');
        $elementSubmit.setAttribute('type', 'submit');
        $elementSubmit.setAttribute('value', 'Calcular');
        $elementSubmit.setAttribute('id', 'boton-calcular');
        $contenedorVideos.appendChild($elementSubmit);
    }
    
    const $botonCalcular = document.querySelector('#boton-calcular')

    $botonCalcular.onclick = function(){
    let $arrayTiempo = document.querySelectorAll('#time-input');
    
        let totalSegundos = 0
        for(let i = 0; i < $arrayTiempo.length; i += 3){
            let horas = parseInt($arrayTiempo[i].value) || 0;
            let minutos = parseInt($arrayTiempo[i + 1].value) || 0;
            let segundos = parseInt($arrayTiempo[i + 2].value) || 0;

            totalSegundos += (horas * 3600) + (minutos * 60) + segundos;
        }

        let totalMinutos = Math.floor((totalSegundos % (60 * 60)) / 60);  
        let totalHoras = Math.floor(totalSegundos / (60 * 60));
        totalSegundos = totalSegundos % 60;

        let resultado = totalHoras + 'h ' + totalMinutos + 'm ' + totalSegundos + 's'

        let $elementResultadoFinal = document.createElement('p');
        $elementResultadoFinal.innerHTML = "El resultado es: ";
        $contenedorResultadoFinal.appendChild($elementResultadoFinal);

        let $resultadoStrong = document.createElement('strong');
        $resultadoStrong.innerHTML = resultado;
        $elementResultadoFinal.appendChild($resultadoStrong);

    }
}

