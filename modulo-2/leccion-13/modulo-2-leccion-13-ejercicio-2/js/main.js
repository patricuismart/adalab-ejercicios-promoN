'use strict';

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const helloName = (name) => (name = `Bienvenida ${name}`);
const helloMessage = names.map(helloName);

console.log(helloMessage);
