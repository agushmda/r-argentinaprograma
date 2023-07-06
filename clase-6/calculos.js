//Calcula Promedio
function calcularPromedio(edades){
    let contador = 0;
    let resultado
    for(let i=0; i < edades.length; i++){
        contador += edades[i];
    }
    resultado = contador / edades.length;
    return Math.round((resultado * 100) / 100);

}

//Crear Inputs

function crearElemento(contenedor, label, type, placeholder, id, clase, value){
    let $elementInput = document.createElement(label);
            $elementInput.setAttribute('type', type);
            $elementInput.setAttribute('placeholder', placeholder);
            $elementInput.setAttribute('id', id);
            $elementInput.setAttribute('class', clase);
            $elementInput.setAttribute('value', value);
            contenedor.appendChild($elementInput);
}