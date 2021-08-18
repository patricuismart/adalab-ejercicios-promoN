'use strict';

const pearsBasket = {};
pearsBasket.initialValue = 0; //Valor inicial
pearsBasket.actualValue = 2; //Valor actual
pearsBasket.minValue = 1; //Valor minimo
pearsBasket.maxValue = 10; //Valor máximo

// Método para añadir al cesto una pera:
pearsBasket.addPear = (actualValue) => {
  actualValue = actualValue + 1;
  return actualValue;
};

// Método para restar al cesto una pera:

pearsBasket.takePear = (actualValue) => {
  actualValue = actualValue - 1;
  return actualValue;
};

// Método para restablecer el número de peras al valor inicial:

pearsBasket.restPear = (actualValue, initialValue) => {
  actualValue = initialValue;
  return actualValue;
};

let perasNow = pearsBasket.addPear(pearsBasket.actualValue);
console.log(`Peras después de añadir 1: ${perasNow}`);

perasNow = pearsBasket.takePear(pearsBasket.actualValue);
console.log(`Peras después de quitar 1: ${perasNow}`);

perasNow = pearsBasket.restPear(
  pearsBasket.actualValue,
  pearsBasket.initialValue
);
console.log(`Peras después de resetear la cesta: ${perasNow}`);
