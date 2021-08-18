'use strict';
const firstDogImage =
  'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage =
  'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage =
  'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const firstDog = document.querySelector('.js_image-1');
const secondDog = document.querySelector('.js_image-2');
const thirdtDog = document.querySelector('.js_image-3');

firstDog.innerHTML = `<img src= "${firstDogImage}" alt="Perro 1" /> ${firstDogName}`;
secondDog.innerHTML = `<img src= "${secondDogImage}"/> ${secondDogName} `;
thirdtDog.innerHTML = `<img src= "${thirdDogImage}"/> ${thirdDogName}`;

console.log('soy de tipo: ', typeof firstDogImage);
console.log('soy de tipo: ', typeof firstDogName);
console.log('soy de tipo: ', typeof secondDogImage);
console.log('soy de tipo: ', typeof firstDog);
