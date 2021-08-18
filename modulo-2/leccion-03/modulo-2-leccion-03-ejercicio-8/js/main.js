'use strict';
let actualYear = 2022;
const resto = actualYear % 4;

//Código con if...else

if (resto === 0) {
  console.log(`El año ${actualYear} es bisiesto`);
} else {
  console.log(`Faltan ${resto} años para que ${actualYear} sea bisiesto `);
}
