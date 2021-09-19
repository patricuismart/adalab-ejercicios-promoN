'use strict';
const name = document.querySelector('.js_input');
const result = document.querySelector('.js_parragraph');
debugger;
function getValue() {
  result.innerHTML = name.value;
  localStorage.setItem('name', name.value);
}

name.addEventListener('keyUp', getValue);

const getResultText = localStorage.getItem('result');
const getResult = JSON.parse(getResultText);
