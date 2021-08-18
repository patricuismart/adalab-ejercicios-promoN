"use strict";

const adalaber1 = {};
adalaber1.name = "Susana";
adalaber1.age = 34;
adalaber1.profession = "periodista";
debugger;
function run() {
  console.log("Estoy corriendo");
}
run();

debugger;
adalaber1.runAMarathon = (type) =>
  `Estoy corriendo un maratón de ${type} kilómetros`;
console.log(adalaber1.runAMarathon("50"));
