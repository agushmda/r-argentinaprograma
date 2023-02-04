// TAREA: Tenemos 2 funciones de la tarea anterior -- 'sumar' y 'restar'
//      Vamos a decirle a la máquina qué función tiene que correr,
//      dependiendo del operador artmético (+, -, /, *, etc.)
//
//      Si el (IF) operador es '+', vamos a usar la función para sumar.
//      Si no (ELSE), vamos a usar la función para restar.
//
// Paso 1 - Crear una variable llamada 'operador' y asignarle el valor '+'.
// Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
// Paso 3 - Crear una condición if/else basada en el operador que tenemos.
//
// Si (if) tenemos un operador igual a '+', llamamos (ejecutamos. sumar(1,2)) la función
// 'sumar' con nuestros números (las variables del paso 2).
// Si no (else), tenemos que llamar la función 'restar', con nuestros números (las variables del paso 2).
//
// No se olviden de hacer un console.log para ver el resultado!
//

// TAREA: Cambiar el operador a '-', y fijarse que llame a la función 'restar' en vez de a la de 'sumar'.

function sumar(n1, n2) {
    return n1 + n2;
}

function restar(n1, n2) {
    return n1 - n2;
}

let operador = prompt('Elegí un operador entre "+" y "-"');
let numero1 = 10;
let numero2 = 5;

if (operador == '+') {
    console.log('el operador es "+" y el resultado es ' + sumar(numero1, numero2));
} else if (operador == '-') {
    console.log('el operador es "-" y el resultado es ' + restar(numero1, numero2));
} else {
    console.log('Elegiste un operador incorrecto.')
}

