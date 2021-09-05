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

for (const data of tasks) {
  if (data.completed) {
    const html = `<li><input class="js-input" checked type="checkbox"><label class="completed">${data.name}</label></li>`;
    tasklist.innerHTML += html;
  } else {
    const html = `<li><input class="js-input" type="checkbox"><label>${data.name}</label></li>`;
    tasklist.innerHTML += html;
  }
}

const allInput = document.querySelectorAll('.js-input');

for (const eachInput of allInput) {
  eachInput.addEventListener('change', handleClick);
}

function handleClick(ev) {
  debugger;
  console.log(ev.target.parentNode.querySelector('label'));
  const labelSister = ev.target.parentNode.querySelector('label');
  labelSister.classList.toggle('completed');
}
