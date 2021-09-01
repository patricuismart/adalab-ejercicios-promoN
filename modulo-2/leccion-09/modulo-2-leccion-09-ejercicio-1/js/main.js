'use strict';
const listElement = document.querySelector('.js_list');
const lostNumbers = [4, 8, 15, 16, 23, 42];
debugger;

// concat of evens + multiples of 3
function bestLostNumbers() {
  let evens = findEvens(lostNumbers);
  let multiples = multipleOf3(lostNumbers);
  const resultConcat = evens.concat(multiples);
  console.log('Los mejores Lost Numbers: ' + resultConcat);
  return bestLostNumbers;
}

// even array number
function findEvens(array) {
  let evens = [];
  for (const index of lostNumbers) {
    if (index % 2 === 0) {
      evens.push(index);
    }
  }
  console.log('Números pares de Lost son: ' + evens);
  return evens;
}
//findEvens();

// multiple of 3 array number
function multipleOf3() {
  let multiples = [];
  for (const index of lostNumbers) {
    if (index % 3 === 0) {
      multiples.push(index);
    }
  }
  console.log('Números múltiplos de 3 son: ' + multiples);
  return multiples;
}
//multipleOf3();

bestLostNumbers();
