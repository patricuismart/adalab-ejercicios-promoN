'use strict';

const button = document.querySelector('.click');
const text = document.querySelector('.text');
button.addEventListener('click', function primerClick() {
  console.log('Mi primer click');
  return text.innerHTML = "Mi primer Click"
});
