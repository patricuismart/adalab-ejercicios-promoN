'use strict';

const marks = [5, 4, 6, 7, 9];
const addOnePoint = (mark) => (mark = mark + 1);
const newMarks = marks.map(addOnePoint);

console.log(newMarks);
