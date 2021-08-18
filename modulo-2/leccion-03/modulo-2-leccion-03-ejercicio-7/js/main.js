'use strict';
//let ingredient = 'espinacas';
//let options = '' || 'Pollo' || 'Merluza' || 'Espinacas';

// Código con if...else

// if (ingredient === '') {
//   console.log('Nada en la nevera');
// } else if (ingredient === 'pollo') {
//   console.log(
//     `Tu ingrediente es ${ingredient}. Puedes freirte un filete con patatas. `
//   );
// } else if (ingredient === 'merluza') {
//   console.log(
//     `Tu ingrediente es ${ingredient}. Puedes hacerte una merluzita en salsa verde. `
//   );
// } else if (ingredient === 'espinacas') {
//   console.log(
//     `Tu ingrediente es ${ingredient}. Puedes hacerte unas espinacas rehogadas. `
//   );
// } else {
//   console.log(
//     `Tu ingrediente es ${ingredient}. Puedes hacerte el plato que más te aptezca.`
//   );
// }

// Código con switch

const ingredient = 'pollo';

switch (ingredient) {
  case '':
    console.log('Nada en la nevera');
    break;
  case 'pollo':
    console.log(
      `Tu ingrediente es ${ingredient}. Puedes freirte un filete con patatas. `
    );
    break;
  case 'merluza':
    console.log(
      `Tu ingrediente es ${ingredient}. Puedes hacerte una merluzita en salsa verde. `
    );
    break;
  case 'espinacas':
    console.log(
      `Tu ingrediente es ${ingredient}. Puedes hacerte unas espinacas rehogadas. `
    );
    break;

  default:
    console.log(
      `Tu ingrediente es ${ingredient}. Puedes hacerte el plato que más te aptezca. `
    );
}
