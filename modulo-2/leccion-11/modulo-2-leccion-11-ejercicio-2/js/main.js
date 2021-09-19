'use strict';

const buton = document.querySelector('.js_buton');
const input = document.querySelector('.js_input');
let result = document.querySelector('.js_result');

function getName() {
  let character = input.value;
  fetch(`https://swapi.dev/api/people/?search=${character}`)
    .then((response) => response.json())
    .then((data) => {
      debugger;

      for (const pepino of data.results) {
        result.innerHTML += `<li>Personaje : ${pepino.name}. Género: ${pepino.gender}</li>`;
      }
    });
}
buton.addEventListener('click', getName);
