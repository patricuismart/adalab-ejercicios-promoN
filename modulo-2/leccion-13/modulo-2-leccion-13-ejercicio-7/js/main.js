'use strict';

const times = [56, 9, 45, 28, 35];
const time = times.reduce((acc, time) => acc + time);
const mediaResult = time / times.length;

console.log(mediaResult);
