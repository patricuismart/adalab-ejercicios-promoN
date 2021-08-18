'use strict';

let dogAgeConvert = '';
let dogAge = 1.9;

if (dogAge > 0 && dogAge <= 1.99) {
  dogAgeConvert = 15;
  let newAge = dogAgeConvert * dogAge;
  console.log(
    `El primer año de un perro equivale a 15 años de humano, la equvalencia humana sería:  ${newAge} años`
  );
} else if (dogAge >= 2 && dogAge < 2.99) {
  dogAgeConvert = 9;
  let newAge = dogAgeConvert * dogAge;
  console.log(
    `El segundo año de un perro equivale a nueve años de humano, la edad sería: ${newAge} años`
  );
} else {
  dogAgeConvert = 5;
  let newAge = dogAgeConvert * dogAge;
  console.log(
    `A partir del tercero, cada año de perro equivale a 5 años de humano, la edad sería: ${newAge} años`
  );
}
