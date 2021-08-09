'use strict';

 // Usamos una variable de ámbito global

const secretLetter = 'y';
function mySecretLetter() {
  return secretLetter;
}
console.log(mySecretLetter()); // devuelve "y"
console.log(secretLetter); // devuelve "y"