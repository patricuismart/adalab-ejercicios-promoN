'use strict';

//Calculador de modelo de caja

function calculatorModelBox(borderBox, width, padding, borderSize) {
  if (borderBox) {
    console.log(
      `Como el elemento es border-box, su ancho es de ${width} px y su ancho total de  ${width} px también `
    );
  } else {
    console.log(
      `El elemento no es border-box, su ancho es de ${width} px y su ancho total de ${
        width + 2 * padding + 2 * borderSize
      } px `
    );
  }
}
console.log(calculatorModelBox(true, 150));
console.log(calculatorModelBox(false, 250, 20, 1));
