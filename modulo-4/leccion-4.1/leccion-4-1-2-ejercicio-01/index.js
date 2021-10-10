const fs = require('fs'); // import fs from 'fs';

const sum = (a, b) => {
  return a + b;
};
console.log('El contenido del fichero es:', sum(1, 2));
console.log('La longitud del contenido es:', sum.length);

fs.readFile('./input.txt', 'utf8', sum); // asynchronous

// listen event

// const btnElement = document.querySelector('.btn');

// const handleClick = (ev) => {
//   console.log(ev);
// };

// btnElement.addEventListener('click', handleClick);
