'use strict';


const userName  = 'Ana';
document.querySelector ('.js_name').innerHTML = userName;


if (userName !=='Patricia') {
  console.log('Lo siento pero el usuario que has introducido no está registrado'); 
  //Esta línea se ejecuta solo si se cumple la condición
}