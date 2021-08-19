'use strict';

const number = 10;

function par() {
  return number % 2;
}
if (par === 0) {
  console.log(`El número ${number} es par`);
} else {
  console.log(`El número ${number} es impar`);
}
