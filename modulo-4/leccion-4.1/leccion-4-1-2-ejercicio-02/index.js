const fs = require('fs'); // import fs from 'fs';

const myObject = {
  user: 'Mari Carmen',
  email: 'mari@gmail.com',
  age: 28,
};

fs.writeFile('./output.txt', myObject, handleWrite);

const handleWrite = (err, myObject) => {
  if (err) {
    console.log(err);
  } else {
    console.log(('El contenido del fichero es:', JSON.stringify(myObject)));
  }
};

const handleRead = (err, fileContents) => {
  if (err) {
    console.log(err);
  } else {
    console.log(fileContents);
  }
};

fs.readFile('./output.txt', 'utf8', handleRead); // asynchronous
