'use strict';
const tasklist = document.querySelector('.js_list');
const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];

for (let index = 0; index < tasks.length; index++) {
  const data = tasks[index];
  if (data.completed) {
    const html = `<li><input id="${index}" class="js-input" checked type="checkbox"><label id="name.${index}"class="completed">${data.name}</label></li>`;
    tasklist.innerHTML += html;
  } else {
    const html = `<li><input id="${index}" class="js-input" type="checkbox"><label id="name.${index}">${data.name}</label></li>`;
    tasklist.innerHTML += html;
  }
}

const allInput = document.querySelectorAll('.js-input');

for (const eachInput of allInput) {
  eachInput.addEventListener('change', handleClick);
}

function handleClick(ev) {
  console.log(ev.target);
  console.log(tasks);
  const indexTochange = ev.target.id;
  if (tasks[indexTochange].completed === true) {
    tasks[indexTochange].completed = false;
  } else {
    tasks[indexTochange].completed = true;
  }
  console.log(tasks);
}
