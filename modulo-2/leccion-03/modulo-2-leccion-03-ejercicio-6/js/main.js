'use strict';
let avocados;
const avocadoPrice = 8;
const money = 16;

// if (money >= avocadoPrice) {
//   avocados = money / avocadoPrice;
// } else {
//   avocados = 0;
// }

money >= avocadoPrice ? (avocados = money / avocadoPrice) : (avocados = 0);

console.log(`vas a comprar ${avocados} aguacates`);
