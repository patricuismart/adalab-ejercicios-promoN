'use strict';

const numbers = [1, 2, 3];
const listElements = document.querySelector('.js_list');

for (let index = 0; index < numbers.length; index++) {
  const newElement = document.createElement('li');
  const newContent = document.createTextNode(numbers[index]);
  newElement.appendChild(newContent);
  listElements.appendChild(newElement);
}
