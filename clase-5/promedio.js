//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $botonResultado = document.querySelector('#boton-resultado')
const $notas = document.querySelectorAll('#li-notas')

function calcularPromedio(array){
    let contador = 0;
    let promedio
    for(let i=0; i < array.length; i++){
        contador += array[i];
    }
    promedio = contador / array.length;
    return Math.round((promedio * 100) / 100);
}

$botonResultado.onclick = function (){
    // Promedio
    let arrayNotas = [];
    for(let i=0; i<$notas.length; i++){
        arrayNotas.push(Number($notas[i].innerText))
    }

    const $resultado = document.querySelector('#resultado');
    let resultado = calcularPromedio(arrayNotas);
    
    $resultado.innerHTML = `El promedio es: ${resultado}`;

    // Numero mas pequeño
    let minimo = Math.min(...arrayNotas);
    $resultado.innerHTML += `<br>El número más pequeño es: ${minimo}`;

    // Numero mas grande
    let maximo = Math.max(...arrayNotas);
    $resultado.innerHTML += `<br>El número más grande es: ${maximo}`;

    // Numero mas frecuente
    let countArray = [];
    let maxCount = 0;
    let numeroMasFrecuente;

    for( let i = 0; i < arrayNotas.length; i++){
        let numero = arrayNotas[i];

        if(countArray[numero] === undefined){
            countArray[numero] = 1;
        } else{
            countArray[numero]++
        }

        if(countArray[numero] > maxCount){
            maxCount = countArray[numero];
            numeroMasFrecuente = numero;
        }
    }

    $resultado.innerHTML += `<br>El número más frecuente es: ${numeroMasFrecuente}`;
}