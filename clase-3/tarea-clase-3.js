// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.


/*
//TAREA 1
const nombreUsuario = prompt('Como te llamas?');

if (nombreUsuario.toLowerCase() === 'agustin'){
    console.log(`Hola, Tocayo! Yo tambien me llamo ${nombreUsuario}`)
} else if (nombreUsuario.toLowerCase() === 'nacho'){
    console.log(`Tengo un conocido que tambien se llama ${nombreUsuario}!`);
} else {
    console.log(`Hola ${nombreUsuario}!`);
}

//TAREA 2
const edadUsuario = prompt('Cuantos años tenes?');

if(edadUsuario > 25){
    console.log('Tenes mas años que yo!')
} else if(edadUsuario < 25){
    console.log('Tenes menos años que yo!')
} else {
    console.log('Tenemos la misma edad!')
}
*/
//Tarea 3

let documentoUsuario = prompt('Tenes documento?');

if(documentoUsuario.toLowerCase() === 'si'){
    let edadUsuario = Number(prompt('Cuantos años tenes?'));
        if(edadUsuario >= 18){
            console.log('Podes entrar al bar');
        } else {
            console.log('No podes entrar al bar :(');
        }
} else if(documentoUsuario.toLowerCase() === 'no'){
    console.log('No podes entrar al bar por indocumentado.');
} else{
    console.log('No entendi la respuesta, por favor elegi un valor entre "No" y "Si"');
    documentoUsuario = prompt('Volvi a elegir una respuesta correcta por favor (Si/No)')
}