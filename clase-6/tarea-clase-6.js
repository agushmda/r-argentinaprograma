/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
const $botonCantidad = document.querySelector('#boton-cantidad-familia');
const $botonReset = document.querySelector('#boton-reset');
const $contenedorFamilia = document.querySelector('#contenedor-familia');
const $contenedorResultadoFinal = document.querySelector('#contenedor-resultado-final')

//Resetear form
$botonReset.onclick = function(){
    document.querySelector('#contar-familiares').reset()
    while ($contenedorFamilia.firstChild) {
        $contenedorFamilia.removeChild($contenedorFamilia.firstChild);
      }
    while ($contenedorResultadoFinal.firstChild) {
    $contenedorResultadoFinal.removeChild($contenedorResultadoFinal.firstChild);
    }
}

//Funcionamiento Form - Cantidad de inputs por familiar
$botonCantidad.onclick = function (){
    let $cantidadFamilia = document.querySelector('#cantidad-familia');
    
    if($cantidadFamilia.value > 0){
        for(let i = 1; i <= $cantidadFamilia.value; i++){
            let $elementLabel = document.createElement('label');
            $elementLabel.innerHTML = 'Familiar ' + i;
            $contenedorFamilia.appendChild($elementLabel);
            
            crearElemento($contenedorFamilia, 'input', 'number', 'Edad', 'edad-input');
            crearElemento($contenedorFamilia, 'br');

        }
        crearElemento($contenedorFamilia, 'input', 'submit', 'Calcular', 'boton-calcular', '', 'Calcular')
        crearElemento($contenedorFamilia, 'input', 'submit', 'Agregar Sueldo', 'boton-agregar-sueldo', '', 'Agregar Sueldo')
        crearElemento($contenedorFamilia, 'input', 'submit', 'Quitar Sueldo', 'boton-quitar-sueldo', '', 'Quitar Sueldo')
    }
    
    //Calculo de promedio, mayor y menor de edades de la familia
    const $botonCalcular = document.querySelector('#boton-calcular')

    $botonCalcular.onclick = function(){
    let $arrayEdad = document.querySelectorAll('#edad-input');
    let edades = [];
    for(let i =0; i<$arrayEdad.length; i++){
        edades.push(Number($arrayEdad[i].value));
    }
    
    let promedio = calcularPromedio(edades)

        let $elementResultadoFinal = document.createElement('p');
        $elementResultadoFinal.innerHTML =`La edad promedio es ${promedio}, la edad mas alta es ${Math.max(...edades)}, la edad mas chica es ${Math.min(...edades)}`;
        $contenedorResultadoFinal.appendChild($elementResultadoFinal);

    }

    

}


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/


