//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*
* */

const $botonSubmit = document.querySelector('#ingresar');
const $userName = document.querySelector('#nombre-usuario')
const $userSecondName = document.querySelector('#segundo-nombre-usuario')
const $userSurname = document.querySelector('#apellido-usuario')
const $userAge = document.querySelector('#edad-usuario')


// Muestra la informacion del usuario.
$botonSubmit.onclick = function mostrarInformacionUserYSaludar(){
    let $placeholder = document.querySelector('#placeholderUserInfo')
    let userInfoArray = [$userName, $userSecondName, $userSurname, $userAge]
    let $resultado = document.querySelector('#resultado');

    if ($placeholder.querySelectorAll("div").length > 0) {
        while ($placeholder.firstChild) {
          $placeholder.removeChild($placeholder.firstChild);
        }
    }

    for(let i = 0; i < userInfoArray.length; i++){
        let $element = document.createElement('div');
        $element.appendChild(document.createTextNode(userInfoArray[i].value));
        $placeholder.appendChild($element);
    }

    $resultado.innerText = 'Bienvenido ' + $userName.value + '!';
}
