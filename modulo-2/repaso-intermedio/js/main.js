'use strict';

//Declarar variables
const update = document.querySelector('.js_update');
const container = document.querySelector('.container');
const selectEl = document.querySelector('.js_select');
const faceEl = document.querySelector('.js_face');

//Funciones

function getRandomNumber() {
  const randomNumber = Math.round(Math.random() * 100);
  return randomNumber;
}

function updateBackground() {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  const restNumber = randomNumber % 2;

  if (restNumber === 0) {
    container.classList.add('background-Y');
    container.classList.remove('background-O');
  } else {
    container.classList.add('background-O');
    container.classList.remove('background-Y');
  }
}

function updateFace() {
  const selectValue = selectEl.value;
  faceEl.innerHTML = selectValue;
}

function handleUpdateBtn() {
  //console.log(':)');
  //procesos que ejecutamos cuando pinche sobre boton update
  //estan dentro de la funcion handleClick porque ambas se ejecutan al hacer cliack
  updateBackground();
  updateFace();
}

//Escuchar eventos
update.addEventListener('click', handleUpdateBtn);
