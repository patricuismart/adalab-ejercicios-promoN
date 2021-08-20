'use strict';

debugger;
function getEl(selector) {
  const htmlElelement = document.querySelector(selector);

  if (!htmlElelement) {
    console.error(
      `No existe ningún elemento con clase, id o tag llamado ${selector}`
    );
  }
  return htmlElelement;
}

function par(num) {
  if (num % 2 === 0) {
    console.log(`El número ${num} es par`);
  } else {
    console.log(`El número ${num} es impar`);
  }
}
const myNumber = getEl('.btn');
console.log(`Tu número: ${myNumber.innerHTML}`);
let myNewNumber = parseInt(myNumber.innerHTML);
console.log(par(myNewNumber));
