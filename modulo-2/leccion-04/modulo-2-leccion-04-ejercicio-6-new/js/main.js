'use strict';
const btnEl = getEl('.btn');
debugger;
function getEl(selector) {
  const htmlElement = document.querySelector(selector);
  if (!htmlElement) {
    console.error(
      `No existe ningún elemento con clase, id o tag llamado ${selector}`
    );
  }
  return htmlElement;
}
console.log(btnEl);
