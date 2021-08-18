'use strict';

const hours = 60; //Convert years to hours
const age = document.querySelector('.js_age');
const hoursLive = hours * parseInt(age.innerHTML);

console.log('¿Qué edad tienes?: ' + `${age.innerHTML}`); //userAge
console.log('Los años vividos son: ' + `${hoursLive}`); //Result hours lived
