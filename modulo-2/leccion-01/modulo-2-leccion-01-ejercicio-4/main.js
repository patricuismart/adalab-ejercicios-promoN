// Aquí va el código JavaScript
'use strict';

// Obtenemos el elemento con el que queremos trabajar usando document.querySelector()
const titleElement = document.querySelector('.title');
let adalaberName = document.querySelector('.adalaber-1');

// Cambiamos su contenido con innerHTML
titleElement.innerHTML = titleElement.innerHTML+ adalaberName.innerHTML;