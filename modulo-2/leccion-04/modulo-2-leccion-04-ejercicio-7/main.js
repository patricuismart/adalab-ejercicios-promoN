'use strict';
const btnEl = getEl('.btn');
debugger;
function getEl(selector) {
  const jsConst = document.querySelector(selector);
  if (!jsConst) {
    console.error(
      `No existe ningún elemento con clase, id o tag llamado ${selector}`
    );
  }
  return jsConst;
}

console.log(btnEl);
const otro2 = getEl('.otro');
console.log(otro2);
